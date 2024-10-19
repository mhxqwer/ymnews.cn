// JavaScript Document
window.onload = function () {
  var isMobile = (/iPad|iPhone|Android|Windows Phone|Nokia/).test(navigator.userAgent); //当前访问设备为移动端
  if (isMobile) {
    setTimeout(function () {
      $(".adv").each(function (i, v) {
        console.log(i, v);
        var imgsrc = $(this).find('.advCont').find('img').attr('src');
        var linkurl = $(this).find('.advCont').find('img').prev('a').attr('href');
        console.log(imgsrc, linkurl, $(this).find('.advCont').find('img').length, _typeof(imgsrc));

        if ($(this).find('.advCont').find('img').length > 0) {
          $(this).find('.advShow').html('<a href=' + linkurl + ' target="_blank"><img src=' + imgsrc + ' style="height:auto;width:100%;margin:0.2rem auto"></a>');
        }
      });
    }, 2000);
    //细览弹窗广告手机端变小
    setTimeout(function () {
      var tcad = $("body div").eq(0).attr("id");
      if (tcad.indexOf("YCADS2262") > -1) {
        $("body div").eq(0).css({
          "width": "150px",
          "height": "125px",
          "margin": "0"
        })
        $("body div").eq(0).find("img").css({
          "width": "100%",
          "height": "100%"
        })
      }
    }, 1000);
  }
};