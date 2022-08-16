import Phaser from 'phaser';

import phaserLogo from '../../assets/phaser-logo.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('PreloaderScene');
  }

  preload() {
    this.load.image('logo', phaserLogo);
  }

  create() {
    this.scene.start('GameScene');
  }
}
