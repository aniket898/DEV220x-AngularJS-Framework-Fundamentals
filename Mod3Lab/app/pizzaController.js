app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = {    title: 'Pizza Builder',
                            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'] ,
                            toppings: []
                       };
        $scope.addTopping = function (topping){
            $scope.model.search = "";
            $scope.model.toppings.push(topping);
            $scope.model.showSuccessAlert = true;    
        }

        $scope.model.successTextAlert = "Topping added !";
        $scope.model.errorTextAlert = "No such Toppings found !";
        $scope.model.showSuccessAlert = false;
        $scope.model.showErrorAlert = false;
        // switch flag
        $scope.switchBoolSuccess = function(value) {
            $scope.model.showSuccessAlert = !$scope.model.showSuccessAlert;
        };
        $scope.switchBoolError = function(value) {
            $scope.model.showErrorAlert = !$scope.model.showErrorAlert;
        };
        

    }
]);