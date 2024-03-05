$(document).ready(function () {
    // 메뉴버튼 toggle class
    const menuBtn = (menuToggle) => {
        $(menuToggle).on('click', function () {
            $(this).toggleClass('active');
            // console.log($(this));
            $('.header_nav').toggleClass('active');
        });
    }
    menuBtn('.mobile_menu_btn');

    // section transition
    const sectionMove = () => {
        $('.nav_btn').on('click', (e) => {
            const sectionId ='#' + $(e.currentTarget).data('secId');
            e.preventDefault();

            // console.log(sectionId);
            $('.nav_btn').removeClass('active');
            $(e.currentTarget).addClass('active');
            if ($(sectionId).hasClass('show_section') === false) {
                $('.idx_section').removeClass('show_section');
                $(sectionId).addClass('show_section');
            }

            $('.mobile_menu_btn').removeClass('active');
            $('.header_nav').removeClass('active');
        });
    }
    sectionMove();

    // popupButton
    const popupButton = () => {
        $('.pop_btn').on('click', function() {
            $(this).next().addClass('active');
        });
        
        $('.close_btn').on('click', function () {
            const popActive = $(this).closest('.active');
            popActive.removeClass('active');
        });
    }
    popupButton();
});