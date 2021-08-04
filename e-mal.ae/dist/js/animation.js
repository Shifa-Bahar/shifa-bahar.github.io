$(document).ready(function() {
    $('.banner-content').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated fadeInUpBig', // Class to add to the elements when they are visible
      offset: 200    
    });
    $('.home-two p, .home-two h2, .aboutus-con h2, .aboutus-con p, .services-two h2, .services-two p,.services-three .summery h2, .faq-two h2, .faq-three .question-sec h2, .faq-three .question-sec p').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated fadeInUp', // Class to add to the elements when they are visible
      offset: 100    
    });
    $('.faq-two h2, .faq-three .question-sec h2, .faq-three .question-sec p, .aboutus-three h2, .aboutus-four h2, .aboutus-four p, .home-our-creative h2, .home-our-creative .team p').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated fadeInUp', // Class to add to the elements when they are visible
      offset: 100    
    });
    $('.servc-points.right, .contact-form, .aboutus-two .ourvision .vcontent').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated slideInRight', // Class to add to the elements when they are visible
      offset: 200    
    });
    $('.servc-points.left, .contact-address, .aboutus-two .ourvision .header-icons').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated slideInLeft', // Class to add to the elements when they are visible
      offset: 200    
    });
    $('.ourservice.summery h2, .ourservice.summery p, .home-four .team.summery h2, .home-four .team.summery p, .home-five .contact h2, .home-five .contact p').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated fadeInUp', // Class to add to the elements when they are visible
      offset: 200    
    });
    $('.home-our-creative .team-member').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated flipInY', // Class to add to the elements when they are visible
      offset: 100    
    });
    $('.service-tab-section ul.nav-tabs li').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated flipInX', // Class to add to the elements when they are visible
      offset: 100    
    });
    $('.signup .align-center, .login .loginsec, .forgotpass #user_forgot').addClass("animated swing").viewportChecker({
      classToAdd: 'post-visible ', // Class to add to the elements when they are visible
      offset: 100    
    });
    $('.aboutus-three .box2').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated jackInTheBox', // Class to add to the elements when they are visible
      offset: 100    
    });
    $('.aboutus-four .box3.secure').addClass("post-hidden").viewportChecker({
      classToAdd: 'post-visible animated jello', // Class to add to the elements when they are visible
      offset: 100    
    });
});