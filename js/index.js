/*
  Latest modified 2016-06-16 07:21
*/

$(function() {
    var width = document.body.clientWidth;
    $(".burger").on("click", function() {
        $(this).toggleClass("active");
        $('.header-nav .nav').toggle(0, function() {
            animateReset();
            $('.header-nav .nav li a').toggleClass("header-nav-show");
        });
    });

    if(width > 880) {
        moreForPC();
    } else {
        moreForMob();
    }

    function moreForPC() {
        $('.J_more').mouseover(function() {
            var list = $(this).attr("data-list");
            $('.header-wrapper').addClass("hovered");
            $('.J_product-container').slideDown("normal", function() {
                $('.J_list').removeClass("jide-header-sub-show").find("li").removeClass("unsel");
                $('.J_' + list).addClass("jide-header-sub-show");
                $('.J_list li').bind({
                    mouseover: function() {
                        $('.J_list li').addClass("unsel");
                        $(this).removeClass("unsel");
                    },
                    mouseout: function() {
                        $('.J_list li').removeClass("unsel");
                    }
                });
            });
        });

        $('.nav li a:not(.J_more),body').mouseover(function() {
            $('.J_product-container').hide();
            $('.header-wrapper').removeClass("hovered");
        });

        $('.header-wrapper').mouseover(function(e) {
            e.stopPropagation();
        });
    }
});