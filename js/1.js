/**
 * 通过$.extend()来扩展jQuery,比如说公共方法，时间格式化这些
 * 通过$.fn 向jQuery添加新的方法   添加新的JQ访问例如$("a").highLight();
 * 通过$.widget()应用jQuery UI的部件工厂方式创建
 */

$.extend({
	sayHello:function(name){
		console.log("Hello,"+(name?name:'John')+"!");
	}
})
$.sayHello();
$.sayHello("Tam");