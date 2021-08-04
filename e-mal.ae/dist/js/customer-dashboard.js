$(window).on("resize", function(event){
  var winWidth = $(window).width();
  var winHeight = $(window).height();
    if (winWidth <= 1024) {
      $('*[title]').tooltip('disable');
    }
});
$(document).ready(function() {
  var winWidth = $(window).width();
  var winHeight = $(window).height();
    if (winWidth <= 1024) {
      $('*[title]').tooltip('disable');
      
    }
  $('[data-toggle="tooltip"]').tooltip(); 
  $(".se-pre-con").fadeOut(2000);  
}); 

function setActive (){
  $(".tab_content").hide();
  $('.side-body .tab_container').each(function(){
    $(this).children('.tab_content:first').show()
  });
  $('.side-body ul.tabs li').removeClass('active')
  $('.side-body ul.tabs li:first-child').addClass("active");
  if($("ul.tabs li").length > 1){
    if(sessionStorage.activeTab){
      $("ul.tabs li").removeClass("active");
      $('[rel="'+sessionStorage.activeTab+'"]').addClass("active");
      $(".tab_content").hide();
      $("#"+sessionStorage.activeTab).fadeIn();
    }
  }
}


$(document).ready(function() {
  setActive();
  $('#filter_date').datepicker();

	$('.side-menu-container ul li a').click(function(){
		setActive()
	})
  /* if in tab mode */
  $("ul.tabs li").click(function() {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel"); 
    sessionStorage.activeTab = activeTab ;
    $("#"+activeTab).fadeIn();		
	
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
  
  });

	 /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
    
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel"); 
    $("#"+d_activeTab).fadeIn();
  
    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");
  
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
  });
  $('.side-menu-container ul li a').click(function(e){
    localStorage.clear();
    sessionStorage.clear();
  });	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */

	$('.side-body ul.tabs li:last-child').addClass("tab_last");

  $(function () {
    $('.side-menu .navbar-toggle').click(function () {
        $('.navbar-nav').toggleClass('slide-in');
        $('.side-body').toggleClass('body-slide-in');

        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').toggleClass('slide-in');
        
    });
  });
  /* file upload */
  $(".trigger").click(function(){
     $("#inputFile").trigger("click");
  });
  $('.idproof input[type="file"]').change(function() {
    var inputSource = $(this).parent().find('input[type="file"]')[0].files[0].name;
        $(this).parent().find('.idproof-fake').text(inputSource);
        $(this).parent().find('.idproof-fake').attr('title',inputSource);
      });
  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_upload_preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
  }

  $("#inputFile").change(function () {
      readURL(this);
  });

});

$(window).on("load",function(){
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var intt_outheight = 0;
  if (winWidth > 420) {
  $('.accout-del-sec .col-xs-6').each(function(){
      if(intt_outheight < $(this).height()){
      intt_outheight = $(this).height();
      }
  });
  $('.accout-del-sec .col-xs-6 .card_info').css('min-height', intt_outheight +'px');
}
});
$(document).ready(function(){
    $(".upld").each(function(){
      $(this).on("click", function(){
        //alert();
       $(this).parent().find('input[type="file"]').trigger("click");
     });
    });

    dt = new Date();
    dt.setFullYear(new Date().getFullYear()-18);
      jQuery("#startdate").datepicker({
        viewMode: "years",
        endDate: dt,
        format: 'dd-mm-yyyy',
        autoclose: true,
        todayHighlight: true,
        setDate: new Date()      
        }).on('changeDate', function (selected) {
            $(".date-error").empty();    
        });
    /* script for changing the arabic layout */
    $('.ar').on('click',function(){
      $('body').addClass('arabic');
      $('body').attr('dir','rtl');
      $('html').attr('lang','ar');
    });
    $('.en').on('click',function(){
      $('body').removeClass('arabic');
      $('body').attr('dir','ltr');
      $('html').attr('lang','en');
    });
    $(function() {
      $( 'ul.select-payment-method li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
    });

    $('.input-group-addon.from-date').on('click',function(){
        $('[name="from_date"]').focus()
    });
    $('.input-group-addon.to-date').on('click',function(){
        $('[name="to_date"]').focus()
    });
});
$(document).ready(function(){
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

});

//Custom ScrollBar for popup
$(document).ready(function(){
    $('ul.noif_list li').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

  /*$('.bell-notification a').click(function () {
    $('.side-menu-container ul li').removeClass('active');
  });

  $('.side-menu-container ul li').click(function(){  
    sessionStorage.link = $(this).attr('href');       
  });

  if(sessionStorage.link){ 
   $('.side-menu-container ul li').removeClass('active');  
   $('.side-menu-container ul li a[href="'+sessionStorage.link+'"]').parent().addClass('active');
  }

  $('a.navbar-brand,.logout a').click(function(e){
    sessionStorage.link = ""; 
    localStorage.activeTab = "";
  });
  if (sessionStorage.link === "") {
    $('.side-menu-container ul li:first').addClass('active');
  }

  $('#mytransactions .payment-tab-sec ul li a').click(function(){
      $('.side-menu-container ul li').removeClass('active');  
      $('.side-menu-container ul li.my_transactions').addClass('active');      
  });*/

});

(function($) {

$.fn.numeric = function(config, callback)
{
  if(typeof config === 'boolean')
  {
    config = { decimal: config };
  }
  config = config || {};
  // if config.negative undefined, set to true (default is to allow negative numbers)
  if(typeof config.negative == "undefined") { config.negative = true; }
  // set decimal point
  var decimal = (config.decimal === false) ? "" : config.decimal || ".";
  // allow negatives
  var negative = (config.negative === true) ? true : false;
  // callback function
  callback = (typeof(callback) == "function" ? callback : function() {});
  // scale
  var scale;
  if ((typeof config.scale) == "number")
  {
    if (config.scale == 0)
    {
      decimal = false;
      scale = -1;
    }
    else
      scale = config.scale;
  }
  else
    scale = -1;
  // precision
  var precision;
  if ((typeof config.precision) == "number")
  {
    precision = config.precision;
  }
  else
    precision = 0;
  // set data and methods
  return this.data("numeric.decimal", decimal).data("numeric.negative", negative).data("numeric.callback", callback).data("numeric.scale", scale).data("numeric.precision", precision).keypress($.fn.numeric.keypress).keyup($.fn.numeric.keyup).blur($.fn.numeric.blur);
};

$.fn.numeric.keypress = function(e)
{
  // get decimal character and determine if negatives are allowed
  var decimal = $.data(this, "numeric.decimal");
  var negative = $.data(this, "numeric.negative");
  // get the key that was pressed
  var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
  // allow enter/return key (only when in an input box)
  if(key == 13 && this.nodeName.toLowerCase() == "input")
  {
    return true;
  }
  else if(key == 13)
  {
    return false;
  }
  var allow = false;
  // allow Ctrl+A
  if((e.ctrlKey && key == 97 /* firefox */) || (e.ctrlKey && key == 65) /* opera */) { return true; }
  // allow Ctrl+X (cut)
  if((e.ctrlKey && key == 120 /* firefox */) || (e.ctrlKey && key == 88) /* opera */) { return true; }
  // allow Ctrl+C (copy)
  if((e.ctrlKey && key == 99 /* firefox */) || (e.ctrlKey && key == 67) /* opera */) { return true; }
  // allow Ctrl+Z (undo)
  if((e.ctrlKey && key == 122 /* firefox */) || (e.ctrlKey && key == 90) /* opera */) { return true; }
  // allow or deny Ctrl+V (paste), Shift+Ins
  if((e.ctrlKey && key == 118 /* firefox */) || (e.ctrlKey && key == 86) /* opera */ ||
    (e.shiftKey && key == 45)) { return true; }
  // if a number was not pressed
  if(key < 48 || key > 57)
  {
    var value = $(this).val();
    /* '-' only allowed at start and if negative numbers allowed */
    if(value.indexOf("-") !== 0 && negative && key == 45 && (value.length === 0 || parseInt($.fn.getSelectionStart(this), 10) === 0)) { return true; }
    /* only one decimal separator allowed */
    if(decimal && key == decimal.charCodeAt(0) && value.indexOf(decimal) != -1)
    {
      allow = false;
    }
    // check for other keys that have special purposes
    if(
      key != 8 /* backspace */ &&
      key != 9 /* tab */ &&
      key != 13 /* enter */ &&
      key != 35 /* end */ &&
      key != 36 /* home */ &&
      key != 37 /* left */ &&
      key != 39 /* right */ &&
      key != 46 /* del */
    )
    {
      allow = false;
    }
    else
    {
      // for detecting special keys (listed above)
      // IE does not support 'charCode' and ignores them in keypress anyway
      if(typeof e.charCode != "undefined")
      {
        // special keys have 'keyCode' and 'which' the same (e.g. backspace)
        if(e.keyCode == e.which && e.which !== 0)
        {
          allow = true;
          // . and delete share the same code, don't allow . (will be set to true later if it is the decimal point)
          if(e.which == 46) { allow = false; }
        }
        // or keyCode != 0 and 'charCode'/'which' = 0
        else if(e.keyCode !== 0 && e.charCode === 0 && e.which === 0)
        {
          allow = true;
        }
      }
    }
    // if key pressed is the decimal and it is not already in the field
    if(decimal && key == decimal.charCodeAt(0))
    {
      if(value.indexOf(decimal) == -1)
      {
        allow = true;
      }
      else
      {
        allow = false;
      }
    }
  }
  //if a number key was pressed.
  else
  {
    // If scale >= 0, make sure there's only <scale> characters
    // after the decimal point.
    if($.data(this, "numeric.scale") >= 0)
    {
      var decimalPosition = this.value.indexOf(decimal);
      //If there is a decimal.
      if (decimalPosition >= 0)
      {
        decimalsQuantity = this.value.length - decimalPosition - 1;
        //If the cursor is after the decimal.
        if ($.fn.getSelectionStart(this) > decimalPosition)
          allow = decimalsQuantity < $.data(this, "numeric.scale");
        else
        {
          integersQuantity = (this.value.length - 1) - decimalsQuantity;
          //If precision > 0, integers and decimals quantity should not be greater than precision
          if (integersQuantity < ($.data(this, "numeric.precision") - $.data(this, "numeric.scale")))
            allow = true;
          else
            allow = false;
        }
      }
      //If there is no decimal
      else {
        if ($.data(this, "numeric.precision") > 0)
          allow = this.value.replace($.data(this, "numeric.decimal"), "").length < $.data(this, "numeric.precision") - $.data(this, "numeric.scale");
        else
          allow = true;
      }
    }
    else
      // If precision > 0, make sure there's not more digits than precision
      if ($.data(this, "numeric.precision") > 0)
        allow = this.value.replace($.data(this, "numeric.decimal"), "").length < $.data(this, "numeric.precision");
      else
        allow = true;
    }
  return allow;
};

$.fn.numeric.keyup = function(e)
{
  var val = $(this).val();
  if(val && val.length > 0)
  {
    // get carat (cursor) position
    var carat = $.fn.getSelectionStart(this);
    // get decimal character and determine if negatives are allowed
    var decimal = $.data(this, "numeric.decimal");
    var negative = $.data(this, "numeric.negative");
    
    // prepend a 0 if necessary
    if(decimal !== "" && decimal !== null)
    {
      // find decimal point
      var dot = val.indexOf(decimal);
      // if dot at start, add 0 before
      if(dot === 0)
      {
        this.value = "0" + val;
      }
      // if dot at position 1, check if there is a - symbol before it
      if(dot == 1 && val.charAt(0) == "-")
      {
        this.value = "-0" + val.substring(1);
      }
      val = this.value;
    }
    
    // if pasted in, only allow the following characters
    var validChars = [0,1,2,3,4,5,6,7,8,9,'-',decimal];
    // get length of the value (to loop through)
    var length = val.length;
    // loop backwards (to prevent going out of bounds)
    for(var i = length - 1; i >= 0; i--)
    {
      var ch = val.charAt(i);
      // remove '-' if it is in the wrong place
      if(i !== 0 && ch == "-")
      {
        val = val.substring(0, i) + val.substring(i + 1);
      }
      // remove character if it is at the start, a '-' and negatives aren't allowed
      else if(i === 0 && !negative && ch == "-")
      {
        val = val.substring(1);
      }
      var validChar = false;
      // loop through validChars
      for(var j = 0; j < validChars.length; j++)
      {
        // if it is valid, break out the loop
        if(ch == validChars[j])
        {
          validChar = true;
          break;
        }
      }
      // if not a valid character, or a space, remove
      if(!validChar || ch == " ")
      {
        val = val.substring(0, i) + val.substring(i + 1);
      }
    }
    // remove extra decimal characters
    var firstDecimal = val.indexOf(decimal);
    if(firstDecimal > 0)
    {
      for(var k = length - 1; k > firstDecimal; k--)
      {
        var chch = val.charAt(k);
        // remove decimal character
        if(chch == decimal)
        {
          val = val.substring(0, k) + val.substring(k + 1);
        }
      }
      // remove numbers after the decimal so that scale matches.
      if ($.data(this, "numeric.scale") >= 0)
        val = val.substring(0, firstDecimal+$.data(this, "numeric.scale") + 1);
      // remove numbers so that precision matches.
      if ($.data(this, "numeric.precision") > 0)
        val = val.substring(0, $.data(this, "numeric.precision") + 1);
    }
    // limite the integers quantity, necessary when user delete decimal separator
    else if ($.data(this, "numeric.precision") > 0)
      val = val.substring(0, ($.data(this, "numeric.precision") - $.data(this, "numeric.scale")));
    
    // set the value and prevent the cursor moving to the end
    this.value = val;
    $.fn.setSelection(this, carat);
  }
};

$.fn.numeric.blur = function()
{
  var decimal = $.data(this, "numeric.decimal");
  var callback = $.data(this, "numeric.callback");
  var val = this.value;
  if(val !== "")
  {
    var re = new RegExp("^\\d+$|^\\d*" + decimal + "\\d+$");
    if(!re.exec(val))
    {
      callback.apply(this);
    }
  }
};

$.fn.removeNumeric = function()
{
  return this.data("numeric.decimal", null).data("numeric.negative", null).data("numeric.callback", null).unbind("keypress", $.fn.numeric.keypress).unbind("blur", $.fn.numeric.blur);
};

// Based on code from http://javascript.nwbox.com/cursor_position/ (Diego Perini <dperini@nwbox.com>)
$.fn.getSelectionStart = function(o)
{
  if (o.createTextRange)
  {
    var r = document.selection.createRange().duplicate();
    r.moveEnd('character', o.value.length);
    if (r.text === '') { return o.value.length; }
    return o.value.lastIndexOf(r.text);
  } else { return o.selectionStart; }
};

// set the selection, o is the object (input), p is the position ([start, end] or just start)
$.fn.setSelection = function(o, p)
{
  // if p is number, start and end are the same
  if(typeof p == "number") { p = [p, p]; }
  // only set if p is an array of length 2
  if(p && p.constructor == Array && p.length == 2)
  {
    if (o.createTextRange)
    {
      var r = o.createTextRange();
      r.collapse(true);
      r.moveStart('character', p[0]);
      r.moveEnd('character', p[1]);
      r.select();
    }
    else if(o.setSelectionRange)
    {
      o.focus();
      o.setSelectionRange(p[0], p[1]);
    }
  }
};

})(jQuery);

