/**
 * Created with JetBrains WebStorm.
 * User: sylwia
 * Date: 8/26/13
 */
$(document).ready(function(){
	var nickValue;
	var nick = $('#nick');
    
    var passwordValue;
    var password = $('#password');
    
	var emailValue;
	var email = $('#email');
	var re = new RegExp("([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))");
	
	var reEmailValue;
    var reEmail = ('#re-email');
    
    var firstNameValue;
    var firstName = $('#first-name');
    var lastNameValue;
    var lastName = $('#last-name');
    
    var firstAdressValue;
    var firstAdress = $('#first-adress');
    var secondAdressValue;
    var secondAdress = $('#second-adress');
    var reAdress = new RegExp("[0-9A-Za-z,-_.() /]+");
    
    var cityValue;
    var city = $('#city');
    
    var provinceValue;
    var province = $('#province');
    
	$('#button').click(function(e) {
        var checkFirstAdressValue;
        var checkSecondAdressValue;
		e.preventDefault();
		
		nickValue = $('#nick').val().length;
		if (nickValue) {
			if (nickValue < 3) {
				//console.log(false);
			}
            else {
				$('#nick').addClass('nick-check-true');
			}
		}
        else {
			//console.log(false);
		}
        
        passwordValue = $('#password').val().length;
        if (passwordValue) {
            if (passwordValue < 5) {
                //console.log(false);
            }
            else {
                //console.log(true);
            }
        }
        else {
            //console.log(false);
        }
        
        emailValue = $('#email').val();
        if (emailValue) {
            reValue = re.test(emailValue);
            
            if (reValue) {
                //console.log(true);
            }
            else {
                //console.log(false);
            }
        }
        else {
            //console.log(false);
        }
        
        reEmailValue = $('#re-email').val();
        if (reEmailValue) {
            if (emailValue === reEmailValue) {
                //console.log(true);
            }
            else {
                //console.log(false);
            }
        }
        else {
            //console.log(false);
        }
        
        firstNameValue = $('#first-name').val().length;
        if (firstNameValue) {
            //console.log(true);
        } 
        else {
            //console.log(false);
        }
        
        lastNameValue = $('#last-name').val().length;
        if (lastNameValue) {
            //console.log(true);
        } 
        else {
            //console.log(false);
        }
        
        firstAdressValue = $('#first-adress').val();
        if (firstAdressValue) {
            checkFirstAdressValue = reAdress.test(firstAdressValue);
            
            if (checkFirstAdressValue) {
                //console.log(true);
            }
            else {
                //console.log(false);
            }
        }
        else {
            //console.log(false);
        }
        
        secondAdressValue = $('#second-adress').val();
        if (secondAdressValue) {
            checkSecondAdressValue = reAdress.test(secondAdressValue);
            
            if (checkSecondAdressValue) {
                //console.log(true);
            }
            else {
                //console.log(false);
            }
        }
        else {
            //console.log(false);
        }
        
        cityValue = $('#city').val();
        if (cityValue) {
            //console.log(true);
        }
        else {
            //console.log(false);
        }
        
        provinceValue = $('#province').val();
        if (provinceValue) {
            console.log(true);
        }
        else {
            console.log(false);
        }
	});
});