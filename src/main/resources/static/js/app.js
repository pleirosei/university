/**
 * Created by seanlivingston on 11/22/14.
 */

var app = angular.module('universityApp');

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("home");

    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl: URLS.index,
            controller: 'StudentsController'
        })
        .state('edit', {
            url:'/edit/:id',
            templateUrl: URLS.studentEdit,
            controller: 'StudentEdit'
        })
        .state('create', {
            url:'/create',
            templateUrl: URLS.studentCreate,
            controller: 'StudentCreate'
        });
});

app.controller('StudentsController', function($scope, $http) {

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
