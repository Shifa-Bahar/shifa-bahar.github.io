$(document).ready(function() {
    jQuery.validator.addMethod("positiveNumberOnly",function(value,element){ 
    return this.optional(element) || /^[0-9]+$/.test(value);
    }, "Please enter numeric value only");

    jQuery.validator.addMethod("alphabetsonly", function(value, element) {
    return this.optional(element) || /^[A-Za-z ]+$/i.test(value);
    }, "Please enter alphabets only");
    
    jQuery.validator.addMethod("alphanumericspace", function(value, element) {      
        return this.optional(element) || /^([0-9A-Za-z]+ )+[0-9A-Za-z]+$|^[0-9A-Za-z]+$/.test(value);
     }, "Please enter only alphanumeric characters with single space");

    jQuery.validator.addMethod("passwordval", function(value, element){
return this.optional(element) ||  /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d$@$!%*#?&]{8,}$/.test(value);
}, "The password must contain at least one uppercase letter, one number and minimum 8 characters.");

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

jQuery.validator.addMethod("email_validation", function(value, element) {
    return this.optional( element ) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test( value );
  },'Please enter a valid email address.');

/*$(function () {
    $(".trigger").bind("click", function () {
        //Get reference of FileUpload.
        var fileUpload = $("#inputFile")[0];

        //Check whether the file is valid Image.
        var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.png|.jpeg)$");
        if (regex.test(fileUpload.value.toLowerCase())) {

            //Check whether HTML5 is supported.
            if (typeof (fileUpload.files) != "undefined") {
                //Initiate the FileReader object.
                var reader = new FileReader();

                //Read the contents of Image File.
                reader.readAsDataURL(fileUpload.files[0]);
                reader.onload = function (e) {

                    //Initiate the JavaScript Image object.
                    var image = new Image();

                    //Set the Base64 string return from FileReader as source.
                    image.src = e.target.result;
                    image.onload = function () {

                        //Determine the Height and Width.
                        var height = this.height;
                        var width = this.width;
                        if (height > 100 || width > 100) {
                            alert("Height and Width must not exceed 100px.");
                            return false;
                        }
                        alert("Uploaded image has valid Height and Width.");
                        return true;
                    };
                }
            } else {
                alert("This browser does not support HTML5.");
                return false;
            }
        } else {
            alert("Please select a valid Image file.");
            return false;
        }
    });
});*/

 $("#edit-profile").validate({
           ignore: "",
           onkeyup:false,
           rules: {
               'first_name': {
                   required: true,   
                   minlength:2,
                   maxlength:40,
                   alphanumericspace: true          
               },
               'last_name': {
                   required: true,   
                   minlength:1,
                   maxlength:40,
                   alphanumericspace: true            
               },
               'dob': {
                   required: true
               }
           },
           messages: {
               'first_name': {
                   required : "Please enter first name",
                   minlength: "First Name must not be less than 2 characters",
                   maxlength: "First Name must not be greater than 40 characters"
               },
               'last_name': {
                   required: "Please enter last name",
                   minlength: "Last Name must not be less than 1 character",
                   maxlength: "Last Name must not be greater than 40 characters"
               },
               'dob': {
                   required: "Please select date of birth"
               }
           },
          submitHandler: function(form) {
            form.submit();
              $('button[type="submit"]').attr('disabled','disabled');
        },
                errorPlacement: function(error, element) {

            if (element.attr("name") == "dob" ) {
                $(".date-error").text('Enter the Date of Birth');

            }else {
                element.closest(".control-group div.col-md-6 .controls").append(error);
            }

        }          
  });
 $('#change_password').validate({
         ignore: "",
         rules: {
             'old_password': {
                 required: true,
             },
             'new_password': {
                 required:true,
                 passwordval:true,
                 minlength: 8,
                 maxlength:64
             },
             'confirm_password': {
                 required: true,
                 equalTo:"#new_password"
             },             
         },
         messages: {
             'old_password': {
                 required: "Please enter old password",
             },
             'new_password': {
                 required: "Please enter new password",
                 minlength: "Password length must be atleast 8 characters"
             },
             'confirm_password': {
                 required: "Please enter confirm password",
                 equalTo: "Password doesn't match. Try again?",
                 
             },
         },
        submitHandler: function(form) {
             form.submit();
             $('button[type="submit"]').attr('disabled','disabled');
        }
         
     });
 $('#user_forgot').validate({
          ignore: [],
          onKeyup:false,
          rules:{
            'email':{
              required: true,
              email_validation:true
            }
          },
          message:{
            'email':{
              required:"Please enter the email"
            }
          },
          submitHandler: function(form) {
             form.submit();
             $('button[type="submit"]').attr('disabled','disabled');
        }

        });
});

