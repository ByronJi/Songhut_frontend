
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/test/test","pages/main/main","pages/login/login","pages/reg/reg","pages/pwd/pwd","pages/user/user","pages/recordAccompany/recordAccompany","pages/transformVtoS/transformVtoS","pages/chooseTransform/chooseTransform","pages/newMusicLibrary/newMusicLibrary","pages/newLyrics/newLyrics","pages/recordSinging/recordSinging","pages/recordComposition/recordComposition"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#56e3cf","backgroundColor":"#b3e9eb"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"首页","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"songhut","compilerVersion":"2.5.1","entryPagePath":"pages/test/test","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000}};
var __uniRoutes = [{"path":"/pages/test/test","meta":{"isQuit":true},"window":{"navigationBarTitleText":"导航"}},{"path":"/pages/main/main","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"登录模板"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/reg/reg","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/pwd/pwd","meta":{},"window":{"navigationBarTitleText":"找回密码"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/recordAccompany/recordAccompany","meta":{},"window":{"navigationBarTitleText":"伴奏"}},{"path":"/pages/transformVtoS/transformVtoS","meta":{},"window":{"navigationBarTitleText":"试听"}},{"path":"/pages/chooseTransform/chooseTransform","meta":{},"window":{"navigationBarTitleText":"转为旋律"}},{"path":"/pages/newMusicLibrary/newMusicLibrary","meta":{},"window":{"navigationBarTitleText":"新建乐库"}},{"path":"/pages/newLyrics/newLyrics","meta":{},"window":{"navigationBarTitleText":"词作"}},{"path":"/pages/recordSinging/recordSinging","meta":{},"window":{"navigationBarTitleText":"演唱"}},{"path":"/pages/recordComposition/recordComposition","meta":{},"window":{"navigationBarTitleText":"作曲"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});