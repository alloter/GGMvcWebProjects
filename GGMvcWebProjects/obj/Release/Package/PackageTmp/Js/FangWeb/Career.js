

// #region controller

app.controller("CareerController", function ($scope) {
    $scope.Career = {
        Header: {
            Text: "开发工具和编程语言"
        },
        List: [
            {
                Header: {
                    Text: "开发工具"
                },
                ClassName: "dev-tool"
            },
            {
                Header: {
                    Text: "编程语言"
                },
                ClassName: "dev-lang"
            }
        ]
    };

    $scope.$on("onFinishDataBind", function (e) {
        $.each($scope.Career.List, function (i, item) {
            var className = item.ClassName;
            var docElement = document.getElementsByClassName(className)[0];
            var myChart = echarts.init(docElement);
            if (i == 0) {
                myChart.setOption({
                    baseOption: {
                        backgroundColor: "#fff",
                        title: {
                            text: "",
                            left: "center",
                            textStyle: {
                                color: "#eee"
                            }
                        },
                        tooltip: {
                            show: true,
                            showContent: false
                        },
                        legend: {
                            show: true,
                            x: "center",
                            data: ["开发工具"],
                            textStyle: {
                                color: "rgba(0, 162, 202, 0.8)",
                                fontSize: 12
                            },
                            itemGap: 20
                        },
                        radar: {
                            name: {
                                textStyle: {
                                    color: "rgba(0, 162, 202, 0.8)"
                                }
                            },
                            shape: "circle",
                            indicator: [
                                { name: "VisualStudio", max: 100 },
                                { name: "Eclipse", max: 100 },
                                { name: "Xcode", max: 100 }
                            ],
                            center: ["50%", "60%"],
                            radius: 90,
                            splitNumber: 5,
                            splitLine: {
                                lineStyle: {
                                    color: [
                                        "rgba(0, 162, 202, 0.2)",
                                        "rgba(0, 162, 202, 0.2)",
                                        "rgba(0, 162, 202, 0.2)",
                                        "rgba(0, 162, 202, 0.2)",
                                        "rgba(0, 162, 202, 0.2)",
                                        "rgba(0, 162, 202, 0.2)"
                                    ].reverse()
                                }
                            },
                            splitArea: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "rgba(0, 162, 202, 0.3)",
                                    width: 1,
                                    opacity: 0.5
                                }
                            }
                        },
                        series: [{
                            name: "开发工具",
                            type: "radar",
                            data: [
                                {
                                    value: [90, 20, 80],
                                    name: "熟练度"
                                }
                            ],
                            lineStyle: {
                                normal: {
                                    color: "rgba(0, 162, 202, 0.8)",
                                    width: 1,
                                    opacity: 0.5
                                }
                            },
                            symbol: "roundRect", // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                            symbolSize: 1,
                            itemStyle: {
                                normal: {
                                    color: "rgba(0, 162, 202, 0.8)"
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.3
                                }
                            }
                        }]
                    },
                    media: [
                        {
                            query: {
                                maxAspectRatio: 1           // 当长宽比小于1时。
                            },
                            option: {
                                legend: {                   // legend 放在底部中间。
                                    right: "center",
                                    bottom: 0,
                                    orient: "horizontal"    // legend 横向布局。
                                },
                                radar: {
                                    radius: 70,
                                    center: ["50%", "60%"]
                                },
                                series: [                   // 两个饼图左右布局。
                                    {
                                        radius: [20, "50%"],
                                        center: ["50%", "50%"]
                                    }
                                ]
                            }
                        },
                        {
                            query: {
                                minWidth: 300,               // 当容器宽度大于 300 时。
                                maxWidth: 500               // 当容器宽度小于 500 时。
                            },
                            option: {
                                legend: {
                                    right: 10,              // legend 放置在右侧中间。
                                    top: "10%",
                                    orient: "vertical"      // 纵向布局。
                                },
                                radar: {
                                    radius: 80,
                                    center: ["50%", "50%"]
                                },
                                series: [                   // 两个饼图上下布局。
                                    {
                                        radius: [20, "50%"],
                                        center: ["50%", "50%"]
                                    }
                                ]
                            }
                        },
                        {
                            query: {
                                minWidth: 1,               // 当容器宽度大于 1 时。
                                maxWidth: 300               // 当容器宽度小于 300 时。
                            },
                            option: {
                                legend: {
                                    right: 10,              // legend 放置在右侧中间。
                                    top: "10%",
                                    orient: "vertical"      // 纵向布局。
                                },
                                radar: {
                                    radius: 60,
                                    center: ["50%", "60%"]
                                },
                                series: [                   // 两个饼图上下布局。
                                    {
                                        radius: [20, "50%"],
                                        center: ["50%", "50%"]
                                    }
                                ]
                            }
                        }
                    ]
                });
            }
            else {
                myChart.setOption({
                    baseOption: {
                        backgroundColor: "#fff",
                        title: {
                            text: "",
                            left: "center",
                            textStyle: {
                                color: "#eee"
                            }
                        },
                        tooltip: {
                            show: true,
                            showContent: false
                        },
                        legend: {
                            show: true,
                            x: "center",
                            data: ["编程语言"],
                            textStyle: {
                                color: "rgba(0, 162, 202, 0.8)",
                                fontSize: 12
                            },
                            itemGap: 20
                        },
                        radar: {
                            name: {
                                textStyle: {
                                    color: "rgba(0, 162, 202, 0.8)"
                                }
                            },
                            shape: "circle",
                            indicator: [
                                { name: "C#", max: 100 },
                                { name: "HTML", max: 100 },
                                { name: "CSS", max: 100 },
                                { name: "JS", max: 100 },
                                { name: "SQL", max: 100 },
                                { name: "Linq", max: 100 },
                                { name: "Objective-C", max: 100 }
                            ],
                            center: ["50%", "60%"],
                            radius: 90,
                            splitNumber: 5,
                            splitLine: {
                                lineStyle: {
                                    color: [
                                        "rgba(0, 162, 202, 0.2)",
                                        "rgba(0, 162, 202, 0.2)",
                                        "rgba(0, 162, 202, 0.2)",
                                        "rgba(0, 162, 202, 0.2)",
                                        "rgba(0, 162, 202, 0.2)",
                                        "rgba(0, 162, 202, 0.2)"
                                    ].reverse()
                                }
                            },
                            splitArea: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "rgba(0, 162, 202, 0.3)",
                                    width: 1,
                                    opacity: 0.5
                                }
                            }
                        },
                        series: [{
                            name: "编程语言",
                            type: "radar",
                            data: [
                                {
                                    value: [90, 90, 90, 85, 80, 90, 80],
                                    name: "熟练度"
                                }
                            ],
                            lineStyle: {
                                normal: {
                                    color: "rgba(0, 162, 202, 0.8)",
                                    width: 1,
                                    opacity: 0.5
                                }
                            },
                            symbol: "roundRect", // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                            symbolSize: 1,
                            itemStyle: {
                                normal: {
                                    color: "rgba(0, 162, 202, 0.8)"
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.3
                                }
                            }
                        }]
                    },
                    media: [
                        {
                            query: {
                                maxAspectRatio: 1           // 当长宽比小于1时。
                            },
                            option: {
                                legend: {                   // legend 放在底部中间。
                                    right: "center",
                                    bottom: 0,
                                    orient: "horizontal"    // legend 横向布局。
                                },
                                radar: {
                                    radius: 70,
                                    center: ["50%", "60%"]
                                },
                                series: [                   // 两个饼图左右布局。
                                    {
                                        radius: [20, "50%"],
                                        center: ["50%", "50%"]
                                    }
                                ]
                            }
                        },
                        {
                            query: {
                                minWidth: 300,               // 当容器宽度大于 300 时。
                                maxWidth: 500               // 当容器宽度小于 500 时。
                            },
                            option: {
                                legend: {
                                    right: 10,              // legend 放置在右侧中间。
                                    top: "10%",
                                    orient: "vertical"      // 纵向布局。
                                },
                                radar: {
                                    radius: 80,
                                    center: ["50%", "50%"]
                                },
                                series: [                   // 两个饼图上下布局。
                                    {
                                        radius: [20, "50%"],
                                        center: ["50%", "50%"]
                                    }
                                ]
                            }
                        },
                        {
                            query: {
                                minWidth: 1,               // 当容器宽度大于 1 时。
                                maxWidth: 300               // 当容器宽度小于 300 时。
                            },
                            option: {
                                legend: {
                                    right: 10,              // legend 放置在右侧中间。
                                    top: "10%",
                                    orient: "vertical"      // 纵向布局。
                                },
                                radar: {
                                    radius: 60,
                                    center: ["50%", "60%"]
                                },
                                series: [                   // 两个饼图上下布局。
                                    {
                                        radius: [20, "50%"],
                                        center: ["50%", "50%"]
                                    }
                                ]
                            }
                        }
                    ]
                });
            }
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
});

// #endregion