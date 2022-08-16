import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('logo', 'assets/phaser-logo.png');
  }

  create() {
    this.add.image(250, 250, 'logo');
  }
}
