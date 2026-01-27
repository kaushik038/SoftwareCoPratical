import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from 'AppAssets/json/selection.json';

const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'softwareCoPractical',
  'softwareCoPractical.ttf',
);

export default CustomIcon;
