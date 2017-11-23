/**
 * JQ插件开发的基本格式
 * $.fn.pluginName = function(){ //do something}
 * 注意在插件内部使用this，一般是jq获取元素的集合
 * 注意调用
 */

$.fn.myPlugin = function(){
	this.css("color","red");
}
