$(document).ready( function() {

    // When site loaded, load the Popupbox First
    new popup($("#popup_box"),$("#body")).load();
    
});

function popup(popup,body) {
    
    var thisPopup = this,            
        timer,
        counter = 5,
        countDown = $("#countDown").text(counter.toString());
    
    thisPopup.load = function() {            
        
        body.animate({
            "opacity": "0.3"  
        },250, function() {            
            popup.fadeIn("250");            
        });    
        
        body.off("click").on("click", function() {
            thisPopup.unload();
        }); 
        
        $('#popupBoxClose').off("click").on("click", function() {            
            thisPopup.unload();               
        });
        
        timer = setInterval(function() {
            counter--;
            if(counter < 0) {                   
                thisPopup.unload();
            } else {
                countDown.text(counter.toString());
            }
        }, 1000);            
    }       
    
    thisPopup.unload = function() {            
        
        clearInterval(timer); 

        popup.fadeOut("250", function(){
            body.animate({
                "opacity": "1"  
            },250);  
        });
    }
}     