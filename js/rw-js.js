jQuery(document).ready(function($)
{
    //创建滑块
    $('.cd-testimonials-wrapper').flexslider({
        selector:".cd-testimonials > li",
        //变化方式‘滑动’
        animation:"slide",
        //不显示控制菜单
        controlNav: false,
        //载入页面不自动播放
        slideshow: false,
        //
        smoothHeight: true,
        start: function () {
            $('.cd-testimonials').children('li').css({
                'opacity': 1,
                'position': 'relative'
            });
        }
    });

    //为推荐模式页面构建网格
    $('.cd-testimonials-all-wrapper').children('ul').masonry({
        itemSelector: '.cd-testimonials-item'
    });
});