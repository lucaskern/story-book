import Granim from "granim";

document.addEventListener("DOMContentLoaded", function() {
   // your code here
   console.log(Granim);
   console.log("test");

   let granimInstance = new Granim({
     element: '#canvas-basic',
     direction: 'left-right',
     isPausedWhenNotInView: true,
     states : {
         "default-state": {
             gradients: [
                 ['#ff9966', '#ff5e62'],
                 ['#00F260', '#0575E6'],
                 ['#e1eec3', '#f05053']
             ]
         }
     }
   });
});