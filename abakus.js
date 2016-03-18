
window.onload = function() {
    
    var muutuja = document.getElementsByClassName("bead");
    	
    for (i = 0; i<muutuja.length; i++){
    	 muutuja[i].onclick = liigu;
    	 }
    function liigu (lykka){ 
    	if (lykka.target.style.cssFloat == "left"){
           	lykka.target.style.cssFloat = "right";
        } else {
    	  	 lykka.target.style.cssFloat = "left";	
    	    }
    }
}




