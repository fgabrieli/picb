/**
 * Upload module.
 */

picb.Upload.Browser = $.extend(true, {}, picb.Upload, {
 // private
 fileUploadOpt : {
  url : '/backend/libs/jquery-file-upload/9.9.2/php/index.php',
  maxChunkSize : 1 * 1024 * 1024,
  maxFileSize : (10 * 1024 * 1024 * 1024), // 10mb
  acceptFileTypes : /(\.|\/)(gif|jpe?g|png)$/i,
  add : function(e, data) {
   data.submit().success(function (data, textStatus, jqXHR) {
    nc.Event.fire(picb.evt.pictureUploaded, {
     media : 'browser',
     picture : JSON.parse(data).files[0].url
    })
   }).error(function (jqXHR, textStatus, errorThrown) {
    console.log('Failed to upload file, error thrown: ', errorThrown);
   }).complete(function(data, textStatus, jqXHR) {
    // complete
   });
  },
  dropZone : {}
 },

 // private
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

 // private
 initFileUpload : function() {
  var t = picb.Upload.Browser;
  t.fileUploadOpt.dropZone = $('#dropZone');
  $('#picture').fileupload(t.fileUploadOpt);
 },

 ngController : function($scope) {
  $scope.isVisible = true;

  nc.Event.bind(picb.evt.employeeUpdated, 'EmployeeHandler', function() {
   $scope.isVisible = !(picb.Service.EmployeeSrv.hasEmployee());
   $scope.$apply();
  });

  $scope.$watch('isVisible', function(isVisible) {
   var t = picb.Upload.Browser;

   if ((typeof isVisible != 'undefined') && (isVisible)) {
    if (!t.hasFileUpload()) {
     t.initFileUpload();
    }
   }
  });
 }
});

{
 $(document).ready(function() {
  // Initialization if needed
 });
}
