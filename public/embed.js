window.onload = function() {
   //Params
   var scriptPram = document.getElementById('load_widget');
   var id = scriptPram.getAttribute('data-page');

   //iFrame
   var iframe = document.createElement('iframe');
   iframe.style.display = "block";
   iframe.style.width = "100%";
   iframe.style.height = "400px";
   iframe.src = "http://localhost:3000/"
   document.body.appendChild(iframe);
};