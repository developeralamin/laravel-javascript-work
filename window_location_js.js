 $('.coupnbtn').click(function(){
            var cuponvalue = $('.cuponvalue').val();
            window.location.href = "{{ url('cart-show') }}/"+cuponvalue;
       })