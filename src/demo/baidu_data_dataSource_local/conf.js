var callback = {
    onsuccess: function(response){
        alert(baidu.json.stringify(response));
    },
    onfailure: function(){
        alert('failure');
    },
    callByType: 'browser'
};
function transition(source){
    var array = [],
        source = baidu.lang.isArray(source) ? source : eval(source);
    baidu.array.each(source, function(item){
        array.push({
            name: item.name,
            id: item.id
        });
    });
    return array;
};
var conf = {
    clazz: {
        type: 'method',
        method: 'baidu.data.dataSource',
        dependPackages: ['baidu.data.dataSource.local', 'baidu.data.dataSource.ajax', 'baidu.data.dataSource.sio']
    },
    
    demoType: [{key: 'default', val: 'dataSource.local例子'}],
    
    'default': {
        pageConf: {
            html : '<div id="container" style="padding: 50px;">数据源：[{id: "01", name: "john", age: 20}, {id: "02", name: "marray", age: 21}]，通过dataSource处理数据，只取出name和id</div>'
        },
        
        local: {
            type: 'button',
            defaultValue: 'local(source, options)',
            event: {
                eventName: 'onclick',
                handler: function(){
                    var myData = [
                        {id: '01', name: 'john', age: 20},
                        {id: '02', name: 'marry', age: 21}
                    ],
                    dataSource = baidu.data.dataSource.local(myData, {
                        transition: transition
                    });
                    dataSource.get(callback);
                }
            }
        }
    },
    
    ajax: {
        pageConf: {
            html : '<div id="container" style="padding: 50px;">使用ajax取得数据源：[{id: "01", name: "john", age: 20}, {id: "02", name: "marray", age: 21}]，通过dataSource处理数据，只取出name和id</div>'
        },
        ajax: {
            type: 'button',
            defaultValue: 'ajax(url, options)',
            event: {
                eventName: 'onclick',
                handler: function(){
                    var dataSource = baidu.data.dataSource.ajax('baidu_data_dataSource/ajaxData.js', {
                        transition: transition
                    });
                    dataSource.get(callback);
                }
            }
        }
    },
    
    sio: {
        pageConf: {
            html : '<div id="container" style="padding: 50px;">使用sio取得数据源：[{id: "01", name: "john", age: 20}, {id: "02", name: "marray", age: 21}]，通过dataSource处理数据，只取出name和id</div>'
        },
        
        sio: {
            type: 'button',
            defaultValue: 'sio(url, options)',
			isMain:true,
            event: {
                eventName: 'onclick',
                handler: function(){
                    var dataSource = baidu.data.dataSource.sio('baidu_data_dataSource/sioData.js', {
                        transition: function(){return transition(myData);}
                    });
                    dataSource.get(callback);
                }
            }
        }
    },
    
    
    groups: {
        'default': [['local']],
        ajax: [['ajax']],
        sio: [['sio']]
    }
}