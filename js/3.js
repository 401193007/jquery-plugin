/**
 * jQuery一个时常优雅的特性是支持链式调用
 * 把已经使用过插件功能的jq对象返回
 */

$.fn.myPlugin = function(){
	this.css("color","green");

	//注意这里是一个集合
	console.log(this.each(function(){}))
	return this.each(function(){
		$(this).append(' '+$(this).attr('href'));
	})
} 