﻿/*
 * 2016-03-21
 * 方鹏举个人信息
 * 
 * */


var fdata = new Object();
fdata.ID = "411123198804175513";
fdata.FamilyName = "方";
fdata.FirstName = "鹏举";
fdata.FullName = fdata.FamilyName + fdata.FirstName;
fdata.EnglishName = "Allot";
fdata.Gender = "男";
fdata.BirthDate = (new Date(1989, 05, 09, 06, 09, 06, 00));
fdata.Header = "";
fdata.Header = (fdata.Header == "" ? kdata.IMG.DefaultMalePicture : fdata.Header);
fdata.Phone = {  // 电话
    CompanyTelephone: "",
    PrivateTelephone: "18589036730"
};
fdata.Email = { // 邮箱
    QQEmail: "1296696830@qq.com",
    QQ163: "18589036730@163.com"
};
fdata.Occupation = "IT工程师";
fdata.Country = "中国";
fdata.Nation = "汉族";
fdata.Birthplace = "河南漯河";
fdata.Residence = "广东深圳";

fdata.School = new Object(); // 学校
fdata.School.PrimarySchool = new Object(); // 小学
fdata.School.JuniorMiddleSchool = new Object(); // 初中
fdata.School.HighSchool = new Object(); // 高中
fdata.School.University = new Object(); // 大学
fdata.School.University.SchoolName = "郑州科技学院";
fdata.School.University.AcademicDegree = "本科";
fdata.School.University.Major = "计算机科学与技术";
fdata.School.University.AdmissionDate = new Date("2009-09-01"); // 入学时间
fdata.School.University.GraduationDate = new Date('2013-07-01'); // 毕业时间


fdata.Career = [ // 工作经历
    {
        No: 1,
        StartDate: (new Date(2013, 03, 01, 08, 00, 00, 00)),
        EndDate: (new Date(2015, 06, 31, 18, 00, 00, 00)),
        Company: {
            Name: "河南一江企划有限公司",
            Desc: [
                "河南一江企划（软件）有限公司成立于1999年7月，坐落于美丽的郑东新区CBD中心如意湖畔。一江企划是专门从事开发服务的软件公司，服务领域涉及广告、地铁、公交、公安、农业、教育等方面。 ",
                "公司自成立以来，先后研发了电视广告资源管理系统、农村数字化信息管理系统、地铁媒体资源综合管理系统等，一江企划领先的研发技术和优质的客户服务使得软件产品用户遍及大江南北。 ",
                "一江企划为员工营造了健康、活泼、积极、轻松的工作氛围，为帮助员工不断超越自我，实现性格突破、知识突破和能力突破，积极组织开发部、设计部、项目实施部、质量管理部、行政部共同参加周培训、日拓展训练、日工作操，让员工在学习到先进的科学技术、管理技能、科学的思维方法和工作方法的同时，也培养了员工的团队合作意识。",
                "一江企划强调的是集中工作6小时的高效率的工作理念，不随便加班的工作作风，重要的事情先做、容易的事情先做的工作习惯。 ",
                "一江企划拥有最优秀的设计团队和开发团队，他们年轻充满活力、智慧充满思想、向上充满激情，公司主体是80后，他们像热爱自己的生命一样热爱事业，不断的努力来提升自己的工作能力。",
                "一江企划如今正处在全力开拓的阶段，大家正以饱满的工作热情迎接公司未来的挑战和发展。"
            ],
            Kind: "私营 - 民营企业",
            Scale: "20~50",
            Province: "河南省",
            City: "郑州市",
            Website: "http://www.ejiang.com/"
        },
        Department: "开发部",
        Position: "开发工程师",
        Duty: [
            "参与系统软件的设计、编码、调试、测试工作。",
            "完成详细需求的分析与设计，并完成相关技术文档。",
            "按照项目任务和项目计划，完成模块的设计、编码和单元测试。",
            "独立完成应用系统模块的代码编写和单元测试。",
            "实现设计需求以及解决项目中出现的问题。",
            "具有规范化,标准化的代码编写习惯和良好的技术文档习惯。",
            "项目后期的维护、优化、升级"
        ],
        Project: [
            {
                No: 11,
                Name: "在成长(第一版)",
                Category: "web",
                StartDate: (new Date(2013, 05, 01, 08, 00, 00, 00)),
                EndDate: (new Date(2013, 09, 01, 08, 00, 00, 00)),
                Url: "http://www.zaichengzhang.net",
                Desc: [
                    "在成长--集教育、互联、记录、存储于一体的云服务系统，记录孩子在成长，搭建校园教学体系，加强家园互联沟通。多元化的主题课程，多样化的学习素材，多方位的家园互通，以幼儿为中心，生活、学习、娱乐多角度书写孩子的成长印记。",
                    ""
                ],
                Duty: [
                    "实现首页、幼儿园、我的家庭、动漫中心等主要模块。",
                    "实现首页的瀑布流加载和图片的懒加载。",
                    "实现幼儿园中，班级照片、班级视频、班级微博、每日食谱等的显示，微博的添加，微博添加照片、图片的处理。",
                    "实现我的家庭中，网页上传图片、视频，并对图片、视频进行缩略图截取，视频格式转换。",
                    "动漫中心的flash课件播放，给动漫组开发上传后台。",
                    "实现个人主页的显示。",
                    "实现网站站内信。",
                    "页面兼容性的测试、修改。",
                    "教师、家长、孩子、图片、视频数据的维护。",
                    ""
                ]
            },
            {
                No: 12,
                Name: "河南省实验幼儿园官网",
                Category: "web",
                StartDate: (new Date(2014, 00, 01, 08, 00, 00, 00)),
                EndDate: (new Date(2014, 04, 01, 08, 00, 00, 00)),
                Url: "http://ssy.ejiang.com",
                Desc: [
                    "河南省实验幼儿园是一所直属于河南省教育厅的省级示范幼儿园。用于园内新闻显示、校园风貌介绍、教师风采展示、校园荣誉等。",
                    ""
                ],
                Duty: [
                    "负责数据库的创建，项目框架的搭建。",
                    "负责开发网站的后台，实现新闻的管理、教师信息的录入、校园荣誉图片的上传、学生作品的上传、校园党建信息的管理、教师教研的管理等。",
                    "负责开发网站的前台，实现首页内容、图片轮播，新闻信息的展示。",
                    "负责学校新闻、党建工作、教师教研、学校简介、园长介绍、学校荣誉、教师风采、幼儿园地、学生作品、学生参赛等。",
                    "负责后期项目交接，重新实现网站的布局显示。",
                    "负责网站的发布、维护。",
                    ""
                ]
            },
            {
                No: 13,
                Name: "在成长后台(第一版)",
                Category: "web",
                StartDate: (new Date(2014, 05, 01, 08, 00, 00, 00)),
                EndDate: (new Date(2014, 07, 01, 08, 00, 00, 00)),
                Url: "http://admin.zaichengzhang.net:8002",
                Desc: [
                    "统计用户登录情况，统计用户使用情况；给客服开发服务页面，查找指定用户、修改用户邮箱、重置密码、关联孩子和解除关联等。",
                    ""
                ],
                Duty: [
                    "负责开发统计不同学校、不同班级、不同用户的登录情况。",
                    "负责开发添加用户缴费、用户缴费统计。 ",
                    "负责客服的页面，查找相关用户、修改用户邮箱、重置密码、查看关联情况、关联孩子和解除关联等。"
                ]
            },
            {
                No: 14,
                Name: "在成长后台(第二版)",
                Category: "web",
                StartDate: (new Date(2014, 10, 01, 08, 00, 00, 00)),
                EndDate: (new Date(2015, 01, 01, 08, 00, 00, 00)),
                Url: "http://admin.zaichengzhang.net",
                Desc: [
                    "在成长实现网页版，后台实现学校自己申请加入品台、平台审核管理；学校管理、教师管理、学生管理；教师信息管理、批量导入、列表打印；学生信息管理、批量导入、列表打印。学会关联二维码的生成。",
                    ""
                ],
                Duty: [
                    "搭建项目框架，使用log4net、ADO.NET、DevExpress Dxperience，编写相关服务代码。",
                    "实现幼儿园的审核管理，添加审核幼儿园。",
                    "实现幼儿园管理，幼儿园信息修改、给幼儿园分配学期、分配基本服务课件和使用期限，幼儿园的升级操作。",
                    "实现教师管理，教师信息添加、教师信息修改、批量导入、教师信息打印。",
                    "实现学生管理，学生信息添加、学生信息修改、批量导入、学生信息打印。",
                    "实现学会关联，给学生家长生成帐号、打印学生帐号信息。",
                    "实现在成长公告管理，在成长公告添加、修改、删除。",
                    "实现在成长公告管理，在成长公告添加、修改、删除。",
                    "负责网站的维护和升级。"
                ]
            },
            {
                No: 15,
                Name: "在成长(第二版)",
                Category: "web",
                StartDate: (new Date(2015, 02, 01, 08, 00, 00, 00)),
                EndDate: (new Date(2015, 05, 01, 08, 00, 00, 00)),
                Url: "http://parent.zaichengzhang.net",
                Desc: [
                    "在成长实现网页版，在成长网页版本的升级，去除复杂的操作，优化页面体验，添加绘本功能。",
                    ""
                ],
                Duty: [
                    "搭建项目MVC框架，使用log4net、ADO.NET，编写相关服务代码。",
                    "创建常用第三方库的在线引用；样式加入字体库Awesome；页面引入knockout、BootStrap、JqueryFancybox、WebUploader、MuPlayer。",
                    "创建页面模板和具体页面，编写web.config.js作为页面公众数据存储。",
                    "创建用户的信息模板，实现单点登录。",
                    "实现首页、幼儿园、我的成长、幼儿天地等主要模块。",
                    "实现首页的瀑布流加载、图片的懒加载、图片点击进行图片相册式浏览，心情寄语的发表，可添加表情、图片。",
                    "实现幼儿园中，相册视频、同班同学、每日食谱、课程信息、学生评价、签到值日等的显示，课程中课件、视频、图片、音乐的播放。",
                    "实现我的成长中，网页上传图片、视频，并对图片、视频进行缩略图截取，视频格式转换。",
                    "实现动漫中心的在成长儿歌的播放，给动漫组开发上传后台。",
                    "实现幼儿绘本的绘本的在线阅读、阅读记录、搜索等。",
                    "实现用户信息头像上传、修改绑定手机，修改孩子信息、修改密码。",
                    "页面样式和脚本的兼容性处理。"
                ]
            },
            {
                No: 16,
                Name: "在成长官网",
                Category: "web",
                StartDate: (new Date(2015, 05, 01, 08, 00, 00, 00)),
                EndDate: (new Date(2015, 06, 01, 08, 00, 00, 00)),
                Url: "http://www.zaichengzhang.net",
                Desc: [
                    "在成长官网是一个综合性的介绍网站，和在成长家长版、资源下载、成长纪念册关联起来的网站，同时也是各个平台的综合入口。",
                    ""
                ],
                Duty: [
                    "搭建项目框架，使用log4net、ADO.NET，编写相关服务代码。",
                    "实现首页的视觉差滚动显示，实现页面动画。",
                    "实现路由的重定向。"
                ]
            }
        ]
    },
    {
        No: 2,
        StartDate: (new Date(2015, 07, 07, 08, 00, 00, 00)),
        EndDate: (new Date(2016, 02, 31, 18, 00, 00, 00)),
        Company: {
            Name: "深圳繁荣天下信息科技有限公司",
            Desc: [
                "《私人情报》是个性化深度订制新闻媒体平台。以用户兴趣爱好订制新闻阅读， 用户可以第一时间获取自己感兴趣新闻资讯。主要解决用户的痛点：每天都在被动看新闻被动看广告，获取商业资讯或感兴趣的新闻资讯不够及时，导致错过很多机会和执行决策失误。",
                "21世纪信息碎片化，用户无法精准订阅自己想看新闻内容。 深圳繁荣天下信息科技有限公司依托大数据技术的应用，自动匹配用户的兴趣爱好，进行内容的深度定制，让用户第一时间获取有价值的新闻资讯。",
                ""
            ],
            Kind: "私营 - 民营企业",
            Scale: "1~20",
            Province: "广东省",
            City: "深圳市",
            Website: "http://www.szfrtx.com/"
        },
        Department: "技术部",
        Position: "开发工程师",
        Duty: [
            "参与系统软件的设计、编码、调试、测试工作。",
            "完成详细需求的分析与设计，并完成相关技术文档。",
            "按照项目任务和项目计划，完成模块的设计、编码和单元测试。",
            "独立完成应用系统模块的代码编写和单元测试。",
            "实现设计需求以及解决项目中出现的问题。",
            "具有规范化,标准化的代码编写习惯和良好的技术文档习惯。",
            "项目后期的维护、优化、升级"
        ],
        Project: [
            {
                No: 21,
                Name: "私人情报(微信版)",
                Category: "webapp",
                StartDate: (new Date(2015, 07, 01, 08, 00, 00, 00)),
                EndDate: (new Date(2015, 09, 01, 08, 00, 00, 00)),
                Url: "http://wx.sirenqingbao.com/front/Wx/Html/TodayMade.html",
                Desc: [
                    "《私人情报》依托大数据技术的应用，实时为用户抓取订制的新闻，数据库自动匹配用户需求，让用户第一时间看到自己所感兴趣的新闻资讯。",
                    ""
                ],
                Duty: [
                    "实现首页的新闻列表下拉刷新、上拉加载更多，左右切换新闻频道，点击新闻阅读，再次返回，回到当前频道和当前位置。",
                    "实现新闻的评论、和子评论，在阅读新闻时点击查看子评论，进入子评论列表，再次返回，回到元新闻阅读和评论的当前位置。",
                    "实现新闻的收藏、新闻的转发等。",
                    "实现页面意见反馈、广告推广。",
                    "实现新闻的搜索。",
                    ""
                ]
            },
            {
                No: 22,
                Name: "私人情报(IOS版)",
                Category: "app",
                StartDate: (new Date(2015, 11, 01, 08, 00, 00, 00)),
                EndDate: (new Date(2016, 02, 01, 08, 00, 00, 00)),
                Url: "https://itunes.apple.com/us/app/si-ren-qing-bao/id1084924250?l=zh&ls=1&mt=8",
                Desc: [
                    "《私人情报》依托大数据技术的应用，实时为用户抓取订制的新闻，数据库自动匹配用户需求，让用户第一时间看到自己所感兴趣的新闻资讯。",
                    ""
                ],
                Duty: [
                    "申请邓白氏编码，申请苹果开发者帐号。",
                    "搭建IOS框架，引入CocoaPods的第三方库。",
                    "实现新闻的侧边栏效果。",
                    "实现新闻的下拉刷新、上拉加载更多，左右滑动切换频道，新闻评论和子评论、频道定制和取消订制、关键词搜索、阅读历史、搜藏列表、评论列表、意见反馈。",
                    "实现日间和夜间模式的切换。",
                    "实现第三方分享，可分享到微信、QQ、微博，实现新闻的分享列表。",
                    "实现第三方登录，可用微信、QQ、微信帐号登录。",
                    "实现消息推送，每日固定推送推荐新闻消息。",
                    "实现设置功能，可设置新闻列表的标题字体大小、关闭和打开接收推送、智能下图、清除缓存、注销登录。",
                    "设置证书，打包代码，提交AppleStore审核。"
                ]
            }
        ]
    }
];