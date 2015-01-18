/**
 * Upload pictures.
 */

picb.Upload = {
 init : function() {
  $('#picture').fileupload({
   url : '/backend/libs/jquery-file-upload/9.9.2/php/index.php',
   maxChunkSize : 1 * 1024 * 1024,
   maxFileSize : (10 * 1024 * 1024 * 1024), // 10mb
   acceptFileTypes : /(\.|\/)(gif|jpe?g|png)$/i,
   autoUpload : true
  });
 },
 ngController : function($scope) {
  var employeeSrv = picb.Service.Employee;
  $scope.isVisible = (!employeeSrv.hasEmployee());
 }
};

$(document).ready(function() {
 picb.Upload.init();
});