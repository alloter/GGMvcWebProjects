

// #region controller

app.controller("AbountController", function ($scope) {
    $scope.UserInfo = {
        UserName: fdata.FullName,
        UserHeader: fdata.Header,
        UserBrief: [
            {
                p: "谢霆锋（Nicholas Tse），1980年8月29日出生香港，祖籍广东番禺，歌手、词曲创作人、演员、特效制作人、青年企业家、PO朝霆创始人。1987年随父母移居加拿大；1995年留学日本东京修读音乐，15岁创作第一首歌《估计错误》[1]  ；1996年正式出道[2]  。"
            },
            {
                p: "1997—1999年4月发行了《无声仿有声》《末世纪的呼声》等五张专辑。1999年发行其第一张国语专辑《谢谢你的爱1999》[3-4]  。2000年参加央视春节联欢晚会和举行“Viva Live”世界巡回演唱会[5-7]  。2001年以《玉蝴蝶》和《世纪预言》在世界音乐大奖中获“全球最高销量之亚洲最畅销男歌手”奖[8-10]  。"
            },
            {
                p: "1998年凭《新古惑仔之少年激斗篇》获金像奖最佳新演员[11]  。1999、2012年分别凭《半支烟》《逆战》入围金马奖最佳男主角[12-13]  。2011年以《线人》获香港电影金像奖最佳男主角，[14]  为第一位80后金像影帝[15-16]  。"
            },
            {
                p: "2003年受邀清华大学[17]  和北京大学[18]  座谈会演讲，并创办中国顶尖特效制作公司PO朝霆，该公司预估未来营业产值高达60亿港元[19-21]  ；垄断国内的亚洲性电影、世界性电视广告、跑车品牌等，各80%及90%以上市场，另还投资于房地产、商铺、餐饮、服装、娱乐业等[20]  。2012年应邀以亚洲商业领袖的身份为香港科技大学商学院师生做讲座，其本人和创办的公司入选该院MBA（世界十强）案例[20-21]  ，其事迹入选《问鼎55个成就世界领先地位的华人企业（企业家）发展范例》一书[22]  。"
            }
        ]
    };
    $scope.UserBasic = {
        Header: {
            Text: "基本信息"
        },
        List: [
            {
                List: [
                    {
                        Key: "中文名",
                        Value: fdata.FullName
                    },
                    {
                        Key: "外文名",
                        Value: fdata.EnglishName
                    },
                    {
                        Key: "国籍",
                        Value: fdata.Country
                    },
                    {
                        Key: "民族",
                        Value: fdata.Nation
                    },
                    {
                        Key: "性别",
                        Value: fdata.Gender
                    },
                    {
                        Key: "出生地",
                        Value: fdata.Birthplace
                    },
                    {
                        Key: "出生日期",
                        Value: fdata.BirthDate.toDateFormat("yyyy年MM月")
                    }
                ]
            },
            {
                List: [
                    {
                        Key: "毕业院校",
                        Value: fdata.School.University.SchoolName
                    },
                    {
                        Key: "毕业时间",
                        Value: fdata.School.University.GraduationDate.toDateFormat("yyyy-MM-dd")
                    },
                    {
                        Key: "专业",
                        Value: fdata.School.University.Major
                    },
                    {
                        Key: "学历",
                        Value: fdata.School.University.AcademicDegree
                    },
                    {
                        Key: "职业",
                        Value: fdata.Occupation
                    },
                    {
                        Key: "邮箱",
                        Value: fdata.Email.QQEmail
                    },
                    {
                        Key: "现居住地",
                        Value: fdata.Residence
                    }
                ]
            }
        ]
    }
    $scope.UserHobby = {
        Header: {
            Text: "个人喜好"
        },
        List: [
            {
                Title: "休闲",
                Text: "看一场场电影真实视觉的享受，不是羡慕片中主角光亮，而是钦佩特效的炫酷。",
                Url: "https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=990315301,2339700749&fm=20"
            },
            {
                Title: "偶尔",
                Text: "我是一个不会唱歌的人，但我却听得见你在唱什么，你唱的那么动听。",
                Url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=232754040,1179287676&fm=58"
            },
            {
                Title: "零食",
                Text: "不是寂寞的时候嗑瓜子，而是嗑起瓜子发现很寂寞，多久没有在一起吃着瓜子看电影了。",
                Url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=39383565,3530046771&fm=58"
            },
            {
                Title: "水果",
                Text: "记得小时候，炎日酷夏，家中切个瓜，那种解暑爽快的感觉。",
                Url: "https://ss0.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1908410486,697040013&fm=58"
            }
        ]
    };
});

// #endregion