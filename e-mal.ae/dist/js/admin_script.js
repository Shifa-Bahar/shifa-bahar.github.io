$(document).ready(function() {
//    $('title').html($('.box-title').text());  
    $('[data-toggle="tooltip"]').tooltip();
    //$('div.alert').fadeOut(10000);

    $(".filter-from-date").datepicker({
        endDate: '+0d',
        format: 'dd-mm-yyyy',
        autoclose: true,
        todayHighlight: true
    }).on('changeDate', function (selected) {
        var minDate = new Date(selected.date.valueOf());
        $('.filter-to-date').datepicker('setStartDate', minDate);
        this.form.submit();
    });
    
    $(".filter-to-date").datepicker({
        format: 'dd-mm-yyyy',
        endDate: '+0d',
        autoclose: true,
        todayHighlight: true
    }).on('changeDate', function (selected) {
        var minDate = new Date(selected.date.valueOf());
        $('.filter-from-date').datepicker('setEndDate', minDate);
        this.form.submit();
    });
    setTimeout(function(){
        if($(".filter-from-date").val()){
            var currDate = $(".filter-from-date").val();
            var currDate_arr = currDate.split('-');
            var new_date = currDate_arr[1]+'-'+currDate_arr[0]+'-'+currDate_arr[2];

            var minDate = new Date(new_date);
                $('.filter-to-date').datepicker('setStartDate', minDate);
        }   
        if($(".filter-to-date").val()){
            var currDate = $(".filter-to-date").val();
            var currDate_arr = currDate.split('-');
            var new_date = currDate_arr[1]+'-'+currDate_arr[0]+'-'+currDate_arr[2];

            var minDate = new Date(new_date);
            $('.filter-from-date').datepicker('setEndDate', minDate);
        } 
    },2000);

    $('.input-group-addon.from-date').on('click',function(){
        $('[name="from_date1"]').focus()
    });
    $('.input-group-addon.to-date').on('click',function(){
        $('[name="to_date1"]').focus()
    });
    $('.input-group-addon.from-date').on('click',function(){
        $('[name="from_date"]').focus()
    });
    $('.input-group-addon.to-date').on('click',function(){
        $('[name="to_date"]').focus()
    });

    function dateEligibility() {
        var date = new Date();
        date.setFullYear(date.getFullYear() - 18);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var date = date.getDate();
        if (date && month && year) {
            return date + '-' + month + '-' + '-' + year;
        } else {
            return "";
        }
    }
    
    $("#dob").datepicker({
        endDate: dateEligibility(),
        format: 'dd-mm-yyyy',
        autoclose: true,
        todayHighlight: true
    });

/************************* side menu active script **********************************/
/*var path = window.location.pathname.split("/").pop();
  console.log(path);
  if ( path == dashboard ) {
    
    $('.sidebar-menu li:first').addClass('active');
  }*/
//
//$('.sidebar-menu a').click(function(){  
//        sessionStorage.link = $(this).attr('href');       
//});
//
//if(sessionStorage.link){ 
// $('li.treeview').removeClass('active');  
// $('.sidebar-menu  a[href="'+sessionStorage.link+'"]').addClass('active');
// $('.sidebar-menu  a[href="'+sessionStorage.link+'"]').parents('.treeview').addClass('active');
//}
//
//$('.logout a, a.logo').click(function(e){
//  sessionStorage.link = ""; 
//  localStorage.activeTab = "";
//});
//$('#merchant a.action').click(function(e){
//  /*sessionStorage.link = ""; 
//  localStorage.activeTab = "";*/
//  $('.sidebar-menu li:nth-child(3)').addClass('active');
//});
//
//
//if (sessionStorage.link === "") {
//   $('.sidebar-menu li:first').addClass('active');
//}
/*$('a.logo').click(function(e){
    $('.sidebar-menu li.treeview').removeClass('active'); 
    $('.sidebar-menu li:first').addClass('active');
});*/


  $('ul.noif_list li').click(function () {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    //debugger;
      $('body,html').animate({
          scrollTop: 0
      }, 800);
      return false;
  });

}); 

/************************* Multilingual **********************************/

var multi = function(fieldname,label,language,orientation,target,inputType,fieldId, arg_required, placeholder){

  var required;

  if(!placeholder) {
    placeholder = null;
  }

  if((typeof(arg_required)).toUpperCase() === "UNDEFINED") {
      required = false;
  } else {
      required = arg_required;
  }
  
  var multitemplate = 
	  '<div class="form-group">'
      +' <label for="'+fieldId+'" class="col-sm-3 control-label '+((required)?"required":"")+'">'+label+' ('+ language +')</label>'
      +'  <div class="col-sm-8">';
      if(inputType=='textArea'){
          multitemplate += '<textarea rows = "5" class="form-control" style="direction:'+orientation+'" name= "'+fieldname+'" id="'+fieldId+'" placeholder="Enter '+label+'"></textarea>';
      }
      else if(inputType=='ckeditor'){
          multitemplate += '<textarea class ="ckeditor_field" name= "'+fieldname+'" id="'+fieldId+'" lang="'+language+'"  rows="10" cols="80" placeholder="Enter '+label+'">'
          +'</textarea>'
      }
      else if(inputType=='file'){
          multitemplate += '<input type="file" class="filUpload"  name = "'+fieldname+'" id="'+fieldId+'" placeholder="Enter '+label+'">'
      }
      else{
		 if(placeholder != '' && placeholder != null){
		    placeholder = placeholder.replace(/-/gi," ");
		    multitemplate += '<input type="text" class="form-control" style="direction:'+orientation+'" name = "'+fieldname+'" id="'+fieldId+'" placeholder="'+placeholder+'">'
		 }
		 else{ 	
              multitemplate += '<input type="text" class="form-control" style="direction:'+orientation+'" name = "'+fieldname+'" id="'+fieldId+'" placeholder="Enter '+label+'">'
		 }
     }
     +'</div>'
     +'</div>';                
   
    $('.'+target).append(multitemplate);
}
/************************* ends Multilingual **********************************/ 
