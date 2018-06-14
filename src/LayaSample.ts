// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(400, 723);

        var bg : BackGround = new BackGround();
        Laya.stage.addChild(bg);
    }
}
new GameMain();