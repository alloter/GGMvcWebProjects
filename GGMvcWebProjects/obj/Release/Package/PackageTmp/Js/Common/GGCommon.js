/// <reference path="../Origin/_references.js" />

// #region kdata

var kdata = new Object();
kdata.DomainName = "qnshop.top";
kdata.IMG = new Object(); // kdata图片问题
kdata.IMG.DefaultMalePicture = "/Image/default/img-header-picture.jpg";
kdata.IMG.DefaultMaleCartoon = "/Image/default/img-header-cartoon.jpg";
kdata.IMG.DefaultFemalePicture = "/Image/default/img-header-picture.jpg";
kdata.IMG.DefaultFemaleCartoon = "/Image/default/img-header-cartoon.jpg";

// #endregion

// #region mfun

var mfun = new Object();

/*
 * 用JavaScript将数字转换为大写金额
 */
mfun.DigitToUpperCase = function (n) {
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};

/*
 * 用JavaScript获取Url的指定参数，若是找不到返回空串
 */
mfun.UrlRequestParams = function (n) {
    var rect = "";
    var url = url = window.location.href;
    var url_path = url.split("#")[0];
    var param_array = url_path.substr(url_path.indexOf("?") + 1, url_path.length).split("&");
    for (var i = 0; i < param_array.length; i++) {
        var param_string = param_array[i];
        var param_key = param_string.substr(0, param_string.indexOf("="));
        var param_value = param_string.substr(param_string.indexOf("=") + 1, param_string.length);
        if (param_key.toLowerCase() == n.toLowerCase()) {
            rect = param_value;
        }
    }

    return rect;
};

// #endregion

// #region Prototype

/*
 * 对Date的扩展，将 Date 转化为指定格式的String   
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)  
 * 例子：   
 * (new Date()).toDateFormat("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
 * (new Date()).toDateFormat("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
 */
Date.prototype.toDateFormat = function (str) { //author: meizz
    var rect = this.toString();
    if (str) {
        var o = {
            "M+": this.getMonth() + 1, //月份   
            "d+": this.getDate(), //日   
            "h+": this.getHours(), //小时   
            "m+": this.getMinutes(), //分   
            "s+": this.getSeconds(), //秒   
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
            "S": this.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(str)) str = str.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(str)) str = str.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        rect = str;
    }

    return rect;
}

/*
 * 对jquery的扩展，引入第三方库animate.css  
 * https://github.com/daneden/animate.css
 * 
 * 例子：   
 * $('#yourElement').animateCss('bounce');
 * 
 */
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


// #endregion