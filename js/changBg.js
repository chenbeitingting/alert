//点击时跟换背景色
define(['jquery'],function($){
     function changBg(){
     	  this.cfg={
     	  	    target:null,
              currentClass:null,
              laterClass:null,
              callback:null
     	  };
     };
     changBg.prototype={
         init:function(cfg){
              var CFG=$.extend(this.cfg,cfg);
              CFG.target.removeClass(CFG.currentClass).addClass(CFG.laterClass);
              setTimeout(function(){
                  CFG.target.removeClass(CFG.laterClass).addClass(CFG.currentClass);
                  CFG.callback();
              },300);

         }
     };
     return {changbg:changBg};
});