/**
 *
 * Created by seanlivingston on 11/27/14.
 */

angular.module('StudentsApp', ['Students.filters', 'Students.services', 'Students.directives', 'Students.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/student-list', {templateUrl: 'students/student-list.html', controller: 'StudentListCtrl'});
        $routeProvider.when('/Student-detail/:id', {templateUrl: 'students/student-detail.html', controller: 'StudentDetailCtrl'});
        $routeProvider.when('/student-creation', {templateUrl: 'students/student-creation.html', controller: 'StudentCreationCtrl'});
        $routeProvider.otherwise({redirectTo: '/student-list'});
    }])
