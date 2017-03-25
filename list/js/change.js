/**
 * Created by haopengjie on 2016/9/12.
 */
    $(document).ready(function(){
        /*列表信息滑动变色*/
        $('.service-list-content a').hover(function(){
            $(this).find('.list-info').css('border','solid 1px #67cac9').find('.list-information').css('color','#14adab');
        },function(){
            $(this).find('.list-info').css('border','solid 1px #eaebea').find('.list-information').css('color','#292929');
        });
    });