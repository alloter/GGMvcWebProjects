
// #region data



// #endregion

// #region model



// #endregion

// #region controller

ngApp.controller("ViewFooter", function ($scope) {
    $scope.Menus = [
    {
        "Text": "关于",
        "Url": "/",
        "SubMenus": [
            {
                "Text": "关于我们",
                "Url": "/",
                "SubMenus": []
            },
            {
                "Text": "广告合作",
                "Url": "/",
                "SubMenus": []
            },
            {
                "Text": "友情链接",
                "Url": "/",
                "SubMenus": []
            },
            {
                "Text": "招聘",
                "Url": "/",
                "SubMenus": []
            },
        ]
    },
    {
        "Text": "联系方式",
        "Url": "/",
        "SubMenus": [
            {
                "Text": "新浪微博",
                "Url": "/",
                "SubMenus": []
            },
            {
                "Text": "电子邮件",
                "Url": "/",
                "SubMenus": []
            }
        ]
    }];
});

// #endregion