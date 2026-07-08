// tablet more
$(document).ready(function() {
            $('.more > a').click(function(e) {
                e.preventDefault(); // a 태그 클릭 시 화면이 위로 튕기는 기본 동작 방지
                $('.more').toggleClass('active'); // 클릭할 때마다 .more에 active 클래스 추가/삭제
            });
        });

// banner
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

});

// section_1 books
$(document).ready(function () {
    const swiperOptions = {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.book_btn_next',
            prevEl: '.book_btn_prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    };

    const newBooksSwiper = new Swiper('.newBooks', swiperOptions);
    const bestBooksSwiper = new Swiper('.bestBooks', swiperOptions);


    ($('.book_tabs li')).on('click', function () {
        $('.book_tabs li').removeClass('active');
        $(this).addClass('active');

        const targetTab = $(this).attr('data-tab');

        if (targetTab === 'new') {
            $('.newBooks').show();
            $('.bestBooks').hide();
        } else {
            $('.newBooks').hide();
            $('.bestBooks').show();
        }

        setTimeout(function() {
            newBooksSwiper.update();
            bestBooksSwiper.update();
        }, 50);
    });
});

// AOS 애니메이션 !!
AOS.init({
    duration: 1000, // 애니메이션 속도 (1초)
    once: true     // 한번만 실행, 계속하려면 false로 변경
    
});


