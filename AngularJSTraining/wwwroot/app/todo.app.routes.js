angular.module('ngTraining')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider.
                when('/', {
                    templateUrl: 'app/todo/todolist.html',
                    controller: 'ToDoListController'
                }).
                when('/new', {
                    templateUrl: 'app/todo/newtodo.html',
                    controller: 'AddToDoController'
                }).
                otherwise('/');
        }
    ]);