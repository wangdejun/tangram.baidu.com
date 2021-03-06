var conf = {
    //    定义包类型
    //    class|method|field
    clazz: {
        type: 'method',
        'method': 'baidu.fx.current',
		dependPackages:['baidu.fx.moveTo','baidu.fx.getTransition']
    },
    //    定义DEMO可选项
    demoType: [
        {key: 'default', val: 'moveBy示例'}
    ],
    //    默认可选项的配置
    'default': {
        //    类实例化选项
        pageConf: {
            options: '',
			html:' <div id="clown"><img src="images/fx1.jpg" id="doEl"></div><div id="log"></div>',
			jsCode:'var m=false;function run(){ m=!m; var pos=m?[500,0]:[0,0];T.fx.moveTo(baidu.dom.g("doEl"),pos,{onbeforestart:log,onafterfinish:log,duration:5000}) }function log(evt){evt=evt||{} ; baidu.dom.g("log").innerHTML += new Date().getTime()+" - 事件 "+evt.type+" 触发<br />" ;if(evt.type=="onafterfinish"){ setTimeout(run,1) }}function get(){ var f = baidu.fx.current("doEl") ,fl=f.length ,fns=[];while(fl--){  fns.push(f[fl]["_className"]) } alert("运行实例:"+fns) }'
        },
        run: {
            type: 'button',
            defaultValue: '开始效果',
            event: {
                eventName: 'onclick',
                handler: function(){
					run();
				}
            }
        },
        get: {
            type: 'button',
            defaultValue: '取得实例名称',
            event: {
                eventName: 'onclick',
                handler: function(){
					get();
				}
            }
        },
        auto:{
            type: 'button',
            defaultValue: '自动运行',
			isMain:true,
            event: {
                eventName: 'onclick',
                handler: function(){
					run();
					setTimeout('get()',1000)
				}
            }
		
		}
		
    },    
    groups: {
        'default': [
            ['run','get','auto']
        ]
    }
};