function soundControl() {
  var status = document.getElementById('music').muted;
  var icon = document.getElementById('sound');
  if(!status) {
    document.getElementById('music').muted = 1;
    icon.className="mute";
  } else {
    document.getElementById('music').muted = 0;
    icon.className="unmute";
  }
}
