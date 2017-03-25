/**
 * Created by Administrator on 2016/9/1.
 */
    $(function(){
        /*区块导航三角初始化*/
        var triangle = $('.area-btn i');
        var currentColor = $('.area-all span');
        triangle.addClass('i-init');
        /*区块导航三角改变*/
        $('.area-btn').mouseover(function(){
            $('.area-all').css({'display':'block'});
            triangle.removeClass('i-init').addClass('i-change');
        })
        /*区块导航三角恢复默认*/
        .mouseout(function(){
            $('.area-all').css({'display':'none'});
            triangle.removeClass('i-change').addClass('i-init');
        });
        /*区块显示*/
        $('.area-all').mouseover(function(){
            $(this).css({'display':'block'});
            $('.area-btn').removeClass('area-btn-init').addClass('area-btn-hover');
            triangle.removeClass('i-init').addClass('i-change');
        })
        /*区块隐藏*/
        .mouseout(function(){
            $(this).css({'display':'none'});
            $('.area-btn').removeClass('area-btn-hover').addClass('area-btn-init');
            triangle.removeClass('i-change').addClass('i-init');
        });
        /*区块文字点击改变初始文字内容以及保留点击变色痕迹*/
        currentColor.each(function(index){
            $(this).click(function(){
/*                alert(index);*/
                var current_area = $(this).text();
                $('.area-btn span').text(current_area);
                var changeColor = $(this).css({'color':'white','backgroundColor':'#14adab'});
                currentColor.not(changeColor).css({'color':'#7b7b7b','background':'none'});
            });
        });
        /*顶部导航竖线颜色*/
        $('.nav-top li').css('color','#8b8b8b');
        /*轮播图*/
        var $window = $(window),window_width = $window.width();
        $('#js_banner, #js_banner_img li').width(window_width);
        new $.Tab({
            target: $('#js_banner_img li'),
            effect: 'slide3d',
            animateTime: 1000,
            stay: 3500,
            autoPlay: true,
            merge: true
/*            prevBtn: $('#js_banner_pre'),
            nextBtn: $('#js_banner_next')*/
        });
        /*中间左部导航点击变换颜色和图标切换-----改变后*/
        $('.every-classify').each(function(index){
           $(this).mouseover(function(){
              $(this).css({'backgroundColor':'white'})/*.siblings().css({'backgroundColor':'#37bfbd'})*/;
              $(this).children('a').css('color','#37bfbd');
              switch (index){
                  case 0:$(this).children('img').attr('src','images/icon-h1.png');break;
                  case 1:$(this).children('img').attr('src','images/icon-h2.png');break;
                  case 2:$(this).children('img').attr('src','images/icon-h3.png');break;
                  case 3:$(this).children('img').attr('src','images/icon-h4.png');break;
                  case 4:$(this).children('img').attr('src','images/icon-h5.png');break;
                  case 5:$(this).children('img').attr('src','images/icon-h6.png');break;
              }
           })
        /*中间左部导航点击变换颜色和图标切换-----改变前*/
           .mouseout(function(){
               $(this).css({'backgroundColor':'#37bfbd'});
               $(this).children('a').css('color','white');
               switch (index){
                   case 0:$(this).children('img').attr('src','images/icon1.png');break;
                   case 1:$(this).children('img').attr('src','images/icon2.png');break;
                   case 2:$(this).children('img').attr('src','images/icon3.png');break;
                   case 3:$(this).children('img').attr('src','images/icon4.png');break;
                   case 4:$(this).children('img').attr('src','images/icon5.png');break;
                   case 5:$(this).children('img').attr('src','images/icon6.png');break;
               }
           });
        });
        /*中间图标色系切换*/
        $('.icon .iconAll a').each(function(index){
            $(this).mouseover(function(){
                $(this).css({'backgroundColor':'#fe7167'}).children('p').css({'color':'white'});
            })
            .mouseout(function(){
                $(this).css({'background':'none'}).children('p').css({'color':'#1f1f1f'});
            });
        });
        /*中间右侧导航变色*/
        $('.aside-user li').click(function(){
            $(this).removeClass('user-ul-noClick').addClass('user-ul-click');
            $(this).siblings('li').removeClass('user-ul-click').addClass('user-ul-noClick');
        });
    });