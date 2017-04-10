
/*
 * Created by Soumya Jyoti Banerjee <talk2sjb@gmail.com>
 * Copyright (c) 2017. All rights reserved.
 */

var xMove;
var obj = document.getElementById('holder');
//to stop the image to be dragged by mouse down and move
obj.addEventListener('dragstart', function(event) {
  event.preventDefault();
});

//add a mouse down event to calculate the x cordinate
//also add a mousemove event listener to document to
//change the images
obj.addEventListener('mousedown', function(event) {
  var evt = event;
  xMove = evt.clientX;
  document.addEventListener('mousemove', change);
});

//remove the event listener from document so that
//it wont fire after mouseup
document.addEventListener('mouseup', function() {
  document.removeEventListener('mousemove', change);
});

//logic to change the images
function change(event) {
  var linkArr = document.querySelectorAll('#holder IMG');
  var currentIdx = 0;
  for (var i = 0; i < linkArr.length; i++) {
    if (linkArr[i].className.indexOf('show') > -1) {
      currentIdx = i;
    }
  }
  if (event.clientX - xMove > 10) {
    xMove = event.clientX;
    if (0 === currentIdx) {
      linkArr[currentIdx].className = 'hide';
      linkArr[linkArr.length - 1].className = 'show';
    } else {
      linkArr[currentIdx].className = 'hide';
      linkArr[currentIdx - 1].className = 'show';
    }
  } else if (event.clientX - xMove < -10) {
    xMove = event.clientX;
    if (linkArr.length - 1 === currentIdx) {
      linkArr[currentIdx].className = 'hide';
      linkArr[0].className = 'show';
    } else {
      linkArr[currentIdx].className = 'hide';
      linkArr[currentIdx + 1].className = 'show';
    }
  }
}
