/**
 * Created by haopengjie on 2016/9/7.
 */
    $(function(){
        /*医疗健康服务Tab初始化及切换*/
        var serTitle =  $('.service-check-tit li'),
            serTitle1 = $('.service-check-tit li:eq(0)');
        serTitle1.css('borderBottom','solid 1px white').children('span').css('backgroundColor','#14adab');
        serTitle.each(function(index){
            $(this).click(function(){
                $(this).css('borderBottom','solid 1px white').children('span').css('backgroundColor','#14adab');
                $(this).siblings('li').css('borderBottom','solid 1px #e8e8e8').children('span').css('backgroundColor','#bbbbbb');
                $('.service-check-content ul.service-con:eq('+index+')').show().siblings().hide();
            });
        });
        /*点击选择城市样式*/
        var cityColor = $('.check-city li');
        cityColor.click(function(){
            $(this).css({'color':'#14adab'}).siblings('li').css({'color':'#323232'});
        });
/*        /!*点击类型切换样式*!/
        var span = $(this).children('span');
        $('.multiple-check li').click(function(){
            if($(this).children('span').hasClass('on'))
            {
                $(this).children('span').removeClass('on');
                $(this).children('span').css('backgroundPosition','right center');
            }
            else
            {
                $(this).children('span').addClass('on');
                $(this).children('span').css('backgroundPosition','left center');
            }
        });*/
        /*医疗健康中下区块Tab初始化及切换*/
        var tabTitle = $('.service-tab li'),
            tabTitle1 = $('.service-tab li:eq(0)');
        tabTitle1.css('color','#14adab');
        $('.service-list-content:eq(0)').show();
        tabTitle.each(function(index){
            $(this).click(function(){
                $(this).css('color','#14adab').siblings().css('color','#323232');
                $('.service-all .service-list-content:eq('+index+')').show().siblings().hide();
            });
        });
        /*分页点击*/
        var page_number = 1;
        var all_page = $('.service-pagination .all-page').text();
        /*        alert(all_page);*/
        $('.service-pagination li.previous').click(function(){
            $('.current-page').text(page_number);
            page_number -= 1;
            if(page_number <= 1)
            {
                page_number = 1;
            }
        });
        $('.service-pagination li.next').click(function(){
            $('.current-page').text(page_number);
            page_number += 1;
            if(page_number >= all_page){
                page_number = all_page;
            }
        });
        /*底部分页颜色切换*/
        $('.btm-pagination span').click(function () {
            $(this).css({'backgroundColor':'#13adab','color':'white'}).siblings().css({'backgroundColor':'white','color':'#3e3e3e'});
        });
    });
