// ==UserScript==
// @name        CompactSpace
// @author      Mustoha Mátyás
// @namespace   matyas.mustoha
// @include     /^https?://www.coosp.etr.u-szeged.hu/(Home|Scene).*/
// @version     1.0
// @grant       none
// @downloadURL https://raw.githubusercontent.com/mmatyas/userscripts/master/CompactSpace/CompactSpace.user.js
// @updateURL   https://raw.githubusercontent.com/mmatyas/userscripts/master/CompactSpace/CompactSpace.user.js
// @description Valamivel tömörebb megjelenést biztosító script az SZTE CooSpace oldala számára.
// ==/UserScript==

$("#breadcrumb2").remove();
$("#header").attr('id', 'header_customized');
$("#header_customized li").css("background-image", "none");
$("#header_customized a").css("padding-top", "5px");
$("#spaceholder").remove();
$("div .scene").css("min-height", "0px").css("padding-bottom", "0px");
$(".list li").css("border", "0px");
$(".fav_code").remove();
$(".scene_tools").css('clear', 'none').css('width', 'auto');
$(".categorychooser").removeClass("leftmargin");
$(".bracket").each(function(idx, elem) {
  if (elem.children.length > 1)
    elem.removeChild(elem.children[1]);
});

