// var element;
// element = document;


if(document.querySelector( '.abc')){
    let abc = document.querySelector( '.abc');
      
    mouseEnter = function mouseEnter() {
      abc.innerHTML = `<small class="card-title text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit. Temporibus Temporibus est ullam magni expedita.<small>`;
      abc.style.backgroundColor = '#FC6600';
      abc.style.color = '#ffffff';
    }
     
    mouseLeave = function mouseLeave() {
      abc.innerHTML = `  <i class="fas fa-home text-center"></i><br>
      <h4 class=" card-title text-center ">Home Interior</h4> `;
        abc.style.backgroundColor = '#ffffff';
        abc.style.color = '#000000';
    
     }
    
    abc.addEventListener( 'mouseenter', mouseEnter );
    abc.addEventListener( 'mouseleave', mouseLeave );
    }

    if(document.querySelector('.def')){
        let def = document.querySelector('.def');

        mouseEnter = function mouseEnter(){
            def.innerHTML = '<small class="card-title text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit. Temporibus Temporibus est ullam magni expedita.<small>'; 
            def.style.backgroundColor = '#FC6600';
            def.style.color = '#ffffff';            
        }
        mouseLeave = function mouseLeave(){
            def.innerHTML = `<i class="fas fa-tree text-center"></i><br>
            <h4 class="card-title text-center" >Party Interior </h4>`;
            def.style.backgroundColor = '#ffffff';
            def.style.color = '#000000';
        }
        def.addEventListener('mouseenter',mouseEnter);
        def.addEventListener('mouseleave',mouseLeave);

    }

        if(document.querySelector('.xyz')){
            let xyz = document.querySelector('.xyz');
            mouseEnter = function mouseEnter(){
                xyz.innerHTML = '<small class="card-title text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est ullam magni consectetur adipisicing elit Temporibus expedita.<small>';
                xyz.style.backgroundColor = '#FC6600';
                xyz.style.color = '#ffffff';
            }
            mouseLeave = function mouseLeave(){
                xyz.innerHTML = `<i class="fas fa-chair text-center"></i> <br>
                <h4 class="card-title text-center" >Office Interior</h4>`;
                xyz.style.backgroundColor = '#ffffff';
                xyz.style.color = '#000000';
            }
            xyz.addEventListener('mouseenter',mouseEnter);
            xyz.addEventListener('mouseleave',mouseLeave);
        }
       
        var element;
        function focusFunction(element){
          element.style.background = "rgb(243, 249, 252)";
        }
        function blurFunction(element){
          element.style.background = "";
        }
        

        
   


  $(document).ready(function(){
    $(".LL").on({
      mouseenter: function () {
           $(".photo").show();
          
           
           
      },
      mouseleave: function () {
        $(".photo").hide();
       
      }
  });
  });

  $(document).ready(function(){
    $(".LL1").on({
      mouseenter: function () {
           $(".photo1").show();
            
          },
      mouseleave: function () {
        $(".photo1").hide();
        }
  });
  });

  $(document).ready(function(){
    $(".LL2").on({
      mouseenter: function () {
           $(".photo2").show();
        
        },
      mouseleave: function () {
        $(".photo2").hide();
       }
  });
  });

$(document).ready(function(){
  $('.pic1').on({
    mouseenter:function(){
      $('.XM1').show();
    },
    mouseleave:function(){
      $('.XM1').hide();
        }
  });
});

$(document).ready(function(){
  $('.pic2').on({
    mouseenter:function(){
      $('.XM2').show();
    },
    mouseleave:function(){
      $('.XM2').hide();
     }
  });
});

$(document).ready(function(){
  $('.pic3').on({
    mouseenter:function(){
      $('.XM3').show();
    },
    mouseleave:function(){
      $('.XM3').hide();
        }
  });
});
$(document).ready(function(){
  $('.pic4').on({
    mouseenter:function(){
      $('.XM4').show();
    },
    mouseleave:function(){
      $('.XM4').hide();
        }
  });
});
$(document).ready(function(){
  $('.pic5').on({
    mouseenter:function(){
      $('.XM5').show();
    },
    mouseleave:function(){
      $('.XM5').hide();
        }
  });
});
$(document).ready(function(){
  $('.pic6').on({
    mouseenter:function(){
      $('.XM6').show();
    },
    mouseleave:function(){
      $('.XM6').hide();
        }
  });
});
$(document).ready(function(){
  $('.pic7').on({
    mouseenter:function(){
      $('.XM7').show();
    },
    mouseleave:function(){
      $('.XM7').hide();
        }
  });
});
$(document).ready(function(){
  $('.pic8').on({
    mouseenter:function(){
      $('.XM8').show();
    },
    mouseleave:function(){
      $('.XM8').hide();
        }
  });
});



