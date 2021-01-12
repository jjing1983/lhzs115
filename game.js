require('./weapp-adapter.js');
require('./manifest.js');
require('./egret.wxgame.js');

// 启动微信小游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用
if(window.RES && RES.processor) {
    require('./library/image.js');
    require('./library/text.js');
    require('./library/sound.js');
    require('./library/binary.js');
}

//开发时有需要就打开，微信开发者工具上传代码的时候记得注释掉start----------------
//window["isMiniUseHttp"] = true;
//window["isMiniHostTest"] = true;
//开发时有需要就打开，微信开发者工具上传代码的时候记得注释掉end----------------

window["isMiniWss"] = true;

//打点入口时间
window["gameSig"] = Date.now() + "" + (Math.random()*10000000).toFixed(0);
window["bgTime"] = Date.now();

//注入小游戏名,对应资源读取目录
window["wxMiniName"] = "lhzs";//烈火战神
//注入pfId
window["WxMiniGamePfId"] = 66;
//注入gameId
window["WxMiniGameId"] = 66;
//注入sdk参数
window["zwWxMiniSdkId"] = "6204";
window["zwWxMiniSdkChannelId"] = "638ba95ad28552b6ef9a0ed7af6580e7";
window["zwWxMiniSdkToken"] = "lhzsol1609835085";
window["zwWxMiniSdkAppId"] = "wx7ed9548db28df3a6";
//注入提审号字段
window["zwWxMiniAuditVerStr"] = "ZwWxMiniLhzsAuditVer"

let runOptions = {
    //以下为自动修改，请勿修改
    //The following is automatically modified, please do not modify
    //----auto option start----
		entryClassName: "Main",
		orientation: "auto",
		frameRate: 30,
		scaleMode: "fixedWidth",
		contentWidth: 580,
		contentHeight: 930,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		maxTouches: 2,
		//----auto option end----
    renderMode: 'webgl',
    audioType: 0,
    calculateCanvasScaleFactor: function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }
};

const runEgret = function () {
    egret.runEgret(runOptions);
}

if (wx.loadSubpackage) {
  require("./EgretSubPackageLoading.js");
  runOptions.entryClassName = "EgretSubPackageLoading";
  runEgret();
  let task = wx.loadSubpackage({
    // 开发者根据自身需求更改
    name: "jsSplit",
    success: function () {
      EgretSubPackageLoading.instance.onSuccess();
    }
  });

  task.onProgressUpdate(res => {
    EgretSubPackageLoading.instance.setProgress(res);
  })
} else {
  require("./jsSplit/game.js");
  runEgret();
}