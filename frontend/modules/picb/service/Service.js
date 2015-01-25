/**
 * Services base class.
 * 
 * @author Fernando Gabrieli
 */

picb.Service = {
 // interface method
 init : function() {

 },
 // private
 loadSrv : function() {
  var services = Object.keys(this);
  for ( var i = 0; i < services.length; i++) {
   var srvName = services[i];
   var initFn = picb.Service[srvName].init;
   if (typeof initFn != 'undefined') {
    initFn();
   }
  }
 }
};

$(document).ready(function() {
 picb.Service.loadSrv();
});