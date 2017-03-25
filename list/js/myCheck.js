/**
 * Created by haopengjie on 2016/9/12.
 */
;(function($){
    $.fn.checkList = function(options){
        var defaults ={
            checkClass : 'on',
            checktitle : '.multiple-check li',
            checkChildren : 'span',
            checkEvent : 'click'
            };
        var option = $.extend({},defaults,options);
        return this.each(function(){
           var _this = $(this);
            _this.find(option.checktitle).bind(option.checkEvent,function(){
                if($(this).children(option.checkChildren).hasClass(option.checkClass))
                {
                    $(this).children(option.checkChildren).removeClass(option.checkClass);
                    $(this).children(option.checkChildren).css('backgroundPosition','right center');
                }
                else
                {
                    $(this).children(option.checkChildren).addClass(option.checkClass);
                    $(this).children(option.checkChildren).css('backgroundPosition','left center');
                }
            });
        });
    }
})(jQuery);