class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    create(){
        this.cameras.main.setBackgroundColor('#eaf');

        this.add.text(50,50, "This is the intro screen!").setFontSize(50);
        this.add.text(50,100, "Click/Tap anywhere to begin!").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('outro'));
            //this.startupsound.stop();
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    preload() {
    }
    create(){
        this.cameras.main.setBackgroundColor('#fea');

        this.add.text(50,50, "You did it! You completed the game! ").setFontSize(50);
        this.add.text(50,100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('intro'));
            //this.startupsound.stop();
        });
    }

}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Outro],
    title: "CinProt",
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
});