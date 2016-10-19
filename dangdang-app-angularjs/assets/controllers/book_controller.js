app.controller('bookController',['$scope',function($scope){
  $scope.bookTypes = [
    {id:'children',name:'儿童',img:'http://img3x0.ddimg.cn/91/1/24013630-1_l_6.jpg',description:'儿童畅销榜'},
    {id:'history',name:'历史',img:'http://img3x0.ddimg.cn/91/1/24013630-1_l_6.jpg',description:'历史畅销榜'},
    {id:'art',name:'艺术',img:'http://img3x0.ddimg.cn/91/1/24013630-1_l_6.jpg',description:'艺术畅销榜'},
    {id:'anime',name:'动漫',img:'http://img3x0.ddimg.cn/91/1/24013630-1_l_6.jpg',description:'动漫畅销榜'},
    {id:'food',name:'烹饪',img:'http://img3x0.ddimg.cn/91/1/24013630-1_l_6.jpg',description:'烹饪畅销榜'},
    {id:'sport',name:'体育',img:'http://img3x0.ddimg.cn/91/1/24013630-1_l_6.jpg',description:'体育畅销榜'}
  ];
}])
