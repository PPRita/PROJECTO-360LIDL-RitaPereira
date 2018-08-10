$(document).ready(()=>{

	// Menu Mobile

    $('.menuMobileICON').on('click', ()=>{
    	$('.menuMobile').slideToggle(300);
    });
    $('.menuMobile li').on('click',()=>{
		$('.menuMobile').hide();
	});

    // Nav Bar Active

  $("nav").find(".active").removeClass("active");
  $("#nav-item-1").addClass("active-link");
  
  // Click Nav Active Control
  $("nav a").on("click", function(){
    $("nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
  
  // Scroll Nav Active Control
 
    $( document ).on( "scroll", function( event ) {
  var position  = $(window).scrollTop();

   	if( 0 <position && position< 499){
		   $("nav").find(".active").removeClass("active");
		    $(".item1").addClass("active");
		  }
		  if(500< position && position<999){
		    $("nav").find(".active").removeClass("active");
		    $(".item2").addClass("active");
		  }
		  if(1001< position && position<1649){
		    $("nav").find(".active").removeClass("active");
		    $(".item3").addClass("active");
		  }
		  if(1650< position && position<2049){
		    $("nav").find(".active").removeClass("active");
		    $(".item4").addClass("active");
		  }
		  if(2050< position && position<2900){
		    $("nav").find(".active").removeClass("active");
		    $(".item5").addClass("active");
		  }
		  if(2901< position && position<99999){
		    $("nav").find(".active").removeClass("active");
		    
		  }
 
    });





    // Nav Bar Fixed

    $(document).scroll(function () {


	  var y = $(this).scrollTop();
        var x = $(".navigation").position();
        if (y > x.top) {
            $('nav').fadeIn().css({
            	"position":"fixed",
	  			"top":"0",
	  			"margin-top":"0",
	  			"background-color":"#00539b"
            });

            $('nav img').css({
            	"width":"44px",
            	"height":"44px",
            	"margin-top":"40%"
            });

            $('nav .regressoAulas').css({
            	"width":"143px",
            	"margin-top":"10%"
            });

            $('nav a p').css({
            	"margin-top":"10px"
            });

        } else {
            $('nav').css({
            	"position" : "absolute",
            	"top":"5%",
            	"background-color":"transparent"
            });

            $('nav img').css({
            	"width":"79.1px",
            	"height":"79.1px",
            	"margin-top":"40%"
            });

            $('nav .regressoAulas').css({
            	"width":"61px",
            	"margin-top":"35%"
            });

        }


        });

    // Carrousel

    $('.owl-carousel').owlCarousel({
    	items:4,
        //loop:true,
        center:true,
       
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsiveClass:true,
        	responsive: {
            250:{
              margin:300,
              items:1,
            },
            300:{
              margin:300,
              items:1,
            },
            350:{
              margin:300,
              items:1,
            },
        	
        		400:{
        			margin:200,
        			items:1,
        		},
        		450:{
              margin:200,
        			items:1,
        		},
        		500:{
              margin:200,
        			items:1,
        		},
        		550:{
        			margin:200,
              items:1,
        		},
        		600:{
        			margin: 150,
        			items:1,
        		},
        		650:{
              margin: 150,
        			items:1,
        		},
        		700:{
        			items:2.8,
        		},
        		800:{
        			items:3,
        		},
        		900:{
        			items:3.5,
        		},
        		1000:{
        			items:4,

        		},
                1200:{
                    items:4.6,
                }

        	}
    });


       // PopUp Product
        //Product1
      $("#product1").on('click', ()=>{
        var width = $(window).width();
         if (width >= 1080 ) {
            $('#productPopUp1').slideDown(200);
        }
    });
      $('.window').on('click',()=>{
         $('#productPopUp1').slideUp(200);
         $('.stock').hide();
    });

      //Product2
      $("#product2").on('click', ()=>{
        var width = $(window).width();
         if (width >= 1080 ) {
        $('#productPopUp2').slideDown(200);
        }
    });
      $('.window').on('click',()=>{
         $('#productPopUp2').slideUp(200);
         $('.stock').hide();
    });

      //Product3
      $("#product3").on('click', ()=>{
        var width = $(window).width();
         if (width >= 1080 ) {
        $('#productPopUp3').slideDown(200);
        }
    });
      $('.window').on('click',()=>{
         $('#productPopUp3').slideUp(200);
         $('.stock').hide();
    });

    //Product4
      $("#product4").on('click', ()=>{
        var width = $(window).width();
         if (width >= 1080 ) {
        $('#productPopUp4').slideDown(200);
        }
    });
      $('.window').on('click',()=>{
         $('#productPopUp4').slideUp(200);
         $('.stock').hide();
    });


    //Product5
      $("#product5").on('click', ()=>{
        var width = $(window).width();
         if (width >= 1080 ) {
        $('#productPopUp5').slideDown(200);
        }
    });
      $('.window').on('click',()=>{
         $('#productPopUp5').slideUp(200);
         $('.stock').hide();
    });


        //Select Form
      $( ".select" ).change(function() {
        $('.stock').show();
        });






});


