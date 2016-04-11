

// #region controller

app.controller("ExperienceController", function ($scope) {
    $scope.Career = fdata.Career;
    $scope.Mymodal =
        {
            No: 0,
            Name: "Name",
            StartDate: new Date(),
            EndDate: new Date(),
            Desc: [
                ""
            ],
            Duty: [
                ""
            ]
        };
    $scope.Showmodal = function ($param) {

        $("#myModal").on("show.bs.modal", function (e) {
            $scope.Mymodal = $param;
        }).modal({
            backdrop: true,
            keyboard: true,
            show: true,
            remote: false
        });
    };
});

// #endregion