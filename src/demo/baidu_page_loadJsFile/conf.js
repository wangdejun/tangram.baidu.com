var conf = {
    clazz: {
        type: 'method',
        'method': 'baidu.page.loadJsFile'
    },
    
    demoType: [{key: 'default', val: 'baidu.page.loadJsFile'}],
    'default': {
        pageConf: {
            html: '<div id="resultArea">该实例将演示从服务器加载loadCssFileTest.js空文件，加载完成后将执行回调来表示已经加载完毕</div>'
        },
        btn1: {
            type: 'button',
            defaultValue: '加载JS文件',
            isMain: true,
            event: {
            	eventName: 'onclick',
            	handler: function(){
					baidu.page.loadJsFile('./baidu_page_loadJsFile/loadJsFileTest.js');
					T.g('resultArea').innerHTML = 'JS文件加载完成';
            	}
            }
        }
    },
    groups: {
        'default': [['btn1']]
    }
};