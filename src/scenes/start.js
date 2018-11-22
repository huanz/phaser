import { Scene } from 'phaser';

import Constants from '../config/constants';

export default class StartScene extends Scene {
  constructor() {
    super('start');
  }

  create() {
    const text = this.make.text({
      x: Constants.w2,
      y: Constants.h2,
      text: '开始',
      style: {
        fontSize: '28px',
      },
    });
    text.setOrigin(0.5, 0.5);
  }
}
