app.controller('mainController',['$scope','commonService',function($scope,c_service){
  c_service.getData('food',function(res){
    console.dir(res);
  })
}])
