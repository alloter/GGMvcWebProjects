

// #region controller

app.controller("AbountController", function ($scope) {
    $scope.UserInfo = {
        UserName: fdata.FullName,
        UserHeader: fdata.Header,
        UserBrief: [
            {
                p: "方鹏举，1989年出生，出身河南漯河的一个村庄的普通家庭。2009年考入大学；2013年大学毕业，获得本科学历。"
            },
            {
                p: "2013年4月入职河南一江企划有限公司，成为一个IT开发工程师。"
            },
            {
                p: "2015年8月入职深圳繁荣天下信息科技有限公司。"
            },
            {
                p: ""
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
                Text: "看一场电影的视觉享受，不是羡慕片中主角光环，而是钦佩炫酷的特效。",
                Url: "https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=990315301,2339700749&fm=20"
            },
            {
                Title: "偶尔",
                Text: "我是一个不会唱歌的人，但我却听得见你在唱什么，你唱的那么动听。",
                Url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=232754040,1179287676&fm=58"
            },
            {
                Title: "零食",
                Text: "最幸福的时光是，小伙伴们一起嗑着瓜子，吃着糖果，围在一看电影了。",
                Url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=39383565,3530046771&fm=58"
            },
            {
                Title: "水果",
                Text: "记得小时候，外面炎日酷夏，家中切个冰西瓜，那种解暑爽快的感觉。",
                Url: "https://ss0.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1908410486,697040013&fm=58"
            }
        ]
    };
});

// #endregion