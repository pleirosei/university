/**
 * Created by seanlivingston on 11/22/14.
 */


var app = angular.module('universityApp', ["ui.router", "ngResource"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("home");

    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl: URLS.partialsList,
            controller: 'StudentController'
        })
        .state('edit', {
            url:'/edit/:id',
            templateUrl: URLS.partialsEdit,
            contorller: 'StudentEditController'
        })
        .state('create', {
            url:'/create',
            templateURL: URLS.partialsCreate,
            controller: 'StudentController'
        });
});

app.factory("Student", function ($resource) {
    return $resource(URLS.students, {id: "@id"}, {
        update: {
            method: 'PUT'
        }
    });
});

app.controller("StudentController", function ($scope, Student, $state) {
    function init() {
        $scope.getStudents();
    }

    $scope.getStudents = function () {
        $scope.students = Student.query();
    };

    $scope.deleteStudent = function (student) {
        return student.$delete({}, function () {
            $scope.students.splice($scope.students.indexOf(student), 1);
        });
    };

    $scope.createStudent = function () {
        var student = new Student($scope.student);
        student.$save({}, function () {
            $state.transitionTo("home");
        });
    };

    init();
});

app.controller("StudentEditController", function ($scope, Student, $state, $stateParams) {
    function init() {
        $scope.student = Student.get({id: $stateParams.id})
    }

    $scope.updateStudent = function () {
        var student = new Student($scope.student);
        student.$update().then(function () {
            $state.transitionTo("home");
        });
    }

    init();

});