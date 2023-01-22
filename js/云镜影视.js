var rule = {
    title: 'VOFLIX HD',
    host: 'https://v.t-ui.cn',
    // homeUrl:'/',
    // url:'/show/fyclass--------fypage---.html',
    url: '/index.php/vod/show/id/fyfilter.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.cateId}}',
    filter: {
        "20":[{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "20" },{ "n": "动作片", "v": "21" },{ "n": "喜剧片", "v": "22" },{ "n": "爱情片", "v": "23" },{ "n": "科幻片", "v": "24" },{ "n": "恐怖片", "v": "25" },{ "n": "剧情片", "v": "26" },{ "n": "战争片", "v": "27" },{ "n": "惊悚片", "v": "28" },{ "n": "犯罪片", "v": "29" },{ "n": "冒险片", "v": "30" },{ "n": "动画片", "v": "31" },{ "n": "悬疑片", "v": "32" },{ "n": "武侠片", "v": "33" },{ "n": "奇幻片", "v": "34" },{ "n": "记录片", "v": "35" }]}],"37":[{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "37" },{ "n": "国产剧", "v": "38" },{ "n": "港台剧", "v": "39" },{ "n": "欧美剧", "v": "40" },{ "n": "日韩剧", "v": "41" },{ "n": "其他剧", "v": "42" }]}],"43":[{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "43" },{ "n": "国产动漫", "v": "52" },{ "n": "日韩动漫", "v": "53" },{ "n": "欧美动漫", "v": "54" }]}],"45":[{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "45" },{ "n": "综艺", "v": "46" }]}]
    },
    filter_def: {
        1: { cateId: '20' },
        2: { cateId: '37' },
        4: { cateId: '43' },
        3: { cateId: '45' }
    },
    searchUrl: '/index.php/vod/search/wd/**.html',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 2,//是否启用快速搜索,
    headers: {//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent': 'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse: '.sidebar&&ul&&li;a&&Text;a&&href;/(\\d+).html',
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    double: true, // 推荐内容是否双层定位
    一级: 'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    // 二级:{"title":"h1&&Text;.module-info-tag&&Text","img":".lazyload&&data-original","desc":".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text","content":".module-info-introduction&&Text","tabs":".module-tab-item","lists":".module-play-list:eq(#id) a"},
    二级: { "title": "h1&&Text;.module-info-tag&&Text", "img": ".lazyload&&data-original", "desc": ";;;.module-info-item:eq(3) .module-info-item-content&&Text;.module-info-item:eq(1) .module-info-item-content&&Text", "content": ".module-info-introduction&&Text", "tabs": ".module-tab-item", "lists": ".module-play-list:eq(#id) a" },
    搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}