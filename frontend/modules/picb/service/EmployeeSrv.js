/**
 * Service to handle Employees.
 * 
 * @author Fernando Gabrieli
 */

picb.Service.EmployeeSrv = $.extend(true, {}, picb.Service, {
 employee : {},
 
 // private
 init : function() {
  var t = picb.Service.EmployeeSrv;
  
  nc.Event.bind(picb.evt.validateEmployee, 'EmployeeSrvHandler', t.validate);
 },

 // public
 hasEmployee : function() {
  return (!nc.Util.Object.isEmpty(this.employee));
 },

 // public
 getEmployee : function() {
  return this.employee;
 },
 
 // public
 addEmployee : function(employee) {
  var reqData = {
    'data' : {
     'action' : 'add',
     'picture' : employee.picture
    } 
  };
  
  $.ajax({
   url : '/backend/service/entity/add',
   method : 'POST',
   data : reqData,
   dataType : 'json',
   success : function(employeeId) {
    nc.Event.fire(picb.evt.employeeAdded, {
     id : employeeId
    });
   },
   error : function(jqXHR, textStatus, errorThrown) {
    console.log('Error while trying to add the entity with data: ', employee, ', error thrown: ', errorThrown);
   }
  });
 },
 
 // private
 validate : function(data) {
  var t = picb.Service.EmployeeSrv;

  $.ajax({
   url : '/backend/service/entity/' + data.employeeId,
   method : 'GET',
   dataType : 'json',
   success : function(data) {
    var isValid = (data.length == 1);
    t.employee = (isValid ? data[0] : {});

    nc.Event.fire(picb.evt.employeeUpdated, {});
   },
   error : function(jqXHR, textStatus, errorThrown) {
    console.log('Error while trying to get the entity with id: ', id, ', error thrown: ', errorThrown);
   }
  });
 },
});