/**
 * Service to handle Employees.
 */

picb.Service.EmployeeSrv = $.extend(true, {}, picb.Service, {
 employee : {},
 init : function() {
 },
// // public
// hasEmployee : function() {
//  return (typeof this.getUriParams().employeeId != 'undefined');
// },
// // private
// getUriParams : function() {
//  return new picb.URI(window.location.toString()).search(true);
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
  var sendReq = function(cb) {
   $.ajax({
    url : '/backend/service/entity/' + id,
    method : 'GET',
    dataType : 'json',
    success : function(data) {
     // employees are unique
     cb(data[0]);
    },
    error : function(jqXHR, textStatus, errorThrown) {
     console.log('Error while trying to get the entity with id: ', id, ', error thrown: ', errorThrown);
    }
   });
  }

  var hasCallback = (typeof callback != 'undefined');
  if (hasCallback) {
   if (nc.util.Object.isEmpty(this.employee)) {
    sendReq(callback);
   } else {
    callback(employee);
   }
  }
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