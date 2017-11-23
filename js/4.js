/**
 * 一个强劲的插件是可以让使用者随意定制的，这要求我们提供在编写插件时就要考虑得全面些，尽量提供合适的参数。
 * 当然插件也必须拥有自己的默认值
 * 使用$.extend()方法可以覆盖默认值
 */

$.fn.myPlugin = function(options){
	var defaults = {
		"color" : "red",
		"fontSize" : "12px"
	}

	//如果有定制参数，则覆盖默认值
	// var opts = $.extend(defaults,options);
	var opts = $.extend({},defaults,options);
	console.log(defaults); //注意使用$.extend()方法会覆盖默认对象中的值，所以这里使用一个空对象改进

	return this.each(function(){
		$(this).css({
			color : opts.color,
			fontSize : opts.fontSize
		})
	})  
} 