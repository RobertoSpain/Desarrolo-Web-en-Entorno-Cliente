function startup() {
    var el = document.getElementsByTagName("canvas")[0];
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchleave", handleLeave, false);
    el.addEventListener("touchmove", handleMove, false);
  }

  function handleStart(evt) {
    evt.preventDefault();
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;
  
    for (var i = 0; i < touches.length; i++) {
      ongoingTouches.push(touches[i]);
      var color = colorForTouch(touches[i]);
      ctx.fillStyle = color;
      ctx.fillRect(touches[i].pageX - 2, touches[i].pageY - 2, 4, 4);
    }
  }
  