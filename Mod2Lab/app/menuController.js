app.controller('menuController', [
    '$scope',
    function($scope){
        $scope.model = {title: 'Our Menu'};
        $scope.model.mainDish = {name:'',price:''}
        $scope.changeMainDish = function (itemname,itemval) {
            $scope.model.mainDish.name = itemname;
            $scope.model.mainDish.price = itemval;
        }

        $scope.$watch('model.mainDish.name', function (newValue, oldValue) {
            if (newValue === 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza!');
            }
        });
    

    }
]);