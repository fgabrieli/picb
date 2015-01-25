/**
 * Employee of the month
 */

picb.Employee = {
 init : function() {
  var params = picb.URI(window.location.toString()).search(true);
  if (typeof params.employeeId != 'undefined') {
   Event.fire(picb.evt.validateEmployee, {
    employeeId : params.employeeId
   });
  }
 },
 ngController : function($scope) {
  Event.bind(picb.evt.employeeUpdated, 'EmployeeHandler', function(employee) {
    $scope.isVisible = picb.Service.EmployeeSrv.hasEmployee();
    
    $scope.picture = employee.picture;
    
    $scope.$apply();
  });
 }
};

$(document).ready(function() {
 picb.Employee.init();
});