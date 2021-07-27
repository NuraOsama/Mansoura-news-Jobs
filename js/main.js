(function ($) {

    "use strict";
    new WOW().init();

    //sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $('.navbar-light').addClass('sticky-top').animate({

            }, 4000);

        } else {
            $('.navbar-light').removeClass('sticky-top').animate({

            }, 4000);

        }
    });
    
    //select
    /*$(".js-example-placeholder-single").select2({
        placeholder: "Select a state",
    });*/
    $.fn.select2.amd.define('select2/selectAllAdapter', [
        'select2/utils',
        'select2/dropdown',
        'select2/dropdown/attachBody'
      ], function (Utils, Dropdown, AttachBody) {
      
        function SelectAll() { }
        
        SelectAll.prototype.render = function (decorated) {
          var self = this,
                
              $rendered = decorated.call(this),
              $selectAll = $(
                
              ),
              $searchInput = $('<div class="input-group-prepend"><div class="input-group-text"><span class="fas fa-search"></span></div></div> <input type="search" class="select2-find js-select-find" placeholder="بحث...">'),
              $btnContainer = $('<div class="select2-all">').append($searchInput).append($selectAll);
            
            if (!this.$element.prop("multiple")) {
              return $rendered;
            }
          
            $rendered.find('.select2-dropdown').prepend($btnContainer);
            
            $selectAll.on('click', function (e) {
              var $results = $rendered.find('.select2-results__option'),
                  $unselected = $results.filter('[aria-selected=true]');
                  
              if ($unselected.length) {
                $unselected.each(function () {
                  self.trigger('select', {
                    data: $(this).data('data')
                  });
                });
                
                $selectAll.addClass('_selected');
              } else {
                $results.each(function () {
                  self.trigger('unselect', {
                    data: $(this).data('data')
                  });
                });
                
                $selectAll.removeClass('_selected');
              }
            });
              
            $searchInput.on('keyup', function() {
              self.$container.find('.select2-search__field').val(
                $(this).val()
              ).trigger('keyup');
            });
              
            return $rendered;
          };
      
          return Utils.Decorate(
            Utils.Decorate(
              Dropdown,
              AttachBody
            ),
            SelectAll
          );
      });
      
      
      ;(function($) {
        var pluginName = 'bondsSelect',
            defaults = {
              theme: 'bonds',
              closeOnSelect: false,
              placeholder: ''
            };
        
        function Plugin(element, options) {
          this.$element = $(element);
          this.options = $.extend({}, defaults, options);
          this.defaults = defaults;
          
          this.init();
        }
        
        Plugin.prototype = {
          init: function() {
      
            this.$element.select2({
              closeOnSelect: this.options.closeOnSelect,
      
              theme: this.options.theme,
      
              dropdownAdapter: $.fn.select2.amd.require('select2/selectAllAdapter'),
      
              language: {
                noResults: function() {
                  return 'لم يتم العثور علي التطابق';
                }
              }
            });
            
            this.blocks = this.$element.data('select2');
            this.initPlaceholder();
            this.initEvents();
          },
          
          initEvents: function() {
            var self = this,
                blocks = self.blocks,
                
                $selectAll = blocks.$dropdown.find('.js-select2-all'),
                $searchInput = blocks.$dropdown.find('.js-select-find');
            
            blocks.$element.on('select2:unselect', function() {
              $selectAll.removeClass('_selected');
            })
            .on('change', function() {
              var $selection = blocks.$container,
      
                  values = blocks.$element.val();
      
              values.length ? self.$placeholder.hide() : self.$placeholder.show();
      
              if (values.length === blocks.$element.find('option').length) {
                $selectAll.addClass('_selected');
              }
            })
            .on('select2:open', function() {
              $searchInput.val('');
              $selectAll.show();
            });
            
            blocks.$container.find('.select2-selection').on('keyup', function () {
              var value =  $searchInput.val();
              
              value.length ? $selectAll.hide() : $selectAll.show();
            });
          },
          
          initPlaceholder: function() {
            var placeholder = this.options.placeholder;
            
            placeholder = typeof placeholder === 'string' && placeholder.length ? placeholder : this.defaults.placeholder;
            
            this.$placeholder = $(
              ['<div class="bonds__title js-bonds-title">', placeholder , '</div>'].join('')
            ).insertBefore(this.$element);
          }
        }
        
        $.fn[pluginName] = function (options) {
          return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
              $.data(
                this,
                'plugin_' + pluginName,
                new Plugin(this, options)
              );
            }
          });
        };
      }(jQuery));
      
      $(function() {
        $('.js-bonds-select').bondsSelect({
          placeholder: 'مصر'
        });
      });

      $(function() {
        $('.js-bounds-select-2').bondsSelect({
          placeholder: 'ما هو المجال الذي تود العمل فيه؟'
        });
      });

      //tabs
      $("#level1-tab").click(function(){
        $(".another1-success-1").css('display','block');
        $(".success-1").css('display','none');
        $(".another1-success-4").css('display','block');
        $(".main-price-2").css('display','block');
        $(".success-4").css('display','none');
        $(".main-price-1").css('display','none');
        $(".another2-success-4").css('display','none');
        $(".main-price-3").css('display','none');
        $(".another2-success-1").css('display','none');
        $(".another3-success-4").css('display','none');
        $(".main-price-4").css('display','none');
        $(".another4-success-4").css('display','none');
        $(".main-price-5").css('display','none');
        $(".cv-main-price1").css('display','block');
        $(".cv-main-price2").css('display','none');

      })
      $("#level2-tab").click(function(){
        $(".another1-success-1").css('display','block');
        $(".success-1").css('display','none');
        $(".another2-success-4").css('display','block');
        $(".main-price-3").css('display','block');
        $(".another1-success-4").css('display','none');
        $(".main-price-2").css('display','none');
        $(".success-4").css('display','none');
        $(".main-price-1").css('display','none');
        $(".another2-success-1").css('display','none');
        $(".another3-success-4").css('display','none');
        $(".main-price-4").css('display','none');
        $(".another4-success-4").css('display','none');
        $(".main-price-5").css('display','none');
        $(".cv-main-price1").css('display','block');
        $(".cv-main-price2").css('display','none');
      
      })
      $("#level3-tab").click(function(){
        $(".another1-success-1").css('display','none');
        $(".success-1").css('display','block');
        $(".success-4").css('display','block');
        $(".main-price-1").css('display','block');
        $(".another1-success-4").css('display','none');
        $(".main-price-2").css('display','none');
        $(".another2-success-4").css('display','none');
        $(".main-price-3").css('display','none');
        $(".another2-success-1").css('display','none');
        $(".another3-success-4").css('display','none');
        $(".main-price-4").css('display','none');
        $(".another4-success-4").css('display','none');
        $(".main-price-5").css('display','none');
        $(".cv-main-price1").css('display','block');
        $(".cv-main-price2").css('display','none');
      })
      $("#level4-tab").click(function(){
        $(".another2-success-1").css('display','block');
        $(".another3-success-4").css('display','block');
        $(".main-price-4").css('display','block');
        $(".another1-success-1").css('display','none');
        $(".success-1").css('display','none');
        $(".success-4").css('display','none');
        $(".main-price-1").css('display','none');
        $(".another1-success-4").css('display','none');
        $(".main-price-2").css('display','none');
        $(".another2-success-4").css('display','none');
        $(".main-price-3").css('display','none');
        $(".another4-success-4").css('display','none');
        $(".main-price-5").css('display','none');
        $(".cv-main-price1").css('display','none');
        $(".cv-main-price2").css('display','block');
      })
      $("#level5-tab").click(function(){
        $(".another2-success-1").css('display','block');
        $(".another4-success-4").css('display','block');
        $(".main-price-5").css('display','block');
        $(".another3-success-4").css('display','none');
        $(".main-price-4").css('display','none');
        $(".another1-success-1").css('display','none');
        $(".success-1").css('display','none');
        $(".success-4").css('display','none');
        $(".main-price-1").css('display','none');
        $(".another1-success-4").css('display','none');
        $(".main-price-2").css('display','none');
        $(".another2-success-4").css('display','none');
        $(".main-price-3").css('display','none');
        $(".cv-main-price1").css('display','none');
        $(".cv-main-price2").css('display','block');
      })

      //owl
      $(document).ready(function(){   
        $('.owl').owlCarousel({
            items:1,
             lazyLoad:true,
             loop:true,
             smartSpeed:500,
             autoplay:true,
             nav:true,
             dots:false
           
        });
        $( ".owl-prev").html(' <a class="carousel-control-prev" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span> </a>');
     $( ".owl-next").html('<a class="carousel-control-next"  role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>');
    })
    $(document).ready(function(){   
      $('.owl2').owlCarousel({
          items:1,
           lazyLoad:true,
           loop:true,
           smartSpeed:500,
           autoplay:true,
           nav:true,
           dots:false
         
      });
      $( ".owl-prev").html(' <a class="carousel-control-prev" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span> </a>');
   $( ".owl-next").html('<a class="carousel-control-next"  role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>');
  })

     //search box
     $(".search-icon").click(function(){
      $(".search-box").fadeIn(); 
     });
  
     $(".close-btn").click(function(){
      $(".search-box").fadeOut(); 
     });


     //scroll
  $(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
  })

  $(document).ready(function(){

    var list = $(".first-blog");
    var numToShow = 3;
    var button = $("#next");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
      button.show();
    }
    list.slice(0, numToShow).show();

    button.click(function(){
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
          button.hide();
        }
    });

});


$(document).ready(function(){

  var list = $(".second-blog");
  var numToShow = 2;
  var button = $("#two-next");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();

  button.click(function(){
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
  });

});

$(document).ready(function(){

  var list = $(".users-comments");
  var numToShow = 1;
  var button = $("#next-comments");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();

  button.click(function(){
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
  });

});
//aside header,aside grid

$(".nav-toggle").click(function(){
$(".aside-header").addClass('active');
});

$(".gird").click(function(){
  $(".aside-grid").addClass('active');
  });

$(".close-header").click(function(){
  $(".aside-header").removeClass('active');
  
  });

  $(".close-grid").click(function(){ 
  $(".aside-grid").removeClass('active');

  });

  $(".aside-header .navbar-nav .nav-item>.dropdown-toggle").click(function(){
    $(this).toggleClass('active');
    });

    $(".gird").click(function(){
      $(".overlay-gird").toggleClass('active');
      });


  //responsive bottombar-comment
      
  $(".ellipsis").click(function(){
    
    $(".bottombar-comment").toggleClass('active');
    $(".background-fader ").toggleClass('show');
  });

  $(".background-fader").click(function(){  
    $(".bottombar-comment").removeClass('active');
    $(this).removeClass('show');
  });

})(jQuery);
