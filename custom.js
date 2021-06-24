$(document).ready(function(){
  $('.venobox').venobox(); 
});
$('.team-slide').slick({
  infinite: true,
  slidesToShow:4,
  slidesToScroll: 1,
  dots:false,
  arrows:false,
  autoplay:true,
  speed:1000,
  responsive: [
    {
      breakpoint:1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


















});

