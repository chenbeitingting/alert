//客户端存储
var storage_prefix = ''; //存储key的前缀
var storage = {
    hname:location.hostname?location.hostname:'localStatus',
    isLocalStorage:window.localStorage?true:false,
    dataDom:null,

    initDom:function(){ //初始化userData
        if(!this.dataDom){
            try{
                this.dataDom = document.createElement('input');//这里使用hidden的input元素
                this.dataDom.type = 'hidden';
                this.dataDom.style.display = "none";
                this.dataDom.addBehavior('#default#userData');//这是userData的语法
                document.body.appendChild(this.dataDom);
                var exDate = new Date();
                exDate = exDate.getDate()+30;
                this.dataDom.expires = exDate.toUTCString();//设定过期时间
            }catch(ex){
                return false;
            }
        }
        return true;
    },
    setItem:function(key,value,noPrefix){
		if (noPrefix == null || !noPrefix){
			key = storage_prefix + key;
		}
        if(this.isLocalStorage){
            window.localStorage.setItem(key, JSON.stringify(value));
        }else{
            if(this.initDom()){
                this.dataDom.load(this.hname);
                this.dataDom.setAttribute(key, JSON.stringify(value));
                this.dataDom.save(this.hname)
            }
        }
    },
    getItem:function(key,noPrefix){
    	if (noPrefix == null || !noPrefix){
			key = storage_prefix + key;
		}
        if(this.isLocalStorage){
        	var t = window.localStorage.getItem(key);
        	if (t === null){
        		return t;
        	} else {
        		return JSON.parse(t);
        	}
        }else{
            if(this.initDom()){
                this.dataDom.load(this.hname);
                var t = this.dataDom.getAttribute(key);
                if (t === null){
                	return t;
                } else {
                	return JSON.parse(t);
                }
            }
        }
    },
    removeItem:function(key,noPrefix){
    	if (noPrefix == null || !noPrefix){
			key = storage_prefix + key;
		}
        if(this.isLocalStorage){
            localStorage.removeItem(key);
        }else{
            if(this.initDom()){
                this.dataDom.load(this.hname);
                this.dataDom.removeAttribute(key);
                this.dataDom.save(this.hname)
            }
        }
    }
};

/**
 * 解析url参数
 */
function parse_url(){
    var url = location.href;
    var i = url.indexOf('?');
    if (i == -1)return;
    var querystr = url.substr(i + 1);
    var arr1 = querystr.split('&');
    var arr2 = new Object();
    for (i in arr1){
        var ta = arr1[i].split('=');
        arr2[ta[0]]=ta[1];
    }
    return arr2;
}