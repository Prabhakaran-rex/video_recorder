window.onload = function() {
   //Params
   var scriptPram = document.getElementById('load_widget');
   var id = scriptPram.getAttribute('data-page');

   //iFrame
   var iframe = document.createElement('iframe');
   iframe.style.display = "block";
   iframe.style.width = "690px";
   iframe.style.height = "400px";
   iframe.style.margin = "auto";
   iframe.style["box-shadow"] = "1px 0px 16px 3px #888888";
   iframe.src = "http://localhost:3000/"
   document.body.appendChild(iframe);
};