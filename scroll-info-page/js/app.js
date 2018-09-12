$(function () {

    //animation

    var board = document.querySelector('.header-container');

    var div = document.createElement('div');
    div.classList.add('ninja');
    div.style.bottom ='40px';

    div.style.zIndex = 250;

    div.style.animationDuration = '0.5s';

    board.appendChild(div);




    //changing opacity while scrolling

    var target = $('.header-container');
    var targetHeight = target.outerHeight();

    $(document).scroll(function(e){
        var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
        if(scrollPercent >= 0){
            target.css('opacity', scrollPercent);
        }
    });


    //header - random colors of text and rectangles in interval

    function changeColors(){

        var newColor = '#'+ Math.round(0xffffff * Math.random()).toString(16);

        const randomHeight = Math.floor(Math.random() * (20 - 2 + 1)) + 2;
        const randomWidth = Math.floor(Math.random() * (20 - 2 + 1)) + 2;


        const positionX = (Math.random() * ($(document).width() - randomWidth)).toFixed();
        const positionY = (Math.random() * ($(window).height() - randomHeight)).toFixed();

        var randomImg = $('<div>').css({
                     'width':randomWidth+'px',
                     'height':randomHeight+'px',
                     'background-color': newColor,
                     'position':'absolute',
                     'left':positionX+'px',
                     'top':positionY+'px',
                     'z-index': 1
                 });

        $(".all").append(randomImg);
        $("p.header-text").css("color", newColor);


        const closerHeight = Math.floor(Math.random() * (100 - 95 + 1)) + 95;
        const closerWidth = 100 - closerHeight;

        const posCloserX = (Math.random() * (  ($(window).width() - 230 ) - 160 + 1 ) + 160 ).toFixed();
        console.log('x= '+posCloserX);
        const posCloserY = (Math.random() * (  ($(window).height() - 170 ) - 120 + 1 ) + 120 ).toFixed();
        console.log('y='+ posCloserY);

        var randomClose = $('<div class="thin">').css({
            'width':closerWidth+'px',
            'height':closerHeight+'px',
            'background-color': newColor,
            'position':'absolute',
            'left':posCloserX+'px',
            'top':posCloserY+'px',
            'z-index': 1
        });

        const posCloserThinX = (Math.random() * (  ($(window).width() - 230 ) - 160 + 1 ) + 160 ).toFixed();
        console.log('x= '+posCloserX);
        const posCloserThinY = (Math.random() * (  ($(window).height() - 170 ) - 150 + 1 ) + 150 ).toFixed();
        console.log('y='+ posCloserY);

        var randomClose2 = $('<div class="thin">').css({
            'width':closerHeight+'px',
            'height':closerWidth+'px',
            'background-color': newColor,
            'position':'absolute',
            'left':posCloserThinX+'px',
            'top':posCloserThinY+'px',
            'z-index': 1
        });


        $(".all").append(randomClose);
        $(".all").append(randomClose2);
        $(".thin").css("background", newColor);
    }

    setInterval(changeColors,180);



});
