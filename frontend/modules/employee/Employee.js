/**
 * Employee of the month
 */

picb.Employee = {
 init : function() {
  // initialize
 },
 ngController : function($scope) {
  var employeeSrv = picb.Service.Employee;
  $scope.isVisible = (employeeSrv.hasEmployee());
 }
};

$(document).ready(function() {
 picb.Upload.init();
});