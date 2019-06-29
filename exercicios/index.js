import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import Menu from './src/Menu';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Menu);
