var tangram_base = {
    nameSpace: [{
        n: 'baidu.ajax.get',
        p: 'baidu.ajax'
    },
    {
        n: 'baidu.ajax.post',
        p: 'baidu.ajax'
    },
    {
        n: 'baidu.array',
        p: 'baidu'
    },
    {
        n: 'baidu.array.each',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.empty',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.every',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.filter',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.find',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.hash',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.indexOf',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.lastIndexOf',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.map',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.reduce',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.remove',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.removeAt',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.some',
        p: 'baidu.array'
    },
    {
        n: 'baidu.array.unique',
        p: 'baidu.array'
    },
    {
        n: 'baidu.async',
        p: 'baidu'
    },
    {
        n: 'baidu.async.get',
        p: 'baidu.async'
    },
    {
        n: 'baidu.async.post',
        p: 'baidu.async'
    },
    {
        n: 'baidu.async.when',
        p: 'baidu.async'
    },
    {
        n: 'baidu.browser',
        p: 'baidu'
    },
    {
        n: 'baidu.browser.firefox',
        p: 'baidu.browser'
    },
    {
        n: 'baidu.browser.ie',
        p: 'baidu.browser'
    },
    {
        n: 'baidu.browser.isGecko',
        p: 'baidu.browser'
    },
    {
        n: 'baidu.browser.isStrict',
        p: 'baidu.browser'
    },
    {
        n: 'baidu.browser.isWebkit',
        p: 'baidu.browser'
    },
    {
        n: 'baidu.browser.maxthon',
        p: 'baidu.browser'
    },
    {
        n: 'baidu.browser.opera',
        p: 'baidu.browser'
    },
    {
        n: 'baidu.browser.safari',
        p: 'baidu.browser'
    },
    {
        n: 'baidu.cookie',
        p: 'baidu'
    },
    {
        n: 'baidu.cookie.set',
        p: 'baidu.cookie'
    },
    {
        n: 'baidu.cookie.setRaw',
        p: 'baidu.cookie'
    },
    {
        n: 'baidu.date',
        p: 'baidu'
    },
    {
        n: 'baidu.date.parse',
        p: 'baidu.date'
    },
    {
        n: 'baidu.dom',
        p: 'baidu'
    },
    {
        n: 'baidu.dom.children',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.empty',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.getAncestorBy',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.getAncestorByClass',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.getAncestorByTag',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.getAttr',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.getDocument',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.getParent',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.getPosition',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.getText',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.getWindow',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.hasAttr',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.hasClass',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.hide',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.insertAfter',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.insertBefore',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.insertHTML',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.intersect',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.last',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.next',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.prev',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.query',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.ready',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.remove',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.removeClass',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.removeStyle',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.setBorderBoxSize',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.setBorderBoxWidth',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.setPosition',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.setStyle',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.setStyles',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.show',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.toggle',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.dom.toggleClass',
        p: 'baidu.dom'
    },
    {
        n: 'baidu.event',
        p: 'baidu'
    },
    {
        n: 'baidu.event.EventArg',
        p: 'baidu.event'
    },
    {
        n: 'baidu.event.get',
        p: 'baidu.event'
    },
    {
        n: 'baidu.event.getKeyCode',
        p: 'baidu.event'
    },
    {
        n: 'baidu.event.getPageX',
        p: 'baidu.event'
    },
    {
        n: 'baidu.event.getPageY',
        p: 'baidu.event'
    },
    {
        n: 'baidu.event.getTarget',
        p: 'baidu.event'
    },
    {
        n: 'baidu.event.once',
        p: 'baidu.event'
    },
    {
        n: 'baidu.event.preventDefault',
        p: 'baidu.event'
    },
    {
        n: 'baidu.event.stopPropagation',
        p: 'baidu.event'
    },
    {
        n: 'baidu.event.un',
        p: 'baidu.event'
    },
    {
        n: 'baidu.fn',
        p: 'baidu'
    },
    {
        n: 'baidu.fn.abstractMethod',
        p: 'baidu.fn'
    },
    {
        n: 'baidu.fn.bind',
        p: 'baidu.fn'
    },
    {
        n: 'baidu.fn.methodize',
        p: 'baidu.fn'
    },
    {
        n: 'baidu.fn.multize',
        p: 'baidu.fn'
    },
    {
        n: 'baidu.fn.wrapReturnValue',
        p: 'baidu.fn'
    },
    {
        n: 'baidu.json',
        p: 'baidu'
    },
    {
        n: 'baidu.json.stringify',
        p: 'baidu.json'
    },
    {
        n: 'baidu.lang',
        p: 'baidu'
    },
    {
        n: 'baidu.lang.createClass',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.decontrol',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.Event',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.eventCenter',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.eventCenter.addEventListener',
        p: 'baidu.lang.eventCenter'
    },
    {
        n: 'baidu.lang.getModule',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.guid',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.inherits',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.instance',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.isArray',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.isBoolean',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.isDate',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.isElement',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.isNumber',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.isObject',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.isString',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.lang.module',
        p: 'baidu.lang'
    },
    {
        n: 'baidu.number',
        p: 'baidu'
    },
    {
        n: 'baidu.number.comma',
        p: 'baidu.number'
    },
    {
        n: 'baidu.number.randomInt',
        p: 'baidu.number'
    },
    {
        n: 'baidu.object',
        p: 'baidu'
    },
    {
        n: 'baidu.object.each',
        p: 'baidu.object'
    },
    {
        n: 'baidu.object.isEmpty',
        p: 'baidu.object'
    },
    {
        n: 'baidu.object.isPlain',
        p: 'baidu.object'
    },
    {
        n: 'baidu.object.keys',
        p: 'baidu.object'
    },
    {
        n: 'baidu.object.map',
        p: 'baidu.object'
    },
    {
        n: 'baidu.object.merge',
        p: 'baidu.object'
    },
    {
        n: 'baidu.object.values',
        p: 'baidu.object'
    },
    {
        n: 'baidu.page',
        p: 'baidu'
    },
    {
        n: 'baidu.page.createStyleSheet',
        p: 'baidu.page'
    },
    {
        n: 'baidu.page.getHeight',
        p: 'baidu.page'
    },
    {
        n: 'baidu.page.getScrollLeft',
        p: 'baidu.page'
    },
    {
        n: 'baidu.page.getViewHeight',
        p: 'baidu.page'
    },
    {
        n: 'baidu.page.getViewWidth',
        p: 'baidu.page'
    },
    {
        n: 'baidu.page.getWidth',
        p: 'baidu.page'
    },
    {
        n: 'baidu.page.lazyLoadImage',
        p: 'baidu.page'
    },
    {
        n: 'baidu.page.load',
        p: 'baidu.page'
    },
    {
        n: 'baidu.page.loadCssFile',
        p: 'baidu.page'
    },
    {
        n: 'baidu.page.loadJsFile',
        p: 'baidu.page'
    },
    {
        n: 'baidu.platform',
        p: 'baidu'
    },
    {
        n: 'baidu.platform.isIpad',
        p: 'baidu.platform'
    },
    {
        n: 'baidu.platform.isIphone',
        p: 'baidu.platform'
    },
    {
        n: 'baidu.platform.isMacintosh',
        p: 'baidu.platform'
    },
    {
        n: 'baidu.platform.isWindows',
        p: 'baidu.platform'
    },
    {
        n: 'baidu.platform.isX11',
        p: 'baidu.platform'
    },
    {
        n: 'baidu.sio',
        p: 'baidu'
    },
    {
        n: 'baidu.sio.callByServer',
        p: 'baidu.sio'
    },
    {
        n: 'baidu.sio.log',
        p: 'baidu.sio'
    },
    {
        n: 'baidu.string',
        p: 'baidu'
    },
    {
        n: 'baidu.string.decodeHTML',
        p: 'baidu.string'
    },
    {
        n: 'baidu.string.encodeHTML',
        p: 'baidu.string'
    },
    {
        n: 'baidu.string.escapeReg',
        p: 'baidu.string'
    },
    {
        n: 'baidu.string.filterFormat',
        p: 'baidu.string'
    },
    {
        n: 'baidu.string.filterFormat.escapeString',
        p: 'baidu.string.filterFormat'
    },
    {
        n: 'baidu.string.filterFormat.toInt',
        p: 'baidu.string.filterFormat'
    },
    {
        n: 'baidu.string.format',
        p: 'baidu.string'
    },
    {
        n: 'baidu.string.formatColor',
        p: 'baidu.string'
    },
    {
        n: 'baidu.string.getByteLength',
        p: 'baidu.string'
    },
    {
        n: 'baidu.string.stripTags',
        p: 'baidu.string'
    },
    {
        n: 'baidu.string.subByte',
        p: 'baidu.string'
    },
    {
        n: 'baidu.string.toCamelCase',
        p: 'baidu.string'
    },
    {
        n: 'baidu.string.toHalfWidth',
        p: 'baidu.string'
    },
    {
        n: 'baidu.string.wbr',
        p: 'baidu.string'
    },
    {
        n: 'baidu.swf',
        p: 'baidu'
    },
    {
        n: 'baidu.swf.getMovie',
        p: 'baidu.swf'
    },
    {
        n: 'baidu.swf.Proxy',
        p: 'baidu.swf'
    },
    {
        n: 'baidu.url',
        p: 'baidu'
    },
    {
        n: 'baidu.url.getQueryValue',
        p: 'baidu.url'
    },
    {
        n: 'baidu.url.jsonToQuery',
        p: 'baidu.url'
    },
    {
        n: 'baidu.url.queryToJson',
        p: 'baidu.url'
    }],
    docMap: {
        'baidu.ajax.get': {
            name: 'get',
            type: 'XMLHttpRequest',
            desc: '发送一个get请求',
            options: [{
                name: 'url',
                type: 'string',
                desc: '发送请求的url地址'
            },
            {
                name: 'onsuccess',
                type: 'Function',
                desc: '请求成功之后的回调函数，function(XMLHttpRequest xhr, string responseText)'
            }],
            returns: [{
                type: 'XMLHttpRequest',
                desc: '发送请求的XMLHttpRequest对象'
            }]
        },
        'baidu.ajax.post': {
            name: 'post',
            type: 'XMLHttpRequest',
            desc: '发送一个post请求',
            options: [{
                name: 'url',
                type: 'string',
                desc: '发送请求的url地址'
            },
            {
                name: 'data',
                type: 'string',
                desc: '发送的数据'
            },
            {
                name: 'onsuccess',
                type: 'Function',
                desc: '请求成功之后的回调函数，function(XMLHttpRequest xhr, string responseText)'
            }],
            returns: [{
                type: 'XMLHttpRequest',
                desc: '发送请求的XMLHttpRequest对象'
            }]
        },
        'baidu.array.each': {
            name: 'each',
            type: 'Array',
            desc: '遍历数组中所有元素',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要遍历的数组'
            },
            {
                name: 'iterator',
                type: 'Function',
                desc: '对每个数组元素进行调用的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function (item, index)。'
            },
            {
                name: 'thisObject',
                type: 'Object',
                desc: '函数调用时的this指针，如果没有此参数，默认是当前遍历的数组'
            }],
            returns: [{
                type: 'Array',
                desc: '遍历的数组'
            }]
        },
        'baidu.array.empty': {
            name: 'empty',
            desc: '清空一个数组',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要清空的数组.'
            }]
        },
        'baidu.array.every': {
            name: 'every',
            type: 'boolean',
            desc: '判断一个数组中是否所有元素都满足给定条件',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要判断的数组.'
            },
            {
                name: 'iterator',
                type: 'Function',
                desc: '判断函数.'
            },
            {
                name: 'thisObject',
                type: 'Object',
                desc: '函数调用时的this指针，如果没有此参数，默认是当前遍历的数组'
            }],
            returns: [{
                type: 'boolean',
                desc: '判断结果.'
            }]
        },
        'baidu.array.filter': {
            name: 'filter',
            type: 'Array',
            desc: '从数组中筛选符合条件的元素',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要筛选的数组'
            },
            {
                name: 'iterator',
                type: 'Function',
                desc: '对每个数组元素进行筛选的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function (item, index)，函数需要返回true或false'
            },
            {
                name: 'thisObject',
                type: 'Object',
                desc: '函数调用时的this指针，如果没有此参数，默认是当前遍历的数组'
            }],
            returns: [{
                type: 'Array',
                desc: '符合条件的数组项集合'
            }]
        },
        'baidu.array.find': {
            name: 'find',
            type: 'Any|null',
            desc: '从数组中寻找符合条件的第一个元素',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要查找的数组'
            },
            {
                name: 'iterator',
                type: 'Function',
                desc: '对每个数组元素进行查找的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function (item, index)，函数需要返回true或false'
            }],
            returns: [{
                type: 'Any|null',
                desc: '符合条件的第一个元素，找不到时返回null'
            }]
        },
        'baidu.array.hash': {
            name: 'hash',
            type: 'Object',
            desc: '将两个数组参数合并成一个类似hashMap结构的对象，这个对象使用第一个数组做为key，使用第二个数组做为值，如果第二个参数未指定，则把对象的所有值置为true。',
            options: [{
                name: 'keys',
                type: 'Array',
                desc: '作为key的数组'
            },
            {
                name: 'values',
                type: 'Array',
                desc: '作为value的数组，未指定此参数时，默认值将对象的值都设为true。'
            }],
            returns: [{
                type: 'Object',
                desc: '合并后的对象{key : value}'
            }]
        },
        'baidu.array.indexOf': {
            name: 'indexOf',
            type: 'number',
            desc: '查询数组中指定元素的索引位置',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要查询的数组'
            },
            {
                name: 'match',
                type: 'Any',
                desc: '查询项'
            },
            {
                name: 'fromIndex',
                type: 'number',
                desc: '查询的起始位索引位置，如果为负数，则从source.length+fromIndex往后开始查找'
            }],
            returns: [{
                type: 'number',
                desc: '指定元素的索引位置，查询不到时返回-1'
            }]
        },
        'baidu.array.lastIndexOf': {
            name: 'lastIndexOf',
            type: 'number',
            desc: '从后往前，查询数组中指定元素的索引位置',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要查询的数组'
            },
            {
                name: 'match',
                type: 'Any',
                desc: '查询项'
            },
            {
                name: 'fromIndex',
                type: 'number',
                desc: '查询的起始位索引位置，如果为负数，则从source.length+fromIndex往前开始查找'
            }],
            returns: [{
                type: 'number',
                desc: '指定元素的索引位置，查询不到时返回-1'
            }]
        },
        'baidu.array.map': {
            name: 'map',
            type: 'Array',
            desc: '遍历数组中所有元素，将每一个元素应用方法进行转换，并返回转换后的新数组。',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要遍历的数组.'
            },
            {
                name: 'iterator',
                type: 'Function',
                desc: '对每个数组元素进行处理的函数.'
            },
            {
                name: 'thisObject',
                type: 'Object',
                desc: '函数调用时的this指针，如果没有此参数，默认是当前遍历的数组'
            }],
            returns: [{
                type: 'Array',
                desc: 'map后的数组.'
            }]
        },
        'baidu.array.reduce': {
            name: 'reduce',
            type: 'Array',
            desc: '遍历数组中所有元素，将每一个元素应用方法进行合并，并返回合并后的结果。',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要遍历的数组.'
            },
            {
                name: 'iterator',
                type: 'Function',
                desc: '对每个数组元素进行处理的函数，函数接受四个参数：上一次reduce的结果（或初始值），当前元素值，索引值，整个数组.'
            },
            {
                name: 'initializer',
                type: 'Object',
                desc: '合并的初始项，如果没有此参数，默认用数组中的第一个值作为初始值.'
            }],
            returns: [{
                type: 'Array',
                desc: 'reduce后的值.'
            }]
        },
        'baidu.array.remove': {
            name: 'remove',
            type: 'Array',
            desc: '移除数组中的项',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要移除项的数组'
            },
            {
                name: 'match',
                type: 'Any',
                desc: '要移除的项'
            }],
            returns: [{
                type: 'Array',
                desc: '移除后的数组'
            }]
        },
        'baidu.array.removeAt': {
            name: 'removeAt',
            type: 'Any',
            desc: '移除数组中的项',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要移除项的数组'
            },
            {
                name: 'index',
                type: 'number',
                desc: '要移除项的索引位置'
            }],
            returns: [{
                type: 'Any',
                desc: '被移除的数组项'
            }]
        },
        'baidu.array.some': {
            name: 'some',
            type: 'boolean',
            desc: '判断一个数组中是否有部分元素满足给定条件',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要判断的数组.'
            },
            {
                name: 'iterator',
                type: 'Function',
                desc: '判断函数.'
            },
            {
                name: 'thisObject',
                type: 'Object',
                desc: '函数调用时的this指针，如果没有此参数，默认是当前遍历的数组'
            }],
            returns: [{
                type: 'boolean',
                desc: '判断结果.'
            }]
        },
        'baidu.array.unique': {
            name: 'unique',
            type: 'Array',
            desc: '过滤数组中的相同项。如果两个元素相同，会删除后一个元素。',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要过滤相同项的数组'
            },
            {
                name: 'compareFn',
                type: 'Function',
                desc: '比较两个数组项是否相同的函数,两个数组项作为函数的参数。'
            }],
            returns: [{
                type: 'Array',
                desc: '过滤后的新数组'
            }]
        },
        'baidu.async.get': {
            name: 'get',
            type: 'baidu.async.Deferred',
            desc: '支持异步的ajax.get封装.',
            options: [{
                name: 'url',
                type: 'String',
                desc: '请求地址.'
            }],
            returns: [{
                type: 'baidu.async.Deferred',
                desc: 'Deferred对象,支持链式调用.'
            }]
        },
        'baidu.async.post': {
            name: 'post',
            type: 'baidu.async.Deferred',
            desc: '支持异步的ajax.post封装.',
            options: [{
                name: 'url',
                type: 'String',
                desc: '请求地址.'
            },
            {
                name: 'data',
                type: 'String',
                desc: '请求数据.'
            }],
            returns: [{
                type: 'baidu.async.Deferred',
                desc: 'Deferred对象,支持链式调用.'
            }]
        },
        'baidu.async.when': {
            name: 'when',
            type: 'baidu.async.Deferred',
            desc: '保证onResolve或onReject可以按序执行. 若第一个参数为deferred,则deferred完成后执行.否则立即执行onResolve,并传入第一个参数.',
            options: [{
                name: 'deferredOrValue',
                type: 'baidu.async.Deferred|*',
                desc: 'deferred实例或任意值.'
            },
            {
                name: 'onResolve',
                type: 'Function',
                desc: '成功时的回调函数.若第一个参数不是Deferred实例,则立即执行此方法.'
            },
            {
                name: 'onReject',
                type: 'Function',
                desc: '失败时的回调函数.'
            }],
            returns: [{
                type: 'baidu.async.Deferred',
                desc: 'deferred.'
            }]
        },
        'baidu.browser.firefox': {
            name: 'firefox',
            desc: '判断是否为firefox浏览器'
        },
        'baidu.browser.ie': {
            name: 'ie',
            desc: '判断是否为ie浏览器'
        },
        'baidu.browser.isGecko': {
            name: 'isGecko',
            desc: '判断是否为gecko内核'
        },
        'baidu.browser.isStrict': {
            name: 'isStrict',
            desc: '判断是否严格标准的渲染模式'
        },
        'baidu.browser.isWebkit': {
            name: 'isWebkit',
            desc: '判断是否为webkit内核'
        },
        'baidu.browser.maxthon': {
            name: 'maxthon',
            desc: '判断是否为maxthon浏览器'
        },
        'baidu.browser.opera': {
            name: 'opera',
            desc: '判断是否为opera浏览器'
        },
        'baidu.browser.safari': {
            name: 'safari',
            desc: '判断是否为safari浏览器, 支持ipad'
        },
        'baidu.cookie.set': {
            name: 'set',
            desc: '设置cookie的值，用encodeURIComponent进行编码',
            options: [{
                name: 'key',
                type: 'string',
                desc: '需要设置Cookie的键名'
            },
            {
                name: 'value',
                type: 'string',
                desc: '需要设置Cookie的值'
            },
            {
                name: 'options',
                type: 'Object',
                desc: '设置Cookie的其他可选参数'
            },
            {
                name: 'options.path',
                type: 'string',
                desc: 'cookie路径'
            },
            {
                name: 'options.expires',
                type: 'Date|number',
                desc: 'cookie过期时间,如果类型是数字的话, 单位是毫秒'
            },
            {
                name: 'options.domain',
                type: 'string',
                desc: 'cookie域名'
            },
            {
                name: 'options.secure',
                type: 'string',
                desc: 'cookie是否安全传输'
            }]
        },
        'baidu.cookie.setRaw': {
            name: 'setRaw',
            desc: '设置cookie的值，不对值进行编码',
            options: [{
                name: 'key',
                type: 'string',
                desc: '需要设置Cookie的键名'
            },
            {
                name: 'value',
                type: 'string',
                desc: '需要设置Cookie的值'
            },
            {
                name: 'options',
                type: 'Object',
                desc: '设置Cookie的其他可选参数'
            },
            {
                name: 'options.path',
                type: 'string',
                desc: 'cookie路径'
            },
            {
                name: 'options.expires',
                type: 'Date|number',
                desc: 'cookie过期时间,如果类型是数字的话, 单位是毫秒'
            },
            {
                name: 'options.domain',
                type: 'string',
                desc: 'cookie域名'
            },
            {
                name: 'options.secure',
                type: 'string',
                desc: 'cookie是否安全传输'
            }]
        },
        'baidu.date.parse': {
            name: 'parse',
            type: 'Date',
            desc: '将目标字符串转换成日期对象',
            options: [{
                name: 'source',
                type: 'string',
                desc: '目标字符串'
            }],
            returns: [{
                type: 'Date',
                desc: '转换后的日期对象'
            }]
        },
        'baidu.dom.children': {
            name: 'children',
            type: 'Array',
            desc: '获取目标元素的直接子元素列表',
            options: [{
                name: 'element',
                type: 'HTMLElement|String',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'Array',
                desc: '目标元素的子元素列表，没有子元素时返回空数组'
            }]
        },
        'baidu.dom.empty': {
            name: 'empty',
            type: 'HTMLElement',
            desc: '删除一个节点下面的所有子节点。',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '目标元素'
            }]
        },
        'baidu.dom.getAncestorBy': {
            name: 'getAncestorBy',
            type: 'HTMLElement|null',
            desc: '获取目标元素符合条件的最近的祖先元素',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            },
            {
                name: 'method',
                type: 'Function',
                desc: '判断祖先元素条件的函数，function (element)'
            }],
            returns: [{
                type: 'HTMLElement|null',
                desc: '符合条件的最近的祖先元素，查找不到时返回null'
            }]
        },
        'baidu.dom.getAncestorByClass': {
            name: 'getAncestorByClass',
            type: 'HTMLElement|null',
            desc: '获取目标元素指定元素className最近的祖先元素',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            },
            {
                name: 'className',
                type: 'string',
                desc: '祖先元素的class，只支持单个class'
            }],
            returns: [{
                type: 'HTMLElement|null',
                desc: '指定元素className最近的祖先元素，查找不到时返回null'
            }]
        },
        'baidu.dom.getAncestorByTag': {
            name: 'getAncestorByTag',
            type: 'HTMLElement|null',
            desc: '获取目标元素指定标签的最近的祖先元素',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            },
            {
                name: 'tagName',
                type: 'string',
                desc: '祖先元素的标签名'
            }],
            returns: [{
                type: 'HTMLElement|null',
                desc: '指定标签的最近的祖先元素，查找不到时返回null'
            }]
        },
        'baidu.dom.getAttr': {
            name: 'getAttr',
            type: 'string|null',
            desc: '获取目标元素的属性值',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            },
            {
                name: 'key',
                type: 'string',
                desc: '要获取的attribute键名'
            }],
            returns: [{
                type: 'string|null',
                desc: '目标元素的attribute值，获取不到时返回null'
            }]
        },
        'baidu.dom.getDocument': {
            name: 'getDocument',
            type: 'HTMLDocument',
            desc: '获取目标元素所属的document对象',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'HTMLDocument',
                desc: '目标元素所属的document对象'
            }]
        },
        'baidu.dom.getParent': {
            name: 'getParent',
            type: 'HTMLElement|null',
            desc: '获得元素的父节点',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'HTMLElement|null',
                desc: '父元素，如果找不到父元素，返回null'
            }]
        },
        'baidu.dom.getPosition': {
            name: 'getPosition',
            type: 'Object',
            desc: '获取目标元素相对于整个文档左上角的位置',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'Object',
                desc: '目标元素的位置，键值为top和left的Object。'
            }]
        },
        'baidu.dom.getText': {
            name: 'getText',
            type: 'String',
            desc: '获得元素中的文本内容。',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'String',
                desc: '元素中文本的内容'
            }]
        },
        'baidu.dom.getWindow': {
            name: 'getWindow',
            type: 'window',
            desc: '获取目标元素所属的window对象',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'window',
                desc: '目标元素所属的window对象'
            }]
        },
        'baidu.dom.hasAttr': {
            name: 'hasAttr',
            type: 'Boolean',
            desc: '查询一个元素是否包含指定的属性',
            options: [{
                name: 'element',
                type: 'DOMElement|string',
                desc: 'DOM元素或元素的id'
            },
            {
                name: 'name',
                type: 'string',
                desc: '要查找的属性名'
            }],
            returns: [{
                type: 'Boolean',
                desc: '是否包含此属性'
            }]
        },
        'baidu.dom.hasClass': {
            name: 'hasClass',
            type: 'Boolean',
            desc: '判断元素是否拥有指定的className',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            },
            {
                name: 'className',
                type: 'string',
                desc: '要判断的className，可以是用空格拼接的多个className'
            }],
            returns: [{
                type: 'Boolean',
                desc: '是否拥有指定的className，如果要查询的classname有一个或多个不在元素的className中，返回false'
            }]
        },
        'baidu.dom.hide': {
            name: 'hide',
            type: 'HTMLElement',
            desc: '隐藏目标元素',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '目标元素'
            }]
        },
        'baidu.dom.insertAfter': {
            name: 'insertAfter',
            type: 'HTMLElement',
            desc: '将目标元素添加到基准元素之后',
            options: [{
                name: 'newElement',
                type: 'HTMLElement|string',
                desc: '被添加的目标元素'
            },
            {
                name: 'existElement',
                type: 'HTMLElement|string',
                desc: '基准元素'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '被添加的目标元素'
            }]
        },
        'baidu.dom.insertBefore': {
            name: 'insertBefore',
            type: 'HTMLElement',
            desc: '将目标元素添加到基准元素之前',
            options: [{
                name: 'newElement',
                type: 'HTMLElement|string',
                desc: '被添加的目标元素'
            },
            {
                name: 'existElement',
                type: 'HTMLElement|string',
                desc: '基准元素'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '被添加的目标元素'
            }]
        },
        'baidu.dom.insertHTML': {
            name: 'insertHTML',
            type: 'HTMLElement',
            desc: '在目标元素的指定位置插入HTML代码',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            },
            {
                name: 'position',
                type: 'string',
                desc: '插入html的位置信息，取值为beforeBegin,afterBegin,beforeEnd,afterEnd'
            },
            {
                name: 'html',
                type: 'string',
                desc: '要插入的html'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '目标元素'
            }]
        },
        'baidu.dom.intersect': {
            name: 'intersect',
            type: 'boolean',
            desc: '检查两个元素是否相交',
            options: [{
                name: 'element1',
                type: 'HTMLElement|string',
                desc: '要检查的元素或元素的id'
            },
            {
                name: 'element2',
                type: 'HTMLElement|string',
                desc: '要检查的元素或元素的id'
            }],
            returns: [{
                type: 'boolean',
                desc: '两个元素是否相交的检查结果'
            }]
        },
        'baidu.dom.last': {
            name: 'last',
            type: 'HTMLElement|null',
            desc: '获取目标元素的最后一个元素节点',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'HTMLElement|null',
                desc: '目标元素的最后一个元素节点，查找不到时返回null'
            }]
        },
        'baidu.dom.next': {
            name: 'next',
            type: 'HTMLElement|null',
            desc: '获取目标元素的下一个兄弟元素节点',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'HTMLElement|null',
                desc: '目标元素的下一个兄弟元素节点，查找不到时返回null'
            }]
        },
        'baidu.dom.prev': {
            name: 'prev',
            type: 'HTMLElement|null',
            desc: '获取目标元素的上一个兄弟元素节点',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'HTMLElement|null',
                desc: '目标元素的上一个兄弟元素节点，查找不到时返回null'
            }]
        },
        'baidu.dom.query': {
            name: 'query',
            type: 'Array',
            desc: '提供css选择器功能   选择器支持所有的<a href=\"http://www.w3.org/TR/css3-selectors/\">css3选择器</a> ，核心实现采用sizzle。baidu.dom.query.matches 请参考<a href=\"http://wiki.github.com/jeresig/sizzle/\" target=\"_blank\">sizzle 文档</a>',
            options: [{
                name: 'selector',
                type: 'String',
                desc: '选择器定义'
            },
            {
                name: 'context',
                type: 'HTMLElement | DOMDocument',
                desc: '查找的上下文'
            },
            {
                name: 'results',
                type: 'Array',
                desc: '查找的结果会追加到这个数组中'
            }],
            returns: [{
                type: 'Array',
                desc: '包含所有筛选出的DOM元素的数组'
            }]
        },
        'baidu.dom.ready': {
            name: 'ready',
            desc: '使函数在页面dom节点加载完毕时调用',
            options: [{
                name: 'callback',
                type: 'Function',
                desc: '页面加载完毕时调用的函数.'
            }],
            methods: [{
                name: 'ready'
            },
            {
                name: 'doScrollCheck'
            },
            {
                name: 'bindReady'
            }]
        },
        'baidu.dom.remove': {
            name: 'remove',
            desc: '从DOM树上移除目标元素',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '需要移除的元素或元素的id'
            }]
        },
        'baidu.dom.removeClass': {
            name: 'removeClass',
            type: 'HTMLElement',
            desc: '移除目标元素的className',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            },
            {
                name: 'className',
                type: 'string',
                desc: '要移除的className，允许同时移除多个class，中间使用空白符分隔'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '目标元素'
            }]
        },
        'baidu.dom.removeStyle': {
            name: 'removeStyle',
            type: 'HTMLElement',
            desc: '删除元素的某个样式',
            options: [{
                name: 'element',
                type: 'HTMLElement|String',
                desc: '需要删除样式的元素或者元素id'
            },
            {
                name: 'styleName',
                type: 'string',
                desc: '需要删除的样式名字'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '目标元素'
            }]
        },
        'baidu.dom.setBorderBoxSize': {
            name: 'setBorderBoxSize',
            type: 'HTMLElement',
            desc: '按照border-box模型设置元素的height和width值。只支持元素的padding/border/height/width使用同一种计量单位的情况。<br/> 不支持：<br/> 1. 非数字值(medium)<br/> 2. em/px在不同的属性中混用',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '元素或DOM元素的id'
            },
            {
                name: 'size',
                type: 'object',
                desc: '包含height和width键名的对象'
            }],
            methods: [{
                name: 'getNumericalStyle',
                options: [{
                    name: 'element'
                },
                {
                    name: 'name'
                }]
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '设置好的元素'
            }]
        },
        'baidu.dom.setBorderBoxWidth': {
            name: 'setBorderBoxWidth',
            type: 'HTMLElement',
            desc: '按照border-box模型设置元素的width值',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: 'DOM元素或元素的id'
            },
            {
                name: 'width',
                type: 'number|string',
                desc: '要设置的width'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '设置好的元素'
            }]
        },
        'baidu.dom.setPosition': {
            name: 'setPosition',
            type: 'HTMLElement',
            desc: '设置目标元素的top和left值到用户指定的位置',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            },
            {
                name: 'position',
                type: 'object',
                desc: '位置对象 {top: {number}, left : {number}}'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '进行设置的元素'
            }]
        },
        'baidu.dom.setStyle': {
            name: 'setStyle',
            type: 'HTMLElement',
            desc: '设置目标元素的style样式值',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            },
            {
                name: 'key',
                type: 'string',
                desc: '要设置的样式名'
            },
            {
                name: 'value',
                type: 'string',
                desc: '要设置的样式值'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '目标元素'
            }]
        },
        'baidu.dom.setStyles': {
            name: 'setStyles',
            type: 'HTMLElement',
            desc: '批量设置目标元素的style样式值',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            },
            {
                name: 'styles',
                type: 'Object',
                desc: '要设置的样式集合'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '目标元素'
            }]
        },
        'baidu.dom.show': {
            name: 'show',
            type: 'HTMLElement',
            desc: '显示目标元素，即将目标元素的display属性还原成默认值。默认值可能在stylesheet中定义，或者是继承了浏览器的默认样式值',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '目标元素'
            }]
        },
        'baidu.dom.toggle': {
            name: 'toggle',
            type: 'HTMLElement',
            desc: '改变目标元素的显示/隐藏状态',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '目标元素'
            }]
        },
        'baidu.dom.toggleClass': {
            name: 'toggleClass',
            desc: '添加或者删除一个节点中的指定class，如果已经有就删除，否则添加',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素的id'
            },
            {
                name: 'className',
                type: 'String',
                desc: '指定的className。允许同时添加多个class，中间使用空白符分隔'
            }]
        },
        'baidu.event.EventArg': {
            name: 'EventArg',
            desc: '事件对象构造器，屏蔽浏览器差异的事件类',
            options: [{
                name: 'event',
                type: 'Event',
                desc: '事件对象'
            },
            {
                name: 'win',
                type: 'Window',
                desc: '窗口对象，默认为window'
            }],
            methods: [{
                name: 'preventDefault'
            },
            {
                name: 'stopPropagation'
            },
            {
                name: 'stop'
            }]
        },
        'baidu.event.get': {
            name: 'get',
            type: 'EventArg',
            desc: '获取扩展的EventArg对象',
            options: [{
                name: 'event',
                type: 'Event',
                desc: '事件对象'
            },
            {
                name: 'win',
                type: 'window',
                desc: '触发事件元素所在的window'
            }],
            returns: [{
                type: 'EventArg',
                desc: '扩展的事件对象'
            }]
        },
        'baidu.event.getKeyCode': {
            name: 'getKeyCode',
            type: 'number',
            desc: '获取键盘事件的键值',
            options: [{
                name: 'event',
                type: 'Event',
                desc: '事件对象'
            }],
            returns: [{
                type: 'number',
                desc: '键盘事件的键值'
            }]
        },
        'baidu.event.getPageX': {
            name: 'getPageX',
            type: 'number',
            desc: '获取鼠标事件的鼠标x坐标',
            options: [{
                name: 'event',
                type: 'Event',
                desc: '事件对象'
            }],
            returns: [{
                type: 'number',
                desc: '鼠标事件的鼠标x坐标'
            }]
        },
        'baidu.event.getPageY': {
            name: 'getPageY',
            type: 'number',
            desc: '获取鼠标事件的鼠标y坐标',
            options: [{
                name: 'event',
                type: 'Event',
                desc: '事件对象'
            }],
            returns: [{
                type: 'number',
                desc: '鼠标事件的鼠标y坐标'
            }]
        },
        'baidu.event.getTarget': {
            name: 'getTarget',
            type: 'HTMLElement',
            desc: '获取事件的触发元素',
            options: [{
                name: 'event',
                type: 'Event',
                desc: '事件对象'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '事件的触发元素'
            }]
        },
        'baidu.event.once': {
            name: 'once',
            type: 'HTMLElement',
            desc: '为目标元素添加一次事件绑定',
            options: [{
                name: 'element',
                type: 'HTMLElement|string',
                desc: '目标元素或目标元素id'
            },
            {
                name: 'type',
                type: 'string',
                desc: '事件类型'
            },
            {
                name: 'listener',
                type: 'Function',
                desc: '需要添加的监听器'
            }],
            methods: [{
                name: 'onceListener',
                options: [{
                    name: 'event'
                }]
            }],
            returns: [{
                type: 'HTMLElement',
                desc: '目标元素'
            }]
        },
        'baidu.event.preventDefault': {
            name: 'preventDefault',
            desc: '阻止事件的默认行为',
            options: [{
                name: 'event',
                type: 'Event',
                desc: '事件对象'
            }]
        },
        'baidu.event.stopPropagation': {
            name: 'stopPropagation',
            desc: '阻止事件传播',
            options: [{
                name: 'event',
                type: 'Event',
                desc: '事件对象'
            }]
        },
        'baidu.event.un': {
            name: 'un',
            type: 'HTMLElement|window',
            desc: '为目标元素移除事件监听器',
            options: [{
                name: 'element',
                type: 'HTMLElement|string|window',
                desc: '目标元素或目标元素id'
            },
            {
                name: 'type',
                type: 'string',
                desc: '事件类型'
            },
            {
                name: 'listener',
                type: 'Function',
                desc: '需要移除的监听器'
            }],
            returns: [{
                type: 'HTMLElement|window',
                desc: '目标元素'
            }]
        },
        'baidu.fn.abstractMethod': {
            name: 'abstractMethod',
            desc: '定义一个抽象方法'
        },
        'baidu.fn.bind': {
            name: 'bind',
            type: 'Function',
            desc: '为对象绑定方法和作用域',
            options: [{
                name: 'handler',
                type: 'Function|String',
                desc: '要绑定的函数，或者一个在作用域下可用的函数名'
            },
            {
                name: 'obj',
                type: 'Object',
                desc: '执行运行时this，如果不传入则运行时this为函数本身'
            },
            {
                name: 'args',
                type: 'args* 0..n',
                desc: '函数执行时附加到执行时函数前面的参数'
            }],
            returns: [{
                type: 'Function',
                desc: '封装后的函数'
            }]
        },
        'baidu.fn.methodize': {
            name: 'methodize',
            type: 'Function',
            desc: '将一个静态函数变换成一个对象的方法，使其的第一个参数为this，或this[attr]',
            options: [{
                name: 'func',
                type: 'Function',
                desc: '要方法化的函数'
            },
            {
                name: 'attr',
                type: 'string',
                desc: '属性'
            }],
            returns: [{
                type: 'Function',
                desc: '已方法化的函数'
            }]
        },
        'baidu.fn.multize': {
            name: 'multize',
            type: 'Function',
            desc: '对函数进行集化，使其在第一个参数为array时，结果也返回一个数组',
            options: [{
                name: 'func',
                type: 'Function',
                desc: '需要包装的函数'
            },
            {
                name: 'recursive',
                type: 'Boolean',
                desc: '是否递归包装（如果数组里面一项仍然是数组，递归），可选'
            },
            {
                name: 'joinArray',
                type: 'Boolean',
                desc: '将操作的结果展平后返回（如果返回的结果是数组，则将多个数组合成一个），可选'
            }],
            methods: [{
                name: 'newFunc'
            }],
            returns: [{
                type: 'Function',
                desc: '已集化的函数'
            }]
        },
        'baidu.fn.wrapReturnValue': {
            name: 'wrapReturnValue',
            type: 'function',
            desc: '包装函数的返回值，使其在能按照index指定的方式返回。<br/>如果其值为-1，直接返回返回值。 <br/>如果其值为0，返回\"返回值\"的包装结果。<br/> 如果其值大于0，返回第i个位置的参数的包装结果（从1开始计数）',
            options: [{
                name: 'func',
                type: 'function',
                desc: '需要包装的函数'
            },
            {
                name: 'wrapper',
                type: 'function',
                desc: '包装器'
            },
            {
                name: '包装第几个参数',
                type: 'number'
            }],
            returns: [{
                type: 'function',
                desc: '包装后的函数'
            }]
        },
        'baidu.json.stringify': {
            name: 'stringify',
            type: 'string',
            desc: '将json对象序列化',
            options: [{
                name: 'value',
                type: 'JSON',
                desc: '需要序列化的json对象'
            }],
            returns: [{
                type: 'string',
                desc: '序列化后的字符串'
            }]
        },
        'baidu.lang.createClass': {
            name: 'createClass',
            type: 'Object',
            desc: '创建一个类，包括创造类的构造器、继承基类Class',
            options: [{
                name: 'constructor',
                type: 'Function',
                desc: '类的构造器函数'
            },
            {
                name: 'options',
                type: 'Object'
            },
            {
                name: 'options.className',
                type: 'string',
                desc: '类名'
            },
            {
                name: 'options.superClass',
                type: 'Function',
                desc: '父类，默认为baidu.lang.Class'
            }],
            methods: [{
                name: 'fn'
            },
            {
                name: 'C'
            }],
            returns: [{
                type: 'Object',
                desc: '一个类对象'
            }]
        },
        'baidu.lang.decontrol': {
            name: 'decontrol',
            desc: '解除instance中对指定类实例的引用关系。',
            options: [{
                name: 'guid',
                type: 'string',
                desc: '类的唯一标识'
            }]
        },
        'baidu.lang.eventCenter': {
            name: 'eventCenter',
            desc: '事件中心',
            methods: [{
                name: 'addEventListener',
                desc: '注册全局事件监听器。',
                options: [{
                    name: 'type',
                    type: 'string',
                    desc: '自定义事件的名称'
                },
                {
                    name: 'handler',
                    type: 'Function',
                    desc: '自定义事件被触发时应该调用的回调函数'
                },
                {
                    name: 'key',
                    type: 'string',
                    desc: '为事件监听函数指定的名称，可在移除时使用。如果不提供，方法会默认为它生成一个全局唯一的key。'
                }]
            }]
        },
        'baidu.lang.eventCenter.addEventListener': {
            name: 'addEventListener',
            desc: '注册全局事件监听器。',
            options: [{
                name: 'type',
                type: 'string',
                desc: '自定义事件的名称'
            },
            {
                name: 'handler',
                type: 'Function',
                desc: '自定义事件被触发时应该调用的回调函数'
            },
            {
                name: 'key',
                type: 'string',
                desc: '为事件监听函数指定的名称，可在移除时使用。如果不提供，方法会默认为它生成一个全局唯一的key。'
            }]
        },
        'baidu.lang.getModule': {
            name: 'getModule',
            type: '?Object',
            desc: '根据变量名或者命名空间来查找对象',
            options: [{
                name: 'name',
                type: 'string',
                desc: '变量或者命名空间的名字.'
            },
            {
                name: 'opt_obj',
                type: 'Object=',
                desc: '从这个对象开始查找，默认是window;'
            }],
            returns: [{
                type: '?Object',
                desc: '返回找到的对象，如果没有找到返回null.'
            }]
        },
        'baidu.lang.guid': {
            name: 'guid',
            type: 'String',
            desc: '返回一个当前页面的唯一标识字符串。',
            returns: [{
                type: 'String',
                desc: '当前页面的唯一标识字符串'
            }]
        },
        'baidu.lang.inherits': {
            name: 'inherits',
            desc: '为类型构造器建立继承关系',
            options: [{
                name: 'subClass',
                type: 'Function',
                desc: '子类构造器'
            },
            {
                name: 'superClass',
                type: 'Function',
                desc: '父类构造器'
            },
            {
                name: 'className',
                type: 'string',
                desc: '类名标识'
            }]
        },
        'baidu.lang.instance': {
            name: 'instance',
            type: 'Object|null',
            desc: '根据参数(guid)的指定，返回对应的实例对象引用',
            options: [{
                name: 'guid',
                type: 'string',
                desc: '需要获取实例的guid'
            }],
            returns: [{
                type: 'Object|null',
                desc: '如果存在的话，返回;否则返回null。'
            }]
        },
        'baidu.lang.isArray': {
            name: 'isArray',
            type: 'boolean',
            desc: '判断目标参数是否Array对象',
            options: [{
                name: 'source',
                type: 'Any',
                desc: '目标参数'
            }],
            returns: [{
                type: 'boolean',
                desc: '类型判断结果'
            }]
        },
        'baidu.lang.isBoolean': {
            name: 'isBoolean',
            type: 'boolean',
            desc: '判断目标参数是否Boolean对象',
            options: [{
                name: 'source',
                type: 'Any',
                desc: '目标参数'
            }],
            returns: [{
                type: 'boolean',
                desc: '类型判断结果'
            }]
        },
        'baidu.lang.isDate': {
            name: 'isDate',
            type: 'boolean',
            desc: '判断目标参数是否为Date对象',
            options: [{
                name: 'source',
                type: 'Any',
                desc: '目标参数'
            }],
            returns: [{
                type: 'boolean',
                desc: '类型判断结果'
            }]
        },
        'baidu.lang.isElement': {
            name: 'isElement',
            type: 'boolean',
            desc: '判断目标参数是否为Element对象',
            options: [{
                name: 'source',
                type: 'Any',
                desc: '目标参数'
            }],
            returns: [{
                type: 'boolean',
                desc: '类型判断结果'
            }]
        },
        'baidu.lang.isNumber': {
            name: 'isNumber',
            type: 'boolean',
            desc: '判断目标参数是否number类型或Number对象',
            options: [{
                name: 'source',
                type: 'Any',
                desc: '目标参数'
            }],
            returns: [{
                type: 'boolean',
                desc: '类型判断结果'
            }]
        },
        'baidu.lang.isObject': {
            name: 'isObject',
            type: 'boolean',
            desc: '判断目标参数是否为Object对象',
            options: [{
                name: 'source',
                type: 'Any',
                desc: '目标参数'
            }],
            returns: [{
                type: 'boolean',
                desc: '类型判断结果'
            }]
        },
        'baidu.lang.isString': {
            name: 'isString',
            type: 'boolean',
            desc: '判断目标参数是否string类型或String对象',
            options: [{
                name: 'source',
                type: 'Any',
                desc: '目标参数'
            }],
            returns: [{
                type: 'boolean',
                desc: '类型判断结果'
            }]
        },
        'baidu.lang.module': {
            name: 'module',
            desc: '增加自定义模块扩展,默认创建在当前作用域',
            options: [{
                name: 'name',
                type: 'string',
                desc: '需要创建的模块名.'
            },
            {
                name: 'module',
                type: 'Any',
                desc: '需要创建的模块对象.'
            },
            {
                name: 'owner',
                type: 'Object',
                desc: '模块创建的目标环境，默认为window.'
            }]
        },
        'baidu.number.comma': {
            name: 'comma',
            type: 'string',
            desc: '为目标数字添加逗号分隔',
            options: [{
                name: 'source',
                type: 'number',
                desc: '需要处理的数字'
            },
            {
                name: 'length',
                type: 'number',
                desc: '两次逗号之间的数字位数，默认为3位'
            }],
            returns: [{
                type: 'string',
                desc: '添加逗号分隔后的字符串'
            }]
        },
        'baidu.number.randomInt': {
            name: 'randomInt',
            type: 'number',
            desc: '生成随机整数，范围是[min, max]',
            options: [{
                name: 'min',
                type: 'number',
                desc: '随机整数的最小值'
            },
            {
                name: 'max',
                type: 'number',
                desc: '随机整数的最大值'
            }],
            returns: [{
                type: 'number',
                desc: '生成的随机整数'
            }]
        },
        'baidu.object.each': {
            name: 'each',
            type: 'Object',
            desc: '遍历Object中所有元素，1.1.1增加',
            options: [{
                name: 'source',
                type: 'Object',
                desc: '需要遍历的Object'
            },
            {
                name: 'iterator',
                type: 'Function',
                desc: '对每个Object元素进行调用的函数，function (item, key)'
            }],
            returns: [{
                type: 'Object',
                desc: '遍历的Object'
            }]
        },
        'baidu.object.isEmpty': {
            name: 'isEmpty',
            type: 'boolean',
            desc: '检测一个对象是否是空的.需要注意的是：如果污染了Object.prototype或者Array.prototype，那么baidu.object.isEmpty({})或者baidu.object.isEmpty([])可能返回的就是false.',
            options: [{
                name: 'obj',
                type: 'Object',
                desc: '需要检测的对象.'
            }],
            returns: [{
                type: 'boolean',
                desc: '如果是空的对象就返回true.'
            }]
        },
        'baidu.object.isPlain': {
            name: 'isPlain',
            type: 'Boolean',
            desc: '判断一个对象是不是字面量对象，即判断这个对象是不是由{}或者new Object类似方式创建',
            options: [{
                name: 'source',
                type: 'Object',
                desc: '需要检查的对象'
            }],
            returns: [{
                type: 'Boolean',
                desc: '检查结果'
            }]
        },
        'baidu.object.keys': {
            name: 'keys',
            type: 'Array',
            desc: '获取目标对象的键名列表',
            options: [{
                name: 'source',
                type: 'Object',
                desc: '目标对象'
            }],
            returns: [{
                type: 'Array',
                desc: '键名列表'
            }]
        },
        'baidu.object.map': {
            name: 'map',
            type: 'Array',
            desc: '遍历object中所有元素，将每一个元素应用方法进行转换，返回转换后的新object。',
            options: [{
                name: 'source',
                type: 'Array',
                desc: '需要遍历的object'
            },
            {
                name: 'iterator',
                type: 'Function',
                desc: '对每个object元素进行处理的函数'
            }],
            returns: [{
                type: 'Array',
                desc: 'map后的object'
            }]
        },
        'baidu.object.merge': {
            name: 'merge',
            type: 'object',
            desc: '合并源对象的属性到目标对象。',
            options: [{
                name: 'target',
                type: 'Function',
                desc: '目标对象.'
            },
            {
                name: 'source',
                type: 'Function',
                desc: '源对象.'
            },
            {
                name: 'opt_options',
                type: 'Object',
                desc: 'optional merge选项.'
            },
            {
                name: 'opt_options.overwrite',
                type: 'boolean',
                desc: 'optional 如果为真，源对象属性会覆盖掉目标对象上的已有属性，默认为假.'
            },
            {
                name: 'opt_options.whiteList',
                type: 'string[]',
                desc: 'optional 白名单，默认为空，如果存在，只有在这里的属性才会被处理.'
            },
            {
                name: 'opt_options.recursive',
                type: 'boolean',
                desc: 'optional 是否递归合并对象里面的object，默认为否.'
            }],
            returns: [{
                type: 'object',
                desc: 'merge后的object.'
            }]
        },
        'baidu.object.values': {
            name: 'values',
            type: 'Array',
            desc: '获取目标对象的值列表',
            options: [{
                name: 'source',
                type: 'Object',
                desc: '目标对象'
            }],
            returns: [{
                type: 'Array',
                desc: '值列表'
            }]
        },
        'baidu.page.createStyleSheet': {
            name: 'createStyleSheet',
            type: 'baidu.page.createStyleSheet.StyleSheet',
            desc: '在页面中创建样式表对象',
            options: [{
                name: 'options',
                type: 'Object',
                desc: '配置信息'
            },
            {
                name: 'options.document',
                type: 'Document',
                desc: '指定在哪个document下创建，默认是当前文档'
            },
            {
                name: 'options.url',
                type: 'String',
                desc: 'css文件的URL'
            },
            {
                name: 'options.index',
                type: 'Number',
                desc: '在文档里的排序索引（注意，仅IE下有效）'
            }],
            returns: [{
                type: 'baidu.page.createStyleSheet.StyleSheet',
                desc: 'styleSheet对象(注意: 仅IE下,其他浏览器均返回null)'
            }]
        },
        'baidu.page.getHeight': {
            name: 'getHeight',
            type: 'number',
            desc: '获取页面高度',
            returns: [{
                type: 'number',
                desc: '页面高度'
            }]
        },
        'baidu.page.getScrollLeft': {
            name: 'getScrollLeft',
            type: 'number',
            desc: '获取横向滚动量',
            returns: [{
                type: 'number',
                desc: '横向滚动量'
            }]
        },
        'baidu.page.getViewHeight': {
            name: 'getViewHeight',
            type: 'number',
            desc: '获取页面视觉区域高度',
            returns: [{
                type: 'number',
                desc: '页面视觉区域高度'
            }]
        },
        'baidu.page.getViewWidth': {
            name: 'getViewWidth',
            type: 'number',
            desc: '获取页面视觉区域宽度',
            returns: [{
                type: 'number',
                desc: '页面视觉区域宽度'
            }]
        },
        'baidu.page.getWidth': {
            name: 'getWidth',
            type: 'number',
            desc: '获取页面宽度',
            returns: [{
                type: 'number',
                desc: '页面宽度'
            }]
        },
        'baidu.page.lazyLoadImage': {
            name: 'lazyLoadImage',
            desc: '延迟加载图片. 默认只加载可见高度以上的图片, 随着窗口滚动加载剩余图片.注意: 仅支持垂直方向.',
            options: [{
                name: 'options',
                type: 'Object'
            },
            {
                name: 'options.className',
                type: 'String',
                desc: '延迟加载的IMG的className,如果不传入该值将延迟加载所有IMG.'
            },
            {
                name: 'options.preloadHeight',
                type: 'Number',
                desc: '预加载的高度, 可见窗口下该高度内的图片将被加载.'
            },
            {
                name: 'options.placeHolder',
                type: 'String',
                desc: '占位图url.'
            },
            {
                name: 'options.onlazyload',
                type: 'Function',
                desc: '延迟加载回调函数,在实际加载时触发.'
            }]
        },
        'baidu.page.load': {
            name: 'load',
            desc: '加载一组资源，支持多种格式资源的串/并行加载，支持每个文件有单独回调函数。',
            options: [{
                name: 'resources',
                type: 'Array',
                desc: '资源描述数组，单个resource含如下属性.'
            },
            {
                name: 'resources.url',
                type: 'String',
                desc: '链接地址.'
            },
            {
                name: 'resources.type',
                type: 'String',
                desc: '取值[\"css\",\"js\",\"html\"]，默认参考文件后缀.'
            },
            {
                name: 'resources.requestType',
                type: 'String',
                desc: '取值[\"dom\",\"ajax\"]，默认js和css用dom标签，html用ajax.'
            },
            {
                name: 'resources.onload',
                type: 'Function',
                desc: '当前resource加载完成的回调函数，若requestType为ajax，参数为xhr(可能失效)，responseText；若requestType为dom，无参数，执行时this为相应dom标签。.'
            },
            {
                name: 'options',
                type: 'Object',
                desc: '可选参数.'
            },
            {
                name: 'options.onload',
                type: 'Function',
                desc: '资源全部加载完成的回调函数，无参数。.'
            },
            {
                name: 'options.parallel',
                type: 'Boolean',
                desc: '是否并行加载，默认为false，串行。.'
            },
            {
                name: 'ignoreAllLoaded',
                type: 'Boolean',
                desc: '全部加载之后不触发回调事件.主要用于内部实现.'
            }],
            methods: [{
                name: 'allLoadedChecker'
            },
            {
                name: 'loadByDom',
                options: [{
                    name: 'res'
                },
                {
                    name: 'callback'
                }]
            },
            {
                name: 'loadResources',
                options: [{
                    name: 'res'
                }]
            }]
        },
        'baidu.page.loadCssFile': {
            name: 'loadCssFile',
            desc: '动态在页面上加载一个外部css文件',
            options: [{
                name: 'path',
                type: 'string',
                desc: 'css文件路径'
            }]
        },
        'baidu.page.loadJsFile': {
            name: 'loadJsFile',
            desc: '动态在页面上加载一个外部js文件',
            options: [{
                name: 'path',
                type: 'string',
                desc: 'js文件路径'
            }]
        },
        'baidu.platform.isIpad': {
            name: 'isIpad',
            desc: '判断是否为ipad平台'
        },
        'baidu.platform.isIphone': {
            name: 'isIphone',
            desc: '判断是否为iphone平台'
        },
        'baidu.platform.isMacintosh': {
            name: 'isMacintosh',
            desc: '判断是否为macintosh平台'
        },
        'baidu.platform.isWindows': {
            name: 'isWindows',
            desc: '判断是否为windows平台'
        },
        'baidu.platform.isX11': {
            name: 'isX11',
            desc: '判断是否为x11平台'
        },
        'baidu.sio.callByServer': {
            name: 'callByServer',
            desc: '通过script标签加载数据，加载完成由服务器端触发回调',
            options: [{
                name: 'url',
                type: 'string',
                desc: '加载数据的url.'
            },
            {
                name: 'callback',
                type: 'Function|string',
                desc: '服务器端调用的函数或函数名。如果没有指定本参数，将在URL中寻找options[\'queryField\']做为callback的方法名.'
            },
            {
                name: 'opt_options',
                type: 'Object',
                desc: '加载数据时的选项.'
            },
            {
                name: 'opt_options.charset',
                type: 'string',
                desc: 'script的字符集'
            },
            {
                name: 'opt_options.queryField',
                type: 'string',
                desc: '服务器端callback请求字段名，默认为callback'
            },
            {
                name: 'opt_options.timeOut',
                type: 'Integer',
                desc: '超时时间(单位：ms)，超过这个时间将不再响应本请求，并触发onfailure函数'
            },
            {
                name: 'opt_options.onfailure',
                type: 'Function',
                desc: 'timeOut设定后才生效，到达超时时间时触发本函数'
            }],
            methods: [{
                name: 'getCallBack',
                options: [{
                    name: 'onTimeOut'
                }]
            }]
        },
        'baidu.sio.log': {
            name: 'log',
            desc: '通过请求一个图片的方式令服务器存储一条日志author: int08h,leeight',
            options: [{
                name: 'url',
                type: 'string',
                desc: '要发送的地址.'
            }]
        },
        'baidu.string.decodeHTML': {
            name: 'decodeHTML',
            type: 'string',
            desc: '对目标字符串进行html解码',
            options: [{
                name: 'source',
                type: 'string',
                desc: '目标字符串'
            }],
            returns: [{
                type: 'string',
                desc: 'html解码后的字符串'
            }]
        },
        'baidu.string.encodeHTML': {
            name: 'encodeHTML',
            type: 'string',
            desc: '对目标字符串进行html编码',
            options: [{
                name: 'source',
                type: 'string',
                desc: '目标字符串'
            }],
            returns: [{
                type: 'string',
                desc: 'html编码后的字符串'
            }]
        },
        'baidu.string.escapeReg': {
            name: 'escapeReg',
            type: 'string',
            desc: '将目标字符串中可能会影响正则表达式构造的字符串进行转义。',
            options: [{
                name: 'source',
                type: 'string',
                desc: '目标字符串'
            }],
            returns: [{
                type: 'string',
                desc: '转义后的字符串'
            }]
        },
        'baidu.string.filterFormat': {
            name: 'filterFormat',
            type: 'string',
            desc: '对目标字符串进行格式化,支持过滤',
            options: [{
                name: 'source',
                type: 'string',
                desc: '目标字符串'
            },
            {
                name: 'opts',
                type: 'Object|string...',
                desc: '提供相应数据的对象'
            }],
            methods: [{
                name: 'escapeString',
                type: 'String',
                desc: '对字符串做安全转义,转义字符包括: 单引号,双引号,左右小括号,斜杠,反斜杠,上引号.',
                options: [{
                    name: 'source',
                    type: 'String',
                    desc: '待转义字符串'
                }],
                returns: [{
                    type: 'String',
                    desc: '转义之后的字符串'
                }]
            },
            {
                name: 'toInt',
                type: 'Number',
                desc: '对数字做安全转义,确保是十进制数字;否则返回0.',
                options: [{
                    name: 'source',
                    type: 'String',
                    desc: '待转义字符串'
                }],
                returns: [{
                    type: 'Number',
                    desc: '转义之后的数字'
                }]
            }],
            returns: [{
                type: 'string',
                desc: '格式化后的字符串'
            }]
        },
        'baidu.string.filterFormat.escapeString': {
            name: 'escapeString',
            type: 'String',
            desc: '对字符串做安全转义,转义字符包括: 单引号,双引号,左右小括号,斜杠,反斜杠,上引号.',
            options: [{
                name: 'source',
                type: 'String',
                desc: '待转义字符串'
            }],
            returns: [{
                type: 'String',
                desc: '转义之后的字符串'
            }]
        },
        'baidu.string.filterFormat.toInt': {
            name: 'toInt',
            type: 'Number',
            desc: '对数字做安全转义,确保是十进制数字;否则返回0.',
            options: [{
                name: 'source',
                type: 'String',
                desc: '待转义字符串'
            }],
            returns: [{
                type: 'Number',
                desc: '转义之后的数字'
            }]
        },
        'baidu.string.format': {
            name: 'format',
            type: 'string',
            desc: '对目标字符串进行格式化',
            options: [{
                name: 'source',
                type: 'string',
                desc: '目标字符串'
            },
            {
                name: 'opts',
                type: 'Object|string...',
                desc: '提供相应数据的对象或多个字符串'
            }],
            returns: [{
                type: 'string',
                desc: '格式化后的字符串'
            }]
        },
        'baidu.string.formatColor': {
            name: 'formatColor',
            type: 'string',
            desc: '将各种浏览器里的颜色值转换成 #RRGGBB 的格式',
            options: [{
                name: 'color',
                type: 'string',
                desc: '颜色值字符串'
            }],
            returns: [{
                type: 'string',
                desc: '#RRGGBB格式的字符串或空'
            }]
        },
        'baidu.string.getByteLength': {
            name: 'getByteLength',
            type: 'number',
            desc: '获取目标字符串在gbk编码下的字节长度',
            options: [{
                name: 'source',
                type: 'string',
                desc: '目标字符串'
            }],
            returns: [{
                type: 'number',
                desc: '字节长度'
            }]
        },
        'baidu.string.stripTags': {
            name: 'stripTags',
            type: 'string',
            desc: '去掉字符串中的html标签',
            options: [{
                name: 'source',
                type: 'string',
                desc: '要处理的字符串.'
            }],
            returns: [{
                type: 'string'
            }]
        },
        'baidu.string.subByte': {
            name: 'subByte',
            type: 'string',
            desc: '对目标字符串按gbk编码截取字节长度',
            options: [{
                name: 'source',
                type: 'string',
                desc: '目标字符串'
            },
            {
                name: 'length',
                type: 'number',
                desc: '需要截取的字节长度'
            },
            {
                name: 'tail',
                type: 'string',
                desc: '追加字符串,可选.'
            }],
            returns: [{
                type: 'string',
                desc: '字符串截取结果'
            }]
        },
        'baidu.string.toCamelCase': {
            name: 'toCamelCase',
            type: 'string',
            desc: '将目标字符串进行驼峰化处理',
            options: [{
                name: 'source',
                type: 'string',
                desc: '目标字符串'
            }],
            returns: [{
                type: 'string',
                desc: '驼峰化处理后的字符串'
            }]
        },
        'baidu.string.toHalfWidth': {
            name: 'toHalfWidth',
            type: 'string',
            desc: '将目标字符串中常见全角字符转换成半角字符',
            options: [{
                name: 'source',
                type: 'string',
                desc: '目标字符串'
            }],
            returns: [{
                type: 'string',
                desc: '转换后的字符串'
            }]
        },
        'baidu.string.wbr': {
            name: 'wbr',
            type: 'string',
            desc: '为目标字符串添加wbr软换行',
            options: [{
                name: 'source',
                type: 'string',
                desc: '目标字符串'
            }],
            returns: [{
                type: 'string',
                desc: '添加软换行后的字符串'
            }]
        },
        'baidu.swf.getMovie': {
            name: 'getMovie',
            type: 'HTMLElement',
            desc: '获得flash对象的实例',
            options: [{
                name: 'name',
                type: 'string',
                desc: 'flash对象的名称'
            }],
            returns: [{
                type: 'HTMLElement',
                desc: 'flash对象的实例'
            }]
        },
        'baidu.swf.Proxy': {
            name: 'Proxy',
            desc: 'Js 调用 Flash方法的代理类.',
            options: [{
                name: 'id',
                type: 'string',
                desc: 'Flash的元素id.object标签id, embed标签name.'
            },
            {
                name: 'property',
                type: 'string',
                desc: 'Flash的方法或者属性名称，用来检测Flash是否初始化好了.'
            },
            {
                name: 'loadedHandler',
                type: 'Function',
                desc: '初始化之后的回调函数.'
            }],
            methods: [{
                name: 'getFlash',
                type: 'HTMLElement',
                desc: '获取flash对象.',
                returns: [{
                    type: 'HTMLElement',
                    desc: 'Flash对象.'
                }]
            },
            {
                name: 'isReady',
                desc: '判断Flash是否初始化完成,可以与js进行交互.'
            },
            {
                name: 'call',
                desc: '调用Flash中的某个方法',
                options: [{
                    name: 'methodName',
                    type: 'string',
                    desc: '方法名.'
                },
                {
                    name: 'var_args',
                    type: '...*',
                    desc: '方法的参数.'
                }]
            }]
        },
        'baidu.url.getQueryValue': {
            name: 'getQueryValue',
            type: 'string|null',
            desc: '根据参数名从目标URL中获取参数值',
            options: [{
                name: 'url',
                type: 'string',
                desc: '目标URL'
            },
            {
                name: 'key',
                type: 'string',
                desc: '要获取的参数名'
            }],
            returns: [{
                type: 'string|null',
                desc: '- 获取的参数值，其中URI编码后的字符不会被解码，获取不到时返回null'
            }]
        },
        'baidu.url.jsonToQuery': {
            name: 'jsonToQuery',
            type: 'string',
            desc: '将json对象解析成query字符串',
            options: [{
                name: 'json',
                type: 'Object',
                desc: '需要解析的json对象'
            },
            {
                name: 'replacer_opt',
                type: 'Function=',
                desc: '对值进行特殊处理的函数，function (value, key)'
            }],
            returns: [{
                type: 'string',
                desc: '- 解析结果字符串，其中值将被URI编码，{a:\'&1 \'} ==> \"a=%261%20\"。'
            }]
        },
        'baidu.url.queryToJson': {
            name: 'queryToJson',
            type: 'Object',
            desc: '解析目标URL中的参数成json对象',
            options: [{
                name: 'url',
                type: 'string',
                desc: '目标URL'
            }],
            returns: [{
                type: 'Object',
                desc: '- 解析为结果对象，其中URI编码后的字符不会被解码，\'a=%20\' ==> {a:\'%20\'}。'
            }]
        }
    }
}