/**
 * Created by seanlivingston on 11/22/14.
 */

var studentsModule = angular.module('universityApp');

studentsModule.controller('studentsController', function($scope, $http) {

    var urlBase="";
    function findAllStudents () {
        //get all students and display them
        $http.get(urlBase + '/students/search/findById').
            success(function(data) {
                if (data._embedded != undefined) {
                    $scope.students = data._embedded.students;
                } else {
                    $scope.students = [];
                }
            });
    }

    findAllStudents();
});
