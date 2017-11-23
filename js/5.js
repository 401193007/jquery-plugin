/**
 * 若要编写一个复杂的插件，代码量会很大，如何组织代码就成了一个需要面临的问题，没有一个好的方式来组织这些代码，整体感觉会杂乱无章，同时也不好维护，所以将插件的所有方法属性包装到一个对象上，用面向对象的思维来进行开发，无疑会使工作轻松很多。

 * 为什么要有面向对象的思维，因为如果不这样，你可能需要一个方法的时候就去定义一个function，当需要另外一个方法的时候，再去随便定义一个function，同样，需要一个变量的时候，毫无规则地定义一些散落在代码各处的变量。

 *还是老问题，不方便维护，也不够清晰。当然，这些问题在代码规模较小时是体现不出来的。

  如果将需要的重要变量定义到对象的属性上，函数变成对象的方法，当我们需要的时候通过对象来获取，一来方便管理，二来不会影响外部命名空间，因为所有这些变量名还有方法名都是在对象内部。
 */

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
