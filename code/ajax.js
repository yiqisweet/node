'use strict';

var   xhr= new XMLHttpRequest();
            xhr.open("post","url");
            var data = "name=mikan&address=street...";
            xhr.send(data);
            xhr.onreadystatechange = function(){
                     if(xhr.readyState === 4 ) {
                       if(xhr.status === 200){
                               alert("returned:"+ xhr.responseText);
                       }
                     }
            };
 
