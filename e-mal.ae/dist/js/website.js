$(document).ready(function() {
  $(".se-pre-con").fadeOut(2000);
  if($(".center").length>=1){
	  $(".center").slick({
	    dots: false,
	    arrows:true,
	    infinite: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    centerMode: true,
	    centerPadding: '0px',
	    autoplay: true,
	    autoplaySpeed: 2000,
	    index: 1,
	    focusOnSelect:true,
	    responsive: [{
	       breakpoint: 768,
	       settings: {
	         arrows: false,
	         centerMode: true,
	         centerPadding: '0px',
	         slidesToShow: 3
	       }
	     }, {
	       breakpoint: 667,
	       settings: {
	         arrows: false,
	         centerMode: true,
	         centerPadding: '0px',
	         slidesToShow: 1
	       }
	     }]
	  });
 }
if($(".customer-logos").length>=1){
 $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        },{
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }]
    });
}
  
   
  function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-arrow-down fa-arrow-up');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

var intt_height = 0;
  $('.main-team .team-member').each(function(){
      if(intt_height < $(this).height()){
      intt_height = $(this).height()
      }
  });
  $('.main-team .team-member').css('min-height', intt_height +'px');

		// AJAX CONTACT FORM
		$('.formcontact').on('submit', function () {
			// $('.formcontact').find('.output_message_holder').addClass('d-block');

			$('.output_message').text('loading...');

			var form = $(this);
			$.ajax({
				url:
					'https://script.google.com/macros/s/AKfycbyqFpRS4jW72LxS7OtEG_Kx1y402ny9cWIW7pD3CA6a6yozuao/exec',
				data: form.serialize(),
				method: 'post',
				success: function (response) {
					// $('.formcontact').find('.output_message_holder').addClass('d-block');
					// $('.formcontact').find('.output_message').addClass('success');
					$('.output_message').text(
						'Thank You! A member of our team will be contacting you shortly. '
					);
				},
				error: function (err) {
					// $('.formcontact').find('.output_message_holder').addClass('d-block');
					// $('.formcontact').find('.output_message').addClass('error');
					$('.output_message').text('Error Sending email!');
				},
			});

			return false;
		});
	})