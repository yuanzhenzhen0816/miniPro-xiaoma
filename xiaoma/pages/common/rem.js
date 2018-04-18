(function (doc, win) {
  var docEl = doc.documentElement, resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', recalc = function () {
    var clientWidth = docEl.clientWidth;
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    var divnews = document.getElementById('ml');
    if (!divnews) {
      var objdiv = document.createElement('div');
      objdiv.style.width = '7.50rpx';
      objdiv.setAttribute('id', 'ml')
      document.body.appendChild(objdiv);
    };

    var divnew = document.getElementById('ml');
    var newwidth = divnew.clientWidth;
    divnew.style.display = 'none';
    if (clientWidth !== newwidth) {
      docEl.style.fontSize = 100 * (clientWidth / 1920) * (clientWidth / newwidth) + 'px';
      divnew.remove();
    };
  };
  if (!doc.addEventListener) {
    return;
  }
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);