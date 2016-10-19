var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'./tpl/index.html',
    controller:''
  })
  .when('/blog',{
    templateUrl:'./tpl/blog.html',
    controller:''
  })
  .when('/book',{
    templateUrl:'./tpl/book.html',
    controller:''
  })
  .otherwise({
    templateUrl:'./tpl/about_me.html',
    controller:''
  })
}])
