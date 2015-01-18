/**
 * Service to handle Employees.
 */

picb.Service.Employee = $.extend(true, {}, picb.Service, {
 init : function() {
 },
 // public
 hasEmployee : function() {
  return (typeof this.getUriParams().employeeId != 'undefined');
 },
 // private
 getUriParams : function() {
   return new picb.URI(window.location.toString()).search(true);
 },
 // public, expects the url to have a query with the employee id
 getId : function() {
  return this.getUriParams().employeeId;
 }
});