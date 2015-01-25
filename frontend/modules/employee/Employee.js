/**
 * Employee of the month
 */

picb.Employee = {
 init : function() {
  // initialize
 },
 ngController : function($scope) {
  var employeeSrv = picb.Service.EmployeeSrv;
  $scope.isVisible = (employeeSrv.hasEmployee());
 }
};

$(document).ready(function() {
 picb.Upload.init();
});