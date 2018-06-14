class BackGround extends Laya.Sprite {
    private bg1 : Laya.Sprite;
    private bg2 : Laya.Sprite;

    constructor() {
        super();
        this.init();
    }

    init() : void {
        this.bg1 = new Laya.Sprite();
        this.bg1.loadImage("war/background.png");
        this.addChild(this.bg1);
        this.bg2 = new Laya.Sprite();
        this.bg2.loadImage("war/background.png");
        this.bg2.pos(0, -723);
        this.addChild(this.bg2);

        Laya.timer.frameLoop(1, this, this.onLoop);
    }

    onLoop() : void {
        // this.y += 1;
        this.bg1.y += 1;
        this.bg2.y += 1;
        if (this.bg1.y + this.y > 723) {
            this.bg1.y -= 723 * 2;
        }if (this.bg2.y + this.y > 723) {
            this.bg2.y -= 723 * 2;
        }
    }
}