$(document).ready(function() { //story
    $(".onclick_1").click(function() {
        $(".onclick_1").css('background', 'blue');
        $(".onclick_2").css('background', 'gray');
        $(".onclick_3").css('background', 'gray');
        var img = $("img.click_2").attr('src');
        $("img.click_1").attr('src', img);
        return false;
    })

    $("a.onclick_2").click(function() {
        $(".onclick_2").css('background', 'blue');
        $(".onclick_1").css('background', 'gray');
        $(".onclick_3").css('background', 'gray');
        var img = $("img.click_3").attr('src');
        $("img.click_1").attr('src', img);
        return false;
    })

    $("a.onclick_3").click(function() {
        $(".onclick_3").css('background', 'blue');
        $(".onclick_2").css('background', 'gray');
        $(".onclick_1").css('background', 'gray');
        var img = $("img.click_4").attr('src');
        $("img.click_1").attr('src', img);
        return false;
    })
})

$(document).ready(function(){ //form
    $('.registration').submit(function(){
        var username = $('#username').val();

        if(username == ""){
            username = "Bạn phải nhập email!"
            $('.alert').text(username);
            $('.alert').css('background', 'orange');
        }
        else{
            username = "Đăng ký thành công!"
            $('.alert').text(username);
            $('.alert').css('background', 'green');
        }

        $('.alert').toggle();
        $('.alert').stop().fadeOut(3000);
        return false;
    });
})

$(document).ready(function(){ //slider
    $('#banner .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        responsive:{
            1000:{
                items:1
            }
        }
    })

    $('#slide_consult .owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        autoplay: true,
        dots: false,
        responsive:{
            1000:{
                items:4
            }
        }
    })
})
