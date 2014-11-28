var app = angular.module('Students.controllers', []);

app.controller('StudentListCtrl', ['$scope', 'StudentsFactory', 'StudentFactory', '$location',
    function ($scope, StudentsFactory, StudentFactory, $location) {

        // callback for ng-click 'editStudent':
        $scope.editStudent = function (studentId) {
            $location.path('/student-detail/' + studentId);
        };

        // callback for ng-click 'deleteStudent':
        $scope.deleteStudent = function (studentId) {
            StudentFactory.delete({ id: studentId });
            $scope.students = StudentsFactory.query();
        };

        // callback for ng-click 'createStudent'
        $scope.createNewStudent = function () {
            $location.path('/student-detail/');
        };

        $scope.students = StudentsFactory.query();
    }
]);



app.controller('StudentDetailCtrl', ['$scope', '$routeParams', 'StudentFactory', '$location',
    function ($scope, $routeParams, StudentFactory, $location) {

        //callback for ng-click 'updateStudent':
        $scope.updateStudent = function () {
            StudentFactory.update($scope.student);
            $location.path('/student-list/');
        };

        //callback for ng-click 'cancel':
        $scope.cancel = function () {
            $location.path('/student-list/');
        };

        $scope.student = StudentFactory.show({id: $routeParams.id});
    }
]);



app.controller('StudentCreationCtrl', ['$scope', 'StudentFactory', '$location',
    function ($scope, StudentsFactory, $location) {

        //callback for ng-click 'createStudent':
        $scope.createNewStudent = function () {
            StudentsFactory.create($scope.student);
            $location.path('/student-list/');
        }
    }
]);