
// #region data



// #endregion

// #region console

funConsoleLogFangWeb(); // 调用日志打印
function funConsoleLogFangWeb() {
    if (window.console) {
        console.log("天将降大任于斯人也，\n必先卸其QQ，\n封其微博，\n删其微信，\n去其贴吧，\n收其电脑，\n夺其手机，\n摔其ipad，\n断其wifi，\n剪其网线，\n使其百无聊赖，\n然后静坐、喝茶、思过、锻炼、读书、弹琴、练字、明智、开悟、精进，\n而后必成大器也！");
        console.log("邮箱 %c" + fdata.Email.QQEmail + " %c 闲人免扰，谢谢！", "color:red", "color:black");
        //console.log("百度 http://www.baidu.com");
    }
}

// #endregion

// #region controller

app.controller("HeaderController", function ($scope) {
    $scope.Statusbars = {
        Header: {
            Text: "欢迎来到" + fdata.FullName + "的个人空间",
            Url: "/",
            List: []
        },
        List: [
            {
                Text: "手机版空间",
                Url: "/FangWap/Index",
                List: []
            },
            {
                Text: "AngularJs",
                Url: "/Examples/angular_1.5.0/docs/index.html",
                List: []
            },
            {
                Text: "Bootstrap",
                Url: "http://v3.bootcss.com/",
                List: []
            },
            {
                Text: "MUI",
                Url: "/Examples/mui_master/examples/hello-mui/index.html",
                List: []
            },
            {
                Text: "QRCode",
                Url: "/Examples/jquery_qrcode/examples/index.html",
                List: []
            },
            {
                Text: "AgileLite",
                Url: "/Examples/agile_lite/examples/for-browser/agile_lite/index.html",
                List: []
            }
        ]
    };
    $scope.Navbars = {
        Header: {
            Text: fdata.FullName,
            Url: kdata.DomainName,
            List: []
        },
        List: [
            {
                Active: false,
                Text: "主页",
                Url: "/FangWeb/Index",
                List: []
            },
            {
                Active: false,
                Text: "个人档案",
                Url: "/FangWeb/Abount",
                List: []
            },
            {
                Active: false,
                Text: "工作经历",
                Url: "/FangWeb/Experience",
                List: []
            },
            {
                Active: false,
                Text: "职业技能",
                Url: "/FangWeb/Career",
                List: []
            },
            {
                Active: false,
                Text: "作品演示",
                Url: "/FangWeb/Works",
                List: []
            },
            {
                Active: false,
                Text: "人生格言",
                Url: "/FangWeb/Motto",
                List: []
            }
        ]
    };

    var funNavbarsList = function () {
        var url = window.location.href;
        var isActive = false;
        $.each($scope.Navbars.List, function (i, item) {
            if (url.toUpperCase().indexOf(item.Url.toUpperCase()) > 0) {
                document.title = item.Text; //将title替换为当前标题内容
                isActive = true;
                item.Active = true;
                return false;
            }
        });
    };

    funNavbarsList(); // 判断当前页面的导航位置
});

app.controller("FooterController", function ($scope) {
    $scope.Navbars = {
        Header: {
            Text: "我可以走得很慢，但是我绝不后退。",
            Url: "",
            List: []
        },
        List: [
            {
                Header: {
                    Text: "友情链接"
                },
                List: [
                    {
                        Text: "百度传课",
                        Url: "http://www.chuanke.com/"
                    },
                    {
                        Text: "慕课网",
                        Url: "http://www.imooc.com/"
                    },
                    {
                        Text: "前端网",
                        Url: "http://www.w3cfuns.com/"
                    },
                    {
                        Text: "慢时间",
                        Url: "http://www.manshijian.com/"
                    },
                    {
                        Text: "人人都是产品经理",
                        Url: "http://www.woshipm.com/"
                    },
                    {
                        Text: "在线工具",
                        Url: "http://tool.cc/"
                    }
                ]
            },
            {
                Header: {
                    Text: "技术酷站"
                },
                List: [
                    {
                        Text: "开源中国",
                        Url: "http://www.oschina.net/"
                    },
                    {
                        Text: "Github",
                        Url: "https://github.com/"
                    },
                    {
                        Text: "EnvatoMarket",
                        Url: "http://codecanyon.net/"
                    },
                    {
                        Text: "在线工具",
                        Url: "http://tool.cc/"
                    },
                    {
                        Text: "站长之家",
                        Url: "http://sc.chinaz.com/"
                    },
                    {
                        Text: "懒人之家",
                        Url: "http://www.lanrenzhijia.com/"
                    },
                    {
                        Text: "大头网",
                        Url: "http://www.datouwang.com/"
                    },
                    {
                        Text: "科e互联",
                        Url: "http://www.internetke.com/effects/"
                    },
                    {
                        Text: "源码爱好者",
                        Url: "http://www.codefans.net/"
                    },
                    {
                        Text: "网页特效库",
                        Url: "http://www.5iweb.com.cn/"
                    },
                    {
                        Text: "jQuery之家",
                        Url: "http://www.htmleaf.com/"
                    },
                    {
                        Text: "JS代码网",
                        Url: "http://www.js-css.cn/"
                    },
                    {
                        Text: "RUNOOB",
                        Url: "http://www.runoob.com/"
                    }
                ]
            },
            {
                Header: {
                    Text: "开源技术"
                },
                List: [
                    {
                        Text: "阿里巴巴",
                        Url: "http://www.oschina.net/project/alibaba"
                    },
                    {
                        Text: "百度",
                        Url: "http://www.oschina.net/project/baidu"
                    },
                    {
                        Text: "腾讯",
                        Url: "http://www.oschina.net/project/tencent"
                    },
                    {
                        Text: "网易",
                        Url: "http://www.oschina.net/project/netease"
                    },
                    {
                        Text: "豆瓣",
                        Url: "http://www.oschina.net/project/douban"
                    },
                    {
                        Text: "新浪",
                        Url: "http://www.oschina.net/project/sina"
                    },
                    {
                        Text: "深度Deepin",
                        Url: "http://www.oschina.net/project/deepin"
                    },
                    {
                        Text: "58同城",
                        Url: "http://www.oschina.net/project/58"
                    },
                    {
                        Text: "大众点评",
                        Url: "http://www.oschina.net/project/dianping"
                    },
                    {
                        Text: "搜狐",
                        Url: "http://www.oschina.net/project/sohu"
                    },
                    {
                        Text: "小米",
                        Url: "http://www.oschina.net/project/xiaomi"
                    },
                    {
                        Text: "豌豆荚",
                        Url: "http://www.oschina.net/project/wandoujia"
                    },
                    {
                        Text: "金山",
                        Url: "http://www.oschina.net/project/kingsoft"
                    },
                    {
                        Text: "华为",
                        Url: "http://www.oschina.net/project/huawei"
                    },
                    {
                        Text: "东软",
                        Url: "http://www.oschina.net/project/neusoft"
                    },
                    {
                        Text: "360",
                        Url: "http://www.oschina.net/project/360"
                    },
                    {
                        Text: "禅道",
                        Url: "http://www.oschina.net/project/zentao"
                    },
                    {
                        Text: "开源中国",
                        Url: "http://www.oschina.net/project/osc"
                    },
                    {
                        Text: "Apache 基金会",
                        Url: "http://www.oschina.net/project/apache"
                    },
                    {
                        Text: "JBoss",
                        Url: "http://www.oschina.net/project/jboss"
                    },
                    {
                        Text: "Google",
                        Url: "http://www.oschina.net/project/google"
                    },
                    {
                        Text: "Mozilla",
                        Url: "http://www.oschina.net/project/mozilla"
                    },
                    {
                        Text: "Facebook",
                        Url: "http://www.oschina.net/project/facebook"
                    },
                    {
                        Text: "微软",
                        Url: "http://www.oschina.net/project/microsoft"
                    },
                    {
                        Text: "Netflix",
                        Url: "http://www.oschina.net/project/netflix"
                    },
                    {
                        Text: "Twitter",
                        Url: "http://www.oschina.net/project/twitter"
                    },
                    {
                        Text: "NASA",
                        Url: "http://www.oschina.net/project/nasa"
                    },
                    {
                        Text: "Github",
                        Url: "http://www.oschina.net/project/github"
                    },
                    {
                        Text: "Paypal",
                        Url: "http://www.oschina.net/project/paypal"
                    }
                ]
            },
            {
                Header: {
                    Text: "UI设计"
                },
                List: [
                    {
                        Text: "UI中国",
                        Url: "http://www.ui.cn/"
                    },
                    {
                        Text: "盒子UI",
                        Url: "http://www.boxui.com/"
                    },
                    {
                        Text: "Uimaker",
                        Url: "http://www.uimaker.com/"
                    },
                    {
                        Text: "学UI网",
                        Url: "http://www.xueui.cn/"
                    },
                    {
                        Text: "UI社",
                        Url: "http://www.uishe.cn/"
                    },
                    {
                        Text: "UI设计网",
                        Url: "http://www.uisheji.com/"
                    },
                    {
                        Text: "UI63",
                        Url: "http://ui63.com/"
                    },
                    {
                        Text: "优艾图",
                        Url: "http://www.uiimg.com/"
                    }
                ]
            },
            {
                Header: {
                    Text: "矢量图标"
                },
                List: [
                    {
                        Text: "阿里巴巴矢量图标库",
                        Url: "http://www.iconfont.cn/"
                    },
                    {
                        Text: "FontAwesome",
                        Url: "http://fontawesome.io/"
                    },
                    {
                        Text: "Glyphicons",
                        Url: "http://glyphicons.com/"
                    },
                    {
                        Text: "Iconfinder",
                        Url: "https://www.iconfinder.com/"
                    },
                    {
                        Text: "Flaticon",
                        Url: "http://www.flaticon.com/"
                    },
                    {
                        Text: "Dryicons",
                        Url: "http://dryicons.com/"
                    },
                    {
                        Text: "Findicons",
                        Url: "http://findicons.com/"
                    },
                    {
                        Text: "Easyicon",
                        Url: "http://www.easyicon.net/"
                    },
                    {
                        Text: "Iconarchive",
                        Url: "http://www.iconarchive.com/"
                    },
                    {
                        Text: "Softicons",
                        Url: "http://www.softicons.com/"
                    },
                    {
                        Text: "Iconpng",
                        Url: "http://www.iconpng.com/"
                    },
                    {
                        Text: "Icons8",
                        Url: "https://icons8.com/"
                    },
                    {
                        Text: "Dryicons",
                        Url: "http://dryicons.com/"
                    }
                ]
            },
            {
                Header: {
                    Text: "H5特效"
                },
                List: [
                    {
                        Text: "场景应用",
                        Url: "http://www.liveapp.cn/"
                    },
                    {
                        Text: "MAKA",
                        Url: "http://www.maka.im/"
                    },
                    {
                        Text: "Html5Tricks",
                        Url: "http://www.html5tricks.com/"
                    },
                    {
                        Text: "17素材",
                        Url: "http://www.17sucai.com/"
                    }
                ]
            }
        ]
    };
    $scope.CopyRight = {
        AllRightRserved: "版权所有",
        Symbol: "&copy;",
        DomainName: kdata.DomainName,
        StartYear: 2016,
        EndYear: (new Date()).getFullYear(),
        CopyYear: (new Date()).getFullYear(),
        ICPNo: "ICP证：豫ICP备16009433号",
        ICPUrl: "http://www.miibeian.gov.cn"
    };

    var funCopyYear = function () {
        if ($scope.CopyRight.StartYear == $scope.CopyRight.EndYear) {
            $scope.CopyRight.CopyYear = $scope.CopyRight.StartYear;
        }
        else {
            $scope.CopyRight.CopyYear = $scope.CopyRight.StartYear + "-" + $scope.CopyRight.EndYear;
        }
    };

    var funNavbarsList = function () {
        $.each($scope.Navbars.List, function (i, item) {
            var maxNum = 6;
            var arr = new Array();
            $.each(item.List, function (j, jm) {
                if (j > maxNum) {
                    return false; // 中断循环
                }
                else {
                    arr.push(jm);
                }
            });
            item.List = arr;
        });
    };

    funCopyYear(); // 修改授权显示时间
    funNavbarsList(); // 友情链接移除多余指定个数
});

// #endregion