import { Platform } from 'react-native';
import RNFS from 'react-native-fs';

export const validateEmail = (email: string) => {
  // A common regex pattern for email format
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email).toLowerCase());
};

export const formatHHMMSS = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num: number) => String(num).padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

export const getAudioDirectory = async () => {
  const dir = Platform.select({
    ios: `${RNFS.DocumentDirectoryPath}/Audio`,
    android: `${RNFS.ExternalDirectoryPath}/Audio`,
  });

  const exists = await RNFS.exists(dir!);
  if (!exists) {
    await RNFS.mkdir(dir!);
  }

  return dir!;
};
