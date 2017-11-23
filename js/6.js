/**
 * 不仅仅是jQuery插件的开发，我们在写任何JS代码时都应该注意的一点是不要污染全局命名空间。因为随着你代码的增多，如果有意无意在全局范围内定义一些变量的话，最后很难维护，也容易跟别人写的代码有冲突。
 *
 *
 * 用自调用匿名函数包裹你的代码
 *
 * undefined，稍微有意思一点，为了得到没有被修改的undefined，我们并没有传递这个参数，但却在接收时接收了它，因为实际并没有传，所以‘undefined’那个位置接收到的就是真实的'undefined'了
 */

;(function($,window,document,undefined){
	//定义Beautifier的构造函数
	var Beautifier = function(ele,opt){
		//注意这里的ele还是jq对象
		this.$element = ele;
		
		this.defaults = {
			color :　"green",
			fontSize : "14px",
			textDecoration : "none"
		}

		this.options = $.extend({},this.defaults,opt);
	}

	// 定义公共方法
	Beautifier.prototype = {
		beautify : function(){
			return this.$element.css({
	            'color': this.options.color,
	            'fontSize': this.options.fontSize,
	            'textDecoration': this.options.textDecoration			
			})
		}
	}

	$.fn.myPlugin = function(options){
		//创建Beautifier实体
		var beautifyer = new Beautifier(this,options);

		return beautifyer.beautify();
	}
})(jQuery,window,document);