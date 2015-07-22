# alert
公用alert提示框

   new Widnow().alert({
                content:"<div>很遗憾您不能参加此次活动</div>",//弹出框内容
                buttons:[
                    {
                        butName:'取消',
                        handler:function(){
                            //closeEvent(post);
                        }
                    }
                ]
            });
