
// #region controller

app.controller("IndexController", function ($scope) {
    $scope.UserInfo = {
        UserName: fdata.FullName,
        UserHeader: fdata.Header
    };
    $scope.Craftmanship = {
        Title: "用工匠精神，做一个页面",
        SubTitle: "耐心、专注、执着、坚持，为的只是画出一片美丽的风景。",
        List: [
            {
                Title: "HTML",
                SubTitle: "超文本标记语言",
                Desc: "它是标准通用标记语言下的一个应用，也是一种规范，一种标准，它通过标记符号来标记要显示的网页中的各个部分。",
                Text: "查看更多>",
                Url: "/" // http://baike.baidu.com/link?url=hbyCSgvslA25G1CLEWLyu7au2GhgtdpszsY8iFzsW6nE13iCwhY9thnYJ6Yfg9lDjjay4go1d_F7gxZfO_T42K
            },
            {
                Title: "CSS",
                SubTitle: "层叠样式表",
                Desc: "是一种用来表现HTML或XML文件等样式的计算机语言，也是能够真正做到网页表现与内容分离的一种样式设计语言。",
                Text: "查看更多>",
                Url: "/" // http://baike.baidu.com/link?url=OSZKuqtOdfXGMBSMpHziqE_aCxWypJuGJZtnBpgE_G-IF_lOdXJCpmUw1qAfctzvSFiuSnL2zy36bjeEBznNTvx6PMTuS4KU54Ry0bNyXmO
            },
            {
                Title: "JS",
                SubTitle: "JavaScript",
                Desc: "一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型，为网页添加各式各样的动态功能。",
                Text: "查看更多>",
                Url: "/" // http://baike.baidu.com/link?url=xGelzI-Kk5zj34R_-u3-pD_2SCi4DiUcJZQ952H_sPQdPndWpTOOWvPQLRE9DIhd95mRegbXvl94CHvNlfE_W_
            }
        ]
    };
    $scope.Compatibility = {
        Title: "用心去感受，每一处不同",
        SubTitle: "同一片风景，只因为不同的人站在不同的角度，看到的就不同。",
        List: [
            {
                Title: "IE浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1009539029,1001709328&fm=58",
                Website: "http://windows.microsoft.com/zh-cn/internet-explorer/download-ie",
                Download: "https://www.baidu.com/link?url=vk2jceojbDQHzesXrV2GUkWGAhzEtEjJu6SAI1VRUecoxfNN56XT55TJfIljIb02XuLupNPPMPOCjGdiAJtQt7l6R1lafAsvF4Axsg4b7xa&wd=&eqid=ee133e6a0001cc2e0000000656f4eacb"
            },
            {
                Title: "谷歌浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=935037610,927739223&fm=58",
                Website: "http://www.google.cn/intl/zh-CN/chrome/browser/desktop/index.html",
                Download: "https://www.baidu.com/link?url=WikbVjvZ73XKG72tSKSkRi3O6CNuwfpkbLrN-dMq0gb_4qh5BBcsG7HvcgdfbtZV8FJYQ8vcWeh-O-twURFha_&wd=&eqid=b708bd59000052b00000000656f4e7af"
            },
            {
                Title: "Safari浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=985064900,942883649&fm=58",
                Website: "https://www.apple.com/safari/",
                Download: "https://www.baidu.com/link?url=uhMuZTuEIrdbUKzkrTT6efXOqJvOUxVGVNcC2anKF2HTZimIAbMe2tfKoGukfngUQv0v-nG5TpTIY1euVf-YNq&wd=&eqid=9e972e56000a105a0000000656f4fae0"
            },
            {
                Title: "百度浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=935937137,914312429&fm=58",
                Website: "http://liulanqi.baidu.com/download.html",
                Download: "https://www.baidu.com/link?url=etJ_IXmsamGrH-HLQnrS_4FAlagBiJU-qkkiQjeN8D9cY4ayOz7TNUxgVFmNGxE3OH8zS_Tv-C9ULzT_aGlmM_&wd=&eqid=8d2d56dc0003899f0000000656f4ee10"
            },
            {
                Title: "火狐浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=919681422,875112773&fm=58",
                Website: "http://www.firefox.com.cn/download/",
                Download: "https://www.baidu.com/link?url=lVbAqr5cdj4HOJ9apNC9q1xi_usJ-Y5-lqIHlPaKmR22Tt18pHQFtNEe5QdNImL3eyFSwz9vqiJj23MHH7RX0_&wd=&eqid=b56aec6d0003b2f50000000656f4ee99"
            },
            {
                Title: "欧朋浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=950397246,905079833&fm=58",
                Website: "http://www.oupeng.com/download",
                Download: "https://www.baidu.com/link?url=MH6C7ybDelaufDbr9TwN3opZWOdjSQLMfbtGHfkQfNa58fha4S_BOYeCs6U-mgko_x4Blz7pvlNhj1QMxnBme_&wd=&eqid=a6c973be0003b4ea0000000656f4eee5"
            },
            {
                Title: "QQ浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=840313675,903759545&fm=58",
                Website: "http://browser.qq.com/?adtag=SEM1",
                Download: "https://www.baidu.com/link?url=sejiyUTpXmGRJtK2wscRsehTLgaIO4NPTP08_5nbAYBW2CYwvRK_Djw45VE54qcoujqI2bFqXew560hZaMbwdaS4RPkon-drcHiIVdQlE6S&wd=&eqid=ac1ca3b10003c8ab0000000656f4ef56"
            },
            {
                Title: "360浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "http://img5sw.baidu.com/soft/de/24437/ef8d8726ea8a83ff4642b289e26ccbf6.png?version=3153376528",
                Website: "http://se.360.cn/",
                Download: "http://se.360.cn/index.html"
            },
            {
                Title: "遨游浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=971028478,986835251&fm=58",
                Website: "http://www.maxthon.cn/",
                Download: "http://www.maxthon.cn/"
            },
            {
                Title: "搜狗浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=934671793,962957905&fm=58",
                Website: "http://ie.sogou.com/",
                Download: "http://ie.sogou.com/"
            },
            {
                Title: "猎豹浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=969940281,1011825529&fm=58",
                Website: "http://www.liebao.cn/",
                Download: "http://www.liebao.cn/download.html"
            },
            {
                Title: "UC浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=936051787,962550566&fm=58",
                Website: "http://www.uc.cn/",
                Download: "http://www.uc.cn/ucbrowser/download/"
            },
            {
                Title: "世界之窗浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1000601683,964234487&fm=58",
                Website: "http://www.theworld.cn/",
                Download: "http://www.theworld.cn/"
            },
            {
                Title: "2345浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=940138955,905237549&fm=58",
                Website: "http://ie.2345.com/",
                Download: "http://ie.2345.com/"
            },
            {
                Title: "桔子浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=800088519,850108034&fm=58",
                Website: "http://browser.hao123.com/",
                Download: "http://browser.hao123.com/download"
            },
            {
                Title: "枫树浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=844939180,895570958&fm=58",
                Website: "http://www.chromeplus.org/",
                Download: "https://www.baidu.com/link?url=0cMUWUlr-LZ3-jorxygzsJqJB_3gbAVEu8YATAZgV7nTbA0iVweNP31KLQj-707CY83Ml27muyihdG2KKQrUU5JgQNnRbZ5R1LnUm5IxQza&wd=&eqid=e4b5428e000be1d30000000656f4fc67"
            }
            ,
            {
                Title: "淘宝浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=945052809,929252315&fm=58",
                Website: "http://browser.taobao.com/",
                Download: "https://www.baidu.com/link?url=FXFJe56Pv-XEl-eW3PGEP3DLpNQCMxuEc2rIxOofPaC0hUBiJB3FwZS5peq1d0vb2hSGFFX-AQJoJmdxr2e7JhBZBQK7CD3oTeBBhxhm7T3&wd=&eqid=da096840000a981f0000000656f4fcfe"
            },
            {
                Title: "YY浏览器",
                SubTitle: "",
                Desc: "",
                Logo: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=904879806,961899563&fm=58",
                Website: "http://ie.yy.com/",
                Download: "http://ie.yy.com/"
            }
        ]
    };
    $scope.Technologysite = {
        Title: "用前沿科技，来不断提升",
        SubTitle: "人不光是靠他生来就拥有一切，而是靠他从学习中所得到的一切来造就自己。", //歌德
        List: [
            {
                Title: "开源中国",
                SubTitle: "",
                Desc: "",
                Logo: "/Image/FangWeb/img-website-oschina.png", //http://www.oschina.net/img/logo.svg?date=20151013
                Website: "http://www.oschina.net/"
            },
            {
                Title: "Github",
                SubTitle: "",
                Desc: "",
                Logo: "/Image/FangWeb/img-website-github.png",
                Website: "https://github.com/"
            },
            {
                Title: "EnvatoMarket",
                SubTitle: "",
                Desc: "",
                Logo: "/Image/FangWeb/img-website-envatomark.png",
                Website: "http://codecanyon.net/"
            }
        ]
    };
});

// #endregion