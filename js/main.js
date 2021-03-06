//phina.jsをグローバル領域に展開
phina.globalize();


//定数
var SC_W = 1200;// 画面横サイズ
var SC_H = 670;// 画面縦サイズ
var FPS = 60;//FPS
var SCENE_DEFAULT = {
  width: SC_W,
  height: SC_H,
};//シーンのデフォルト
var GAME_TITLE = 'Astro Direction 360 deg';//タイトル
var GAME_VERSION = 'version Pre-Alpha 0.1';//バージョン情報

//ネームスペース
var sh = {};

/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    backgroundColor: '#000011',//背景色
    fps: FPS,//FPS
    width: SC_W,//幅
    height: SC_H,//高さ
    fit: true,//フィット
  });
  app.enableStats();//fpsの表示
  app.replaceScene(sh.MainSequence());
  app.run();// 実行
});
