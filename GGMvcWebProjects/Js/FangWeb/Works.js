

// #region controller

app.controller("WorksController", function ($scope) {
    $scope.Projects = new Array();

    $.each(fdata.Career, function (i, item) {
        var projects = item.Project;
        $.each(projects, function (j, jtem) {
            $scope.Projects.push(jtem);
        });
    });

    $scope.$on("onFinishDataBind", function (e) {
        var sections = $(".fullpage-wrapper .section");
        $.each(sections, function (i, item) {
            var scan = $(item).find(".scan");
            var qrcode = $(scan).children(".qrcode");
            var httpUrl = $(scan).children(".buttons").children().first().attr("href");
            $(qrcode).qrcode({
                render: "canvas", // render method: 'canvas', 'image' or 'div'
                minVersion: 1, // version range somewhere in 1 .. 40
                maxVersion: 40,
                ecLevel: "L", // error correction level: 'L', 'M', 'Q' or 'H'
                left: 0, // offset in pixel if drawn onto existing canvas
                top: 0,
                size: 200, // size in pixel
                fill: "#000", // code color or image element
                background: null, // background color or image element, null for transparent background
                text: httpUrl, // content
                radius: 0, // corner radius relative to module width: 0.0 .. 0.5
                quiet: 0, // quiet zone in modules
                mode: 0, // modes // 0: normal // 1: label strip // 2: label box // 3: image strip // 4: image box
                mSize: 0.1,
                mPosX: 0.5,
                mPosY: 0.5,
                label: "no label",
                fontname: "sans",
                fontcolor: "#000",
                image: null
            });
        });
    });
})
.directive("onFinishDataBindFilters", function ($timeout) {
    return {
        restrict: "A", // 可以指定以元素（E）、属性（A）、类（C）或注释（M）的格式来调用指令
        link: function ($scope, $element, $attr) {
            if ($scope.$last) {
                $timeout(function () {
                    $scope.$emit("onFinishDataBind");
                });
            }
        }
    };
});;

// #endregion   

// #region fullpage

$(document).ready(function () {

    // 调用全屏分页
    $(".full-page").fullpage({
        autoScrolling: true, // 默认true,  是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条
        navigation: true, // 默认false, 是否显示项目导航
        resize: false, // 默认false, 字体是否随着窗口缩放而缩放
        onLeave: function (index, nextIndex, direction) {
            var section = $(".fullpage-wrapper .section").eq(nextIndex - 1);
            var caption = $(section).find(".caption");
            var content = $(section).find(".content");
            var scan = $(section).find(".scan");
            var buttons = $(section).find(".scan .buttons")
            var btnLeft = $(buttons).children().first();
            var btnRight = $(buttons).children().last();

            $(caption).animateCss("fadeInDown");
            $(content).animateCss("fadeIn");
            $(scan).animateCss("fadeInUp");
            $(btnLeft).animateCss("slideInLeft");
            $(btnRight).animateCss("slideInRight");
        },
        afterLoad: function (anchorLink, index) { },
        afterRender: function () { },
        afterResize: function () { },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) { },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) { }
    });

});

// #endregion