/**
 * Upload module.
 */

picb.Upload = {
 fileUploadOpt : {
  url : '/backend/libs/jquery-file-upload/9.9.2/php/index.php',
  maxChunkSize : 1 * 1024 * 1024,
  maxFileSize : (10 * 1024 * 1024 * 1024), // 10mb
  acceptFileTypes : /(\.|\/)(gif|jpe?g|png)$/i,
  add : function(e, data) {
   data.submit().success(function(result, textStatus, jqXHR) {
    console.log(result);
   }).error(function(jqXHR, textStatus, errorThrown) {
    

   }).complete(function(result, textStatus, jqXHR) {

   });
  },
  dropZone : {}
 },
 init : function() {
  // Module initialization
 },
 hasFileUpload : function() {
  var t = picb.Upload;

  var isLoaded = false;
  try {
   isLoaded = ($('#picture').fileupload('option', 'url') == t.fileUploadOpt.url);
  } catch (e) {
   // leave isLoaded as false
  }

  return isLoaded;
 },
 initFileUpload : function() {
  var t = picb.Upload;
  t.fileUploadOpt.dropZone = $('#dropZone');
  $('#picture').fileupload(t.fileUploadOpt);
 },
 ngController : function($scope) {
  var employeeSrv = picb.Service.EmployeeSrv;
  $scope.isVisible = (!employeeSrv.hasEmployee());

  $scope.$watch('isVisible', function(isVisible) {
   var t = picb.Upload;

   if ((typeof isVisible != 'undefined') && (isVisible)) {
    if (!t.hasFileUpload()) {
     t.initFileUpload();
    }
   }
  });
 }
};

{
 $(document).ready(function() {
  picb.Upload.init();
 });
}
