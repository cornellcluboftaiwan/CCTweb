/**
 * Created by aliu_000 on 8/11/2015.
 */
var app = angular.module('csm.controllers', []);

app.controller('join.ctrl', ['$scope', '$http', function ($scope, $http) {
    $scope.first = "";
    $scope.last = "";
    $scope.id = "";

    $scope.confirmation = false;

    $scope.add=function () {
        $http({
            method: 'POST',
            url: 'https://sheetsu.com/apis/v1.0/41c7d59d3855',
            headers: {
                'Content-Type': "application/json"
            },
            data: {
                "first": $scope.first,
                "last": $scope.last,
                "cid": $scope.id,
            }
        }).then(function success(resp){
            console.log(resp);
        }, function error(resp){
            console.log(resp);
        });

        //Clear the fields
        $scope.first= "";
        $scope.last = "";
        $scope.id = "";
        $scope.confirmation = true;
    }
}]);
