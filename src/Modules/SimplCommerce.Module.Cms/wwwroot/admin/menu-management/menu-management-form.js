(function($){
    angular
        .module('simplAdmin.cms')
        .controller('MenuManagementCtrl',MenuManagementCtrl);
    function MenuManagementCtrl($scope) {
        var vm = this;
        $scope.status = {
            isCategoriesOpen:true
        };
    }
})(jQuery);