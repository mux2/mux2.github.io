/**
 * Created by Administrator on 2017/6/26.
 */


//   解决锚点 被悬浮栏 挡住了
/*function locateAt(e) {
 e = document.getElementById(e);
 /!*以id命名的锚点*!/
 y = e.offsetTop;
 while (e = e.offsetParent) {
 y += e.offsetTop;
 }
 y -= 140;
 /!*自定义偏移高度*!/
 window.scrollTo(0, y);
 }

 function openFlag(url,flag) {
 //        window.open("index.html?flag="+flag);
 window.location.href = url+".html?flag=" + flag;
 }*/


$(document).ready(function () {
    /* var url = window.location.href;//获取当前浏览器的url
     var index = url.indexOf("flag");//判断当前url是否有flag，如果有，说明是从A页面跳转而来的，就执行下面的程序

     if (index != -1) {//由A页面跳转而来
     var e = url.substring(index + "flag=".length);
     locateAt(e);
     }*/

    $(".menu li a,#navbar li a").click(function (event) {
        $('.navbar-collapse').removeClass('in');
        $('.navbar-toggle').addClass('collapsed');
        var index = this.title
        var id = '#' + 'index_' + index
        $("html,body").animate({scrollTop: $(id).offset().top - 110}, 800);
    });
    $("#pdfOnline").click(function (event) {

        $(this).attr("target", "_blank");
        var pdfName = "ITCWHITEPAPER.pdf";
        var userAgent = navigator.userAgent;
        var isAndroid = /Android/.test(userAgent);
        if (isAndroid) {
            $(this).attr("href", "pdf/web/viewer.html?file=" + pdfName);
        } else {
            $(this).attr("href", "pdf/web/" + pdfName);
        }
    });
    /*    $("#weixin").hover(function(){
     $("#qr_weixin").show();
     }, function () {
     $("#qr_weixin").hide();
     });

     $("#qq").hover(function(){
     $("#qr_qq").show();
     }, function () {
     $("#qr_qq").hide();
     });*/
    $(".banner").height($(window).height()-$('#header').height());

    function isShow($el) {
        var winH = $(window).height(),//获取窗口高度
            scrollH = $(window).scrollTop(),//获取窗口滚动高度
            top = $el.offset().top;//获取元素距离窗口顶部偏移高度
        if (top < scrollH + winH) {
            return true;//在可视范围
        } else {
            return false;//不在可视范围
        }
    }
    function srcollAnd() {
        $(".flag").each(function () {
            var $this = $(this);
            if (isShow($this)) {
                $this.addClass("animated");
            }
            ;
        });
    }
    srcollAnd();
    $(window).on("scroll", function () {
        srcollAnd();
    })

    $('.countdown').downCount({
        date: '12/30/2017 20:00:00',
        offset: +8
    }, function () {
        $('.countdown').hide();
    });

});
if (!(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i).test(navigator.userAgent))
    document.write('<script   src="js/app.js"><\/script>');

