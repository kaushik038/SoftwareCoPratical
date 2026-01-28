import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Linking, Platform, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';
import CustomText from 'AppCompoments/CustomText';
import recordingAnim from 'AppAssets/json/recording.json';
import CircleButton from 'AppCompoments/CircleButton';
import ICONS from 'AppUtils/icons';
import {
  request,
  PERMISSIONS,
  PermissionStatus,
  openSettings,
} from 'react-native-permissions';
import Sound from 'react-native-nitro-sound';
import RNFS from 'react-native-fs';
import { getAudioDirectory } from 'AppSrc/utils/helper';
import Toast from 'react-native-toast-message';

const AudioRecording = () => {
  const animationRef = useRef<LottieView>(null);
  const [startRecording, setStartRecording] = useState(false);
  const [recordFileUrl, setRecordFileUrl] = useState('');
  const [audioPlay, setAudioPlay] = useState(false);
  const [audioPause, setAudioPause] = useState(false);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [playTime, setPlayTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');

  useEffect(() => {
    if (Platform.OS == 'ios') {
      request(PERMISSIONS.IOS.MICROPHONE);
    } else {
      request(PERMISSIONS.ANDROID.RECORD_AUDIO);
    }
  }, []);

  const startRecord = async () => {
    try {
      animationRef?.current?.play();
      setStartRecording(true);

      // path selection
      const path = Platform.select({
        ios: 'recording.m4a', // filename only
        android: `${RNFS.CachesDirectoryPath}/recording.mp3`,
      });

      const result = await Sound.startRecorder(path);

      Sound.addRecordBackListener(e => {
        setRecordTime(Sound.mmssss(Math.floor(e.currentPosition)));
      });
    } catch (error) {
      animationRef?.current?.pause();
      setStartRecording(false);

      Toast.show({
        type: 'error',
        text1: `Failed to stop recording`,
      });
    }
  };

  const checkPremission = (res: PermissionStatus) => {
    switch (res) {
      case 'granted':
        startRecord();
        break;
      case 'blocked':
        Alert.alert(
          'Permission',
          'Recording is blocked. Please allow microphone permission in Settings.',
          [
            { text: 'Cancel' },
            {
              text: 'Open Setting',
              onPress: () => {
                openSettings('application').catch(() =>
                  console.warn('Cannot open app settings'),
                );
              },
            },
          ],
        );
        break;
      case 'denied':
        request(PERMISSIONS.IOS.MICROPHONE);
        break;
      case 'unavailable':
        Toast.show({
          type: 'error',
          text1: `This feature is currently not available.`,
        });
        break;
    }
  };

  const onStartRecord = () => {
    if (Platform.OS == 'ios') {
      request(PERMISSIONS.IOS.MICROPHONE).then(res => {
        checkPremission(res);
      });
    } else {
      request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(res => {
        checkPremission(res);
      });
    }
  };

  const onStopRecord = async () => {
    try {
      animationRef?.current?.pause();
      setStartRecording(false);
      const result = await Sound.stopRecorder();
      Sound.removeRecordBackListener();

      setRecordFileUrl?.(result);
    } catch (error) {
      animationRef?.current?.pause();
      setStartRecording(false);
      Toast.show({
        type: 'error',
        text1: `Failed to stop recording`,
      });
    }
  };

  const onStartPlay = async () => {
    try {
      const msg = await Sound.startPlayer(recordFileUrl);
      Sound.addPlayBackListener(e => {
        setPlayTime(Sound.mmssss(Math.floor(e.currentPosition)));
        setDuration(Sound.mmssss(Math.floor(e.duration)));
      });

      // Use the proper playback end listener
      Sound.addPlaybackEndListener(e => {
        setAudioPlay(false);
        setPlayTime('00:00:00');
        animationRef?.current?.pause();
      });
      animationRef?.current?.play();
      setAudioPlay(true);
      setAudioPause(true);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: `Failed to stop playback`,
      });
    }
  };

  const onPausePlay = async () => {
    setAudioPause(!audioPause);
    if (audioPause) {
      animationRef?.current?.pause();
      await Sound.pausePlayer();
    } else {
      animationRef?.current?.play();
      await Sound.resumePlayer();
    }
  };

  const onStopPlay = async () => {
    try {
      animationRef?.current?.pause();
      await Sound.stopPlayer();
      Sound.removePlayBackListener();
      Sound.removePlaybackEndListener();
      setAudioPlay(false);
      setPlayTime('00:00:00');
      setDuration('00:00:00');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: `Failed to stop playback`,
      });
    }
  };

  const saveRecording = async () => {
    if (!recordFileUrl) return;

    const dir = await getAudioDirectory();
    const fileName = `recording_${Date.now()}.${
      Platform.OS === 'ios' ? 'm4a' : 'mp3'
    }`;
    const finalPath = `${dir}/${fileName}`;

    try {
      await RNFS.moveFile(recordFileUrl, finalPath);
      Toast.show({
        type: 'success',
        text1: `Recording saved at ${finalPath}`,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: `Failed to save recording`,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <LottieView
          ref={animationRef}
          source={recordingAnim}
          style={styles.lottieView}
        />
        <CustomText
          value={!recordFileUrl ? recordTime : playTime}
          style={styles.time}
        />
        {!recordFileUrl ? (
          <View style={styles.buttonView}>
            <CircleButton
              iconName={!startRecording ? ICONS.MIC : ICONS.STOP}
              label={!startRecording ? 'New Recording:' : 'Stop Recording:'}
              onPress={!startRecording ? onStartRecord : onStopRecord}
            />
          </View>
        ) : (
          <View style={styles.audioPlayButton}>
            <CircleButton
              iconName={
                audioPlay ? (audioPause ? ICONS.PAUSE : ICONS.PLAY) : ICONS.PLAY
              }
              label={audioPlay ? (audioPause ? 'Pause' : 'Play') : 'Play'}
              onPress={audioPlay ? onPausePlay : onStartPlay}
            />
            {audioPlay && (
              <CircleButton
                iconName={ICONS.STOP}
                label={'Stop'}
                onPress={onStopPlay}
              />
            )}
            <CircleButton
              iconName={ICONS.SAVE}
              label={'Save'}
              onPress={saveRecording}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default AudioRecording;
