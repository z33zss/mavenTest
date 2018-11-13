/**
 * 引用JS和CSS头文件
 */
var rootPath = getRootPath(); //项目路径

/**
 * 动态加载CSS和JS文件
 */
var dynamicLoading = {
    meta : function(){
        document.write('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">');
    },
    css: function(path){
        if(!path || path.length === 0){
            throw new Error('argument "path" is required!');
        }
        document.write('<link rel="stylesheet" type="text/css" href="' + path + '">');
    },
    js: function(path, charset){
        if(!path || path.length === 0){
            throw new Error('argument "path" is required!');
        }
        document.write('<script  type="text/javascript" src="' + path + '"></script>');
    }
};

/**
 * 取得项目路径
 * @author wul
 */
function getRootPath() {
    //取得当前URL
    var path = window.document.location.href;
    //取得主机地址后的目录
    var pathName = window.document.location.pathname;
    var post = path.indexOf(pathName);
    //取得主机地址
    var hostPath = path.substring(0, post);
    //取得项目名
    var name = pathName.substring(0, pathName.substr(1).indexOf("/") + 1);
    return hostPath + name + "/";
}

//动态生成meta
dynamicLoading.meta();

//动态加载项目 CSS文件
dynamicLoading.css(rootPath + "resources/css/reset.css");
dynamicLoading.css(rootPath + "resources/css/style.css");
dynamicLoading.css(rootPath + "resources/css/invalid.css");



//动态加载项目 JS文件
dynamicLoading.js(rootPath + "resources/scripts/jquery-1.11.3.min.js", "utf-8");
dynamicLoading.js(rootPath + "resources/scripts/simpla.jquery.configuration.js", "utf-8");
dynamicLoading.js(rootPath + "resources/scripts/facebox.js", "utf-8");
dynamicLoading.js(rootPath + "resources/scripts/jquery.wysiwyg.js", "utf-8");
dynamicLoading.js(rootPath + "resources/scripts/jquery.datePicker.js", "utf-8");
dynamicLoading.js(rootPath + "resources/scripts/jquery.date.js", "utf-8");
dynamicLoading.css(rootPath + "resources/css/jquery-ui.min.css");
dynamicLoading.js(rootPath + "resources/scripts/jquery-ui.min.js");




//dynamicLoading.css(rootPath + "resources/css/mui.min.css");
//dynamicLoading.js(rootPath + "resources/scripts/mui.min.js", "utf-8");

dynamicLoading.js(rootPath + "resources/overview-map/echarts.min.js", "utf-8");
dynamicLoading.js(rootPath + "resources/overview-map/echarts-gl.min.js", "utf-8");
dynamicLoading.js(rootPath + "resources/overview-map/ecStat.min.js", "utf-8");
dynamicLoading.js(rootPath + "resources/overview-map/dataTool.min.js", "utf-8");
dynamicLoading.js(rootPath + "resources/overview-map/china.js", "utf-8");
dynamicLoading.js(rootPath + "resources/overview-map/world.js", "utf-8");
dynamicLoading.js(rootPath + "resources/overview-map/api?v=2.0&ak=ZUONbpqGBsYGXNIYHicvbAbM", "utf-8");
dynamicLoading.js(rootPath + "resources/overview-map/bmap.min.js", "utf-8");
dynamicLoading.js(rootPath + "resources/overview-map/simplex.js", "utf-8");