/**
 * Propietary util lib
 */

var nc = (typeof nc == 'undefined' ? {} : nc);

nc.util = {};

nc.util.Object = {
  isEmpty : function(obj) {
   return (Object.keys(obj).length == 0);
  }
}