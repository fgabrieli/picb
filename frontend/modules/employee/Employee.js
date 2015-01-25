/**
 * Employee of the month
 */

picb.Employee = {
 init : function() {
  var params = picb.URI(window.location.toString()).search(true);
  if (typeof params.employeeId != 'undefined') {
   nc.Event.fire(picb.evt.validateEmployee, {
    employeeId : params.employeeId
   });
  }

  nc.Event.bind(picb.evt.pictureUploaded, 'EmployeeHandler', function(data) {
   // create a new employee
   var employeeSrv = picb.Service.EmployeeSrv;
   employeeSrv.addEmployee({
    picture : data.picture
   });
  });

  nc.Event.bind(picb.evt.employeeAdded, 'EmployeeHandler', function(data) {
   window.location.replace('//picb/frontend?employeeId=' + data.id);
  });
 },
 ngController : function($scope) {
  nc.Event.bind(picb.evt.employeeUpdated, 'EmployeeHandler', function() {
   $scope.isVisible = picb.Service.EmployeeSrv.hasEmployee();
   if ($scope.isVisible) {
    var employeeSrv = picb.Service.EmployeeSrv;
    var employee = employeeSrv.getEmployee();
    $scope.picture = employee.picture;
   }

   $scope.$apply();
  });
 }
};

$(document).ready(function() {
 picb.Employee.init();
});