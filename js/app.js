$(function(){

  $(function(){
    $('.photoshop').rProgressbar({
    
        percentage: 65,
        width:'400px',
        height:'10px',
        fillBackgroundColor:'blue',
        borderRadius:'10px',


     
      });
      

    AOS.init();

    new VenoBox({
     selector: ".venobox",
     spinner:"wave",
     share:"true",
    });


    $('.serviceSlider').slick({
        slidesToShow: 3,
      });

});
$(function(){
    $('.portfolioCard').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:true,
        prevArrow: "#portfolio .arrow .leftArrow",
        nextArrow: "#portfolio .arrow .rightArrow",
      });

});

   $('.testimonial_slider').slick({
        slidesToShow: 2,
        arrows:true,
        prevArrow: " .arrow .leftArrow",
        nextArrow: " .arrow .rightArrow",
        dots:true,
      });
   let deleteBtn = $('#delete')

   deleteBtn.click(function(){

   


     Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

   });

    });

    //*Dark Mode
    
    function addDarkmodeWidget() {
      new Darkmode({
        label: '🌓',
      }).showWidget();
    }
    window.addEventListener('load', addDarkmodeWidget);