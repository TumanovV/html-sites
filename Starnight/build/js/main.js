$(function(){

    var coloringDots = function(index){
      $('.slider')
      .find('.dots__item')
      .eq(index)
      .addClass('dots__item_active')
      .siblings()
      .removeClass('dots__item_active')
    }

    var moveSlide = function(container, slideNum){

      var item = container.find('.slider__item'),
          activeSlide = item.filter('.active'),
          reqItem = item.eq(slideNum),
          reqIndex = reqItem.index(),
          list = container.find('.slider__list'),
          duration = 500;

          if(reqItem.length){
              list.animate({
                'left': -reqIndex * 100 + '%'
            },duration, function(){
              activeSlide.removeClass('active');
              reqItem.addClass('active');
              coloringDots();
            })
            
          }    
    }

    $('body').on('click', '.dots__item', function(){
        var $this = $(this),
            container = $this.closest('.slider'),
            index = $this.index();
            moveSlide(container, index);
            coloringDots(index);
    })

});


//Flat section
$(function(){
    function moveSlide(container, slideNum){
      
              var item = container.find('.flat__item');
              var activeSlide = item.filter('.active');
              var reqItem = item.eq(slideNum);
              var reqIndex = reqItem.index();
              var list = container.find('.flat__list');
              var duration = 500;

              if(reqItem.length){
                  list.animate({
                  'left' : -reqIndex * 100 + '%'
                }, duration, function(){
                  activeSlide.removeClass('active');
                  reqItem.addClass('active')
                })
              }
    }

    $('.controls').on('click',function(e){
      e.preventDefault();

      var $this = $(this);
      var container = $this.closest('.flat-block');
      var items = container.find('.flat__item')
      var activeSlide = items.filter('.active');
      var nextItem = activeSlide.next();
      var prevItem = activeSlide.prev();
      console.log('check');
      
    
      if($this.hasClass('controls_right')){
        if(nextItem.length){
          moveSlide(container, nextItem.index())
        }else{
          moveSlide(container, 0)
        }
        
      }else{
        moveSlide(container, prevItem.index())
      }
      
      
    })
    
})


//плавный скролл якорей 
$(function(){
  $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});
})


$(function(){
  let humburgerButton = document.getElementById('humburger');
 
    humburgerButton.addEventListener('click', function () {

      let menu = document.getElementById('menu'),
          styleMenu = window.getComputedStyle(menu),
          positionValue = styleMenu.getPropertyValue('top'),
          isOdd = true;

          if( positionValue === '-200px'){
            menu.style.top = '0px';
            humburgerButton.classList.add('humburger_active');
          }else{
            menu.style.top = '-200px';
            humburgerButton.classList.remove('humburger_active');
          };
         
  })
})

//убираем функциональность ссылок
$(function () {
      $('a').on('click', function(e){
        e.preventDefault();
      })
   
})