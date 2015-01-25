/**
 * Service to handle Employees.
 */

picb.Service.EmployeeSrv = $.extend(true, {}, picb.Service, {
 employee : {},
 
 init : function() {
  var t = picb.Service.EmployeeSrv;
  
  Event.bind(picb.evt.validateEmployee, 'EmployeeSrvHandler', function(data) {
   if (!t.hasEmployee()) {
    t.get(data.employeeId, function(employee) {
     t.employee = employee;

     Event.fire(picb.evt.employeeUpdated, t.employee);
    });
   } else {
    Event.fire(picb.evt.employeeUpdated, t.employee);
   }
  });
 },

 // public
 hasEmployee : function() {
  return (!nc.util.Object.isEmpty(this.employee));
 },

 // // private
// getUriParams : function() {
// },
// // public, expects the url to have a query with the employee id
// getId : function() {
//  return this.getUriParams().employeeId;
// },

 /**
  * public
  * 
  * Get an employee.
  * 
  * @param int employee id
  * @param function callback (mandatory)
  */
 get : function(id, callback) {
  $.ajax({
   url : '/backend/service/entity/' + id,
   method : 'GET',
   dataType : 'json',
   success : function(data) {
    // employees are unique
    callback(data[0]);
   },
   error : function(jqXHR, textStatus, errorThrown) {
    console.log('Error while trying to get the entity with id: ', id, ', error thrown: ', errorThrown);
   }
  });
 },

 /**
  * public
  */
 add : function(employee) {
  $.ajax({
   url : '/backend/service/entity/add',
   method : 'POST',
   data : {
    'action' : 'add',
    'data' : employee,
   },
   dataType : 'json',
   success : function(data) {
    console.log(data);
   },
   error : function(jqXHR, textStatus, errorThrown) {
    console.log('Error while trying to add the entity with data: ', employee, ', error thrown: ', errorThrown);
   }
  });
 }
});