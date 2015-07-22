//alert弹出框
define(['jquery'],function($){
	 function Widnow(){
           this.cfg={
           	   width:500,//弹出框高度
           	   height:300,//弹出框宽度
               left:0,
               top:0,
           	   title:'提示',//弹出框标题
           	   content:'',//弹出框内容
           	   hasMask:true,//添加遮罩层
           	   buttons:[]//按钮
           };

	 };
	 Widnow.prototype={
      //显示正在加载中
	 	  loading:function(){
            var htm='<div class="load_bg"><img src="img/loading.gif"></div>';
            $(htm).appendTo('body');
      },
      //移除loading小图标
      removeLoading:function(){
           $(".load_bg").remove();
      },
      //alert弹出框
      alert:function(cfg){
	 	  	 var CFG=$.extend(this.cfg,cfg);

	 	  	 //弹出框样式
         var htm='<div class="window_boundingBox"><div class="widnow_header">'+CFG.title+'</div><div class="window_body">'+CFG.content+'</div>';
         if(CFG.buttons){
             if(CFG.buttons.length == 1){
                htm+='<div class="onebutton"><a  id="cancel">'+CFG.buttons[0].butName+'</a></div>';
             }else if(CFG.buttons.length == 2){
                 htm+='<div class="twobutton"><a id="cancel">'+CFG.buttons[0].butName+'</a><a id="confirm">'+CFG.buttons[1].butName+'</a></div>';
             }
         }
         htm+='</div>';
         var boundingBox=$(htm);
         boundingBox.css({
            "width":CFG.width+"px",
            "height": CFG.height+"px",
            "margin-left":-CFG.width/2+"px",
            "margin-top":-CFG.height/2+"px"
         });
         var mask="";
         if(CFG.hasMask){
               mask=$('<div class="window_mask"></div>');
               mask.appendTo('body');
         }
         boundingBox.appendTo('body');

         $("#cancel").click(function(event) {
             boundingBox.remove();
             mask.remove();
             CFG.buttons[0].handler();
         });
         $("#confirm").click(function(event) {
             boundingBox.remove();
             mask.remove();
             CFG.buttons[1].handler();
           /* Act on the event */
         });
	 	  },
      //从底方滑出提示语
      sliderTip:function(tip){
          var htm='<div class="Slidertip">'+tip+'</div>';
          $(htm).appendTo('body');
          
          setTimeout(function(){
              $(".Slidertip").css("bottom","0px");
          },100);

          setTimeout(function(){
              $(".Slidertip").css("bottom","-60px");
          },2500);
         
      }
	 };
   return {Widnow:Widnow};
});

