$(document).ready(function() {
	jQuery.validator.addMethod("positiveNumberOnly",function(value,element){ 
    return this.optional(element) || /^[0-9]+$/.test(value);
    }, "Please enter numeric value only");

    jQuery.validator.addMethod("alphabetsonly", function(value, element) {
    return this.optional(element) || /^[A-Za-z ]+$/i.test(value);
    }, "Please enter alphabets only");
    
    jQuery.validator.addMethod("alphanumericspace", function(value, element) {    	
        return this.optional(element) || /^([0-9A-Za-z]+ )+[0-9A-Za-z]+$|^[0-9A-Za-z]+$/.test(value);
     }, "Alphanumeric & single space allowed only"); 

    // End date greater than start date
    $.validator.addMethod("endDateGreater",function(value,element){ 
        
         var start_date = Date.parse($('.filter-from-date').val());        
         var end_date   = Date.parse(value);         
        if((start_date && end_date) && (end_date <= start_date)) {
            return false;
        } else {
            return true;
        }
    },"End date should be greater than start date.");
//email validation
  jQuery.validator.addMethod("email_validation", function(value, element) {
      return this.optional( element ) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test( value );
    },'Please enter a valid email id.');


   jQuery.validator.addMethod("emailExt", function (value, element, param) {
            return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
        }, 'Please enter valid email id.');


  
//Merchant forgot password 
$("#user_forgot").validate({
  ignore: "",
    rules: {      
        email: {
            required:true,
            email: true,
            emailExt:true
        }
    },
    messages: {
      email: {
          required: "Please enter the email id.",
          email: "Please enter valid email id."
        }
    },
    submitHandler: function(form) {
        form.submit();
        $('button[type="submit"]').attr('disabled','disabled');
    }

});


//login
$("#userLogin").validate({
    // Specify the validation rules
  ignore: "",
    rules: {      
        email_or_mobile: {
            required:true,
            emailExt:true
        },
        password: {
            required:true,
        }
    },
    
    // Specify the validation error messages
    messages: {
      email_or_mobile: {
          required: "Please enter email id",
        },
        password: {
          required: "Please enter password",
        }
    },
    
    submitHandler: function(form) {
        form.submit();
        $('button[type="submit"]').attr('disabled','disabled');
    }

});

      jQuery.validator.addMethod("pwcheckchange",
        function(value, element, param) {
            if (this.optional(element)) {
                return true;
            } else if (!/[A-Z]/.test(value)) {
                return false;
            } else if (!/[a-z]/.test(value)) {
                return false;
            } else if (!/[0-9]/.test(value)) {
                return false;
            }

            return true;
        },
        "Password must contain at least one capital letter and one number.");
//reset password
$("#change_password").validate({
  ignore: "",
    rules: {      
        'password': {
                 required:true,
                 minlength: 8,
                 maxlength:64,
                 pwcheckchange:true
             },
             'confirm_password': {
                 required: true,
                 equalTo:"#cPwd"
             }    
    },
    messages: {
      'password': {
                 required: "Please enter new password"
             },
             'confirm_password': {
                 required: "Please enter confirm password",
                 equalTo: "Confirm password does not match. Try again"
                 
             }
    },
    submitHandler: function(form) {
        form.submit();
        $('button[type="submit"]').attr('disabled','disabled');
    }

});
/*$('.selectpicker').selectpicker().change(function(){
    $(this).valid()
});*/

});