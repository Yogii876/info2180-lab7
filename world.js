$(document).ready(function(){
    var $search = $('#lookup');
    var $result = $('#result');
    
    var $all ='';
    
    $search.on("click", function() {
        var country = $('#country').val();
        if(document.getElementById('all').checked) {
            $all = $('#all').val();
        }
        else {
            $all='';
        }
        			
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'world.php?country=' + country + '&all=' + $all);
        xhr.onload = function() {
            if (xhr.status === 200) {
                $result.html(xhr.responseText) ;
            }
            else {
                alert(xhr.status);
            }
        };
    	xhr.send();
    			
    });
});
    
   
