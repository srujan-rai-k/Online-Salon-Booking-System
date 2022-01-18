
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function getFile(){
  document.getElementById("upfile").click();
}

var loadFile = function(event) {
var image = document.getElementById('output');
image.src = URL.createObjectURL(event.target.files[0]);
};

$(document).ready(function(){
  $('#price1').prop('disabled', true);

  $('#services1').click(function(){
      if($(this).is(':checked'))
      {
          $('#price1').prop('disabled', false);
      }
      else
      {
          $('#price1').prop('disabled', true);
      }
  });
});

$(document).ready(function(){
  $('#price2').prop('disabled', true);

  $('#services2').click(function(){
      if($(this).is(':checked'))
      {
          $('#price2').prop('disabled', false);
      }
      else
      {
          $('#price2').prop('disabled', true);
      }
  });
});

$(document).ready(function(){
  $('#price3').prop('disabled', true);

  $('#services3').click(function(){
      if($(this).is(':checked'))
      {
          $('#price3').prop('disabled', false);
      }
      else
      {
          $('#price3').prop('disabled', true);
      }
  });
});

$(document).ready(function(){
  $('#price4').prop('disabled', true);

  $('#services4').click(function(){
      if($(this).is(':checked'))
      {
          $('#price4').prop('disabled', false);
      }
      else
      {
          $('#price4').prop('disabled', true);
      }
  });
});

$(document).ready(function(){
  $('#price5').prop('disabled', true);

  $('#services5').click(function(){
      if($(this).is(':checked'))
      {
          $('#price5').prop('disabled', false);
      }
      else
      {
          $('#price5').prop('disabled', true);
      }
  });
});

$(document).ready(function(){
  $('#price6').prop('disabled', true);

  $('#services6').click(function(){
      if($(this).is(':checked'))
      {
          $('#price6').prop('disabled', false);
      }
      else
      {
          $('#price6').prop('disabled', true);
      }
  });
});


/*scheduling */

(function($) {
  $('#picker').markyourcalendar({
    availability: [
      ['1:00', '2:00', '3:00', '4:00', '5:00'],
['1:00', '2:00', '3:00', '4:00', '5:00']
    ],
    isMultiple: false,
    onClick: function(ev, data) {
      // data is a list of datetimes
      console.log(data);
      var html = ``;
      $.each(data, function() {
        var d = this.split(' ')[0];
        var t = this.split(' ')[1];
        html += `<p>` + d + ` ` + t + `</p>`;
      });
      $('#selected-dates').html(html);
    },
    onClickNavigator: function(ev, instance) {
      var arr = [
        [
          ['4:00', '5:00', '6:00', '7:00', '8:00']
        ]
      ]
      instance.setAvailability(arr[rn]);
    }
  });
})(jQuery);

/*
let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}

  /**
   * Mobile nav toggle
   
   on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true) */
