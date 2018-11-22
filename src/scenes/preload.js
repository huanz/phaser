import { Scene } from 'phaser';

import Constants from '../config/constants';

import logo from '../assets/logo.png';

export default class PreloadScene extends Scene {
  constructor() {
    super('preload');
  }

  preload() {
    // 上
    const loadingText = this.make.text({
      x: Constants.w2,
      y: Constants.h2 - 50,
      text: '加载中...',
      style: {
        fontSize: '20px',
        color: '#fff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();

    const boxW = 300;
    const boxX = (Constants.width - boxW) / 2;
    const boxH = 50;
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(boxX, Constants.h2 - boxH / 2, boxW, boxH);

    // 居中
    const percentText = this.make.text({
      x: Constants.w2,
      y: Constants.h2,
      text: '0%',
      style: {
        fontSize: '18px',
        color: '#fff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: Constants.w2,
      y: Constants.h2 + 50,
      text: '',
      style: {
        fontSize: '18px',
        color: '#fff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    const barP = 10;
    const barH = 30;
    this.load.on('progress', value => {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(boxX + barP, Constants.h2 - barH / 2, (boxW - 2 * barP) * value, barH);
    });

    this.load.on('fileprogress', file => {
      assetText.setText('正在加载资源：' + file.key);
    });

    this.load.on('complete', () => {
      [progressBar, progressBox, loadingText, percentText, assetText].forEach(element => {
        element.destroy();
      });
    });

    for (var i = 0; i < 1000; i++) {
      this.load.image('logo' + i, logo);
    }
  }

  create() {
    this.scene.start('start');
  }
}
