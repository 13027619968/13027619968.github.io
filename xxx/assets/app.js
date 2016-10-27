var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when('/',{
        templateUrl:'./assets/tpl/index.html',
        controller:''
    })
    .when('/about_me',{
        templateUrl:'./assets/tpl/about_me.html',
        controller:''
    })
    .when('/car',{
        templateUrl:'./assets/tpl/car.html',
        controller:''
    })
    .when('/money',{
        templateUrl:'./assets/tpl/money.html',
        controller:''
    })
    .when('/contact_me',{
        templateUrl:'./assets/tpl/contact_me.html',
        controller:''
    })
    .when('/other',{
        templateUrl:'./assets/tpl/other.html',
        controller:''
    })
    .otherwise({
        redirectTo:'/'
    })
}])