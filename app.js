//ANGULARJS MODULE 2 SOLUTION
(function () {
        'use strict';

        angular.module('ShoppingListCheckOff', [])
                .controller('ToBuyShoppingController', ToBuyShoppingController)
                .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
                .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


        ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
        AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

//Controllers
        function ToBuyShoppingController(ShoppingListCheckOffService) {
                var buyList = this;               
                buyList.items = ShoppingListCheckOffService.getBuyList();
                buyList.buyItem = function (itemIndex) {
                        var element = ShoppingListCheckOffService.getBuyListElementFromIndex(itemIndex);
                        ShoppingListCheckOffService.removeFromBuyList(itemIndex);
                        ShoppingListCheckOffService.addToBoughtList(element);
                };
        }

        function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
                var boughtList = this;
                boughtList.items = ShoppingListCheckOffService.getBoughtList();
        }



        //Service
        function ShoppingListCheckOffService() {
                var service = this;
                var buyList = [
                        {
                                name: 'Cookies',
                                quantity: '4'
                        },
                        {
                                name: 'Coca-cola',
                                quantity: '2'
                        },
                        {
                                name: 'Potatoes',
                                quantity: '10'
                        },
                        {
                                name: 'Chips',
                                quantity: '4'
                        }

                ];

                var boughtList = [];

                service.getBuyList = function () {
                        return buyList;
                };

                service.getBoughtList = function () {
                        return boughtList;
                };

                service.getBuyListElementFromIndex = function (index) {
                        var element = {
                                name: buyList[index].name,
                                quantity: buyList[index].quantity
                        };
                        return element;
                };

                service.addToBoughtList = function (item) {
                        boughtList.push(item);
                };

                service.removeFromBuyList = function (itemIndex) {
                        buyList.splice(itemIndex, 1);
                };

        }

})();
