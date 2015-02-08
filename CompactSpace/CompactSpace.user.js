// ==UserScript==
// @name        CompactSpace
// @namespace   matyas.mustoha
// @include     /^https?://www.coosp.etr.u-szeged.hu/(Home|Scene).*/
// @version     1.0
// @grant       none
// ==/UserScript==

$("#breadcrumb2").remove();
$("#header").attr('id', 'header_customized');
$("#header_customized li").css("background-image", "none");
$("#header_customized a").css("padding-top", "5px");
$("div .scene").css("min-height", "0px").css("padding-bottom", "0px");
$(".list li").css("border", "0px");
$(".fav_code").remove();
$(".scene_tools").css('clear', 'none').css('width', 'auto');
$(".categorychooser").removeClass("leftmargin");
$(".bracket").each(function(idx, elem) {
  if (elem.children.length > 1)
    elem.removeChild(elem.children[1]);
});

