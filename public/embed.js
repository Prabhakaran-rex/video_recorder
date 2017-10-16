window.onload = function() {
   //Params
   var scriptPram = document.getElementById('load_widget');
   var id = scriptPram.getAttribute('data-page');



   //iFrame
   var iframe = document.createElement('iframe');
   iframe.style.display = "block";
   iframe.style.width = "100%";
   iframe.style.height = "678px";
   iframe.style.margin = "auto";
   // iframe.style["box-shadow"] = "1px 0px 16px 3px #888888";
   iframe.src = "http://localhost:3000/"
   $('body').append("<button type='button' class='btn btn-danger btn-sm' data-toggle='modal' data-target='#videoModal'>Record Video</button> <div id='videoModal' class='modal fade' role='dialog'> <div class='modal-dialog'> <div class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal'>&times;</button> <h4 class='modal-title'>Video Recorder</h4> </div> <div class='modal-body video-body'></div> <div class='modal-footer'> <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>")
   $('.video-body').append(iframe);
   $('.modal-content').css('width','740px');
};