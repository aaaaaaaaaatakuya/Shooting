//PLAYERを定義
phina.define('PLAYER', {
  //sh.entityクラスを継承
  superClass: 'sh.entity',
  //初期化
  init: function() {
    this.superInit(4);
    //ポジション
    this.setPosition(SC_W/2,SC_H/2)
    //TODO 当たり判定 弾側でやるかも。
    this.speed = null;
    this.rotationSpeed = null;
  },
  //アップデート時の処理
  update: function(app) {
    var key = app.keyboard;
    //レーザー　TODO
    if (key.getKey('c')) {
      //回転
      if (key.getKey('x')) { this.rotation += this.rotationSpeed / 3; }//右回転
      if (key.getKey('z')) { this.rotation -= this.rotationSpeed / 3; }//左回転
      // 移動
      if (this.x - 44 >= 0) {if (key.getKey('left')) { this.x -= this.speed / 2; }}//左
      if(SC_W >= this.x + 44) {if (key.getKey('right')) { this.x += this.speed / 2; }}//右
      if (this.y - 44 >= 0) {if (key.getKey('up')) { this.y -= this.speed / 2; }}//上
      if(SC_H >= this.y + 44) {if (key.getKey('down')) { this.y += this.speed / 2; }}//下
    }else{
      //回転
      if (key.getKey('x')) { this.rotation += this.rotationSpeed; }//右回転
      if (key.getKey('z')) { this.rotation -= this.rotationSpeed; }//左回転
      // 移動
      if (this.x - 44 >= 0) {if (key.getKey('left')) { this.x -= this.speed; }}//左
      if(SC_W >= this.x + 44) {if (key.getKey('right')) { this.x += this.speed; }}//右
      if (this.y - 44 >= 0) {if (key.getKey('up')) { this.y -= this.speed; }}//上
      if(SC_H >= this.y + 44) {if (key.getKey('down')) { this.y += this.speed; }}//下
    }

  }
});
