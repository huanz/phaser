import Phaser from 'phaser';

import Constants from './config/constants';
import Scenes from './scenes/index';

const config = {
  type: Phaser.AUTO,
  width: Constants.width,
  height: Constants.height,
  scene: Scenes,
};

new Phaser.Game(config);

if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}
