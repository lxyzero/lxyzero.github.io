/*
 * 选项卡(jTab)插件
 * 江鸿宾(QQ33080907)
 * 最近修改：2011-9-16
 * 本插件只用于作者参与的项目，未经许可请勿转载
 */
 
//用法:
//$(".tab").jTab();

;(function($){
	$.fn.jTab = function(options){
		//默认属性或参数
		var defaults={
			current:"current", //当前高亮的CSS类名
			event:"mouseover"  //触发事件
		};
		
		//调用时的参数覆盖默认参数
		var opts=$.extend(defaults, options);

		//绑定事件
		return this.each(function(i){
			//选项卡所在ul标签
			var tab_ul=$(this).children("ul:first");
			//选项卡标签
			var tab_li=tab_ul.children("li");
			//设置标签样式
			tab_li.css({cursor:"pointer",float:"left","text-align":"center"});
			//内容
			var content=tab_ul.nextAll();
			//初始显示隐藏（li标签的class为current，如果没有设置current则默认为第一个）
			var i=tab_li.index($("."+opts.current,$(this)));
			if(i==-1){
				i=0;
				tab_li.eq(i).addClass(opts.current);
			}
			content.hide().eq(i).show();
			//绑定事件
			tab_li.bind(opts.event, function(){
				if(!$(this).hasClass(opts.current)){
					//当前tab的索引
					var i = tab_li.index($(this));
					tab_li.removeClass(opts.current);
					$(this).addClass(opts.current);
					//content.hide().eq(i).fadeIn();
					content.hide().eq(i).show();
				}
			});
		});	
		
		//调试
		function debug(str){
			if(jQuery("#debug").size()==0){$("body").prepend("<div id='debug' style='position:absolute;background:#F00;color:#FFF;padding:5px;filter:alpha(Opacity=80);opacity:0.8;font-size:12px'></div>");}
			jQuery("#debug").append(str+"<br />");
		}
	};
})(jQuery);