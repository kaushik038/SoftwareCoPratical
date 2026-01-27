import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useRef } from 'react';

import CustomText from 'AppCompoments/CustomText';
import CustomImage from 'AppCompoments/CutomImage';
import CustomIcon from 'AppCompoments/CustomIcon';
import ICONS from 'AppUtils/icons';

import { Images } from 'AppAssets/images';

import styles from './styles';
import { useStore } from 'AppMpdules/home/api';
import { Store } from 'AppCompoments/StoreCarousel';
import CustomHeader from 'AppCompoments/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { StoreDetailNavProp } from 'AppRoutes/constant';

interface StoreDetailProps {
  route: any;
}

const StoreDetail: React.FC<StoreDetailProps> = ({ route }) => {
  const navigation = useNavigation<StoreDetailNavProp>();
  const { id } = route?.params ?? { id: '' };
  const { data } = useStore(id);
  const mapRef = useRef<MapView>(null);

  const storeData = data?.data?.data as Store;

  useEffect(() => {
    if (storeData?.location?.lat && storeData?.location?.long) {
      mapRef.current?.animateToRegion(
        {
          latitude: storeData?.location?.lat,
          longitude: storeData?.location?.long,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        2000,
      );
    }
  }, [storeData]);

  return (
    <View style={styles.container}>
      <CustomImage source={{ uri: storeData?.image }} style={styles.image}>
        <CustomHeader
          title=""
          isLeft={true}
          isRight={false}
          navigation={navigation}
          isDetailPage={true}
        />
        <View style={styles.headerImageView}>
          <CustomImage source={{ uri: storeData?.image }} style={styles.logo} />
          <CustomText value={storeData?.name} style={styles.name} />
          <View style={styles.categoryView}>
            <CustomIcon name={ICONS.DOT} style={styles.dot} />
            <CustomText value={storeData?.category} style={styles.type} />
          </View>
        </View>
      </CustomImage>
      <View style={styles.innerContainer}>
        <CustomText value={'Stores'} style={styles.subHeaderTitle} />
        <View style={styles.location}>
          <CustomIcon name={ICONS.LOCATION} style={styles.locationIcon} />
          <CustomText
            value={storeData?.location?.address}
            style={styles.locationText}
          />
        </View>
        <CustomText value={'Map'} style={styles.subHeaderTitle} />

        {storeData?.location?.lat && storeData?.location?.long && (
          <View style={styles.mapView}>
            <MapView
              ref={mapRef}
              initialRegion={{
                latitude: storeData?.location?.lat,
                longitude: storeData?.location?.long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={styles.map}
            >
              <Marker
                coordinate={{
                  latitude: storeData?.location?.lat,
                  longitude: storeData?.location?.long,
                }}
              >
                <View style={styles.markerView}>
                  <CustomIcon
                    name={ICONS.LOCATION_PIN}
                    style={styles.locationIcon}
                  />
                  <Text style={styles.markerAddress}>{storeData?.name}</Text>
                </View>
              </Marker>
            </MapView>
          </View>
        )}
      </View>
    </View>
  );
};

export default StoreDetail;
