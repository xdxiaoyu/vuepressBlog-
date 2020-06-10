
function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var body = document.getElementsByTagName("body")[0]
body.addEventListener('click', function (e) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token=A%2Fc%2BrCSZWb3InsnnNznW7HR1fOOlonLa", true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function (res) {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      let val = JSON.parse(res.currentTarget.responseText)
      console.log('val', val.data.content)
      console.log('点击了鼠标', e);
      var x = e.pageX,
        y = e.pageY;
      var $span = document.createElement('span')
      $span.innerHTML = val.data.content
      $span.style.zIndex=`z-index: 999999999999999999999999999999999999999999999999999999999999999999999,`
      $span.style.position=`absolute`
      $span.style.left=`${x}px`
      $span.style.top=`${y - 20}px`
      $span.style.cursor=`default`
      $span.style.userSelect=`none`
      $span.style.fontFamily=`楷体`
      $span.style.fontSize=`18px`
      $span.style.color = `rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)})`,
      body.append($span)
      // $span.animate({
      //   "top": y - 180,
      //   "opacity": 0
      // },
      //   1500,
      //   function () {
      //     $span.remove();
      //   });
      $span.style.animation=`1`
      setTimeout(() => {
        body.removeChild($span);
      },1000)
    }
  };



})

