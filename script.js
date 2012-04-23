//Game
var a = 0;
var b = 0;
var version = '0.2.2';
function addMonster ( value ) {
  for( var i = 1; i <= value; i++ ) {
    var monster = document.createElement('div');
    monster.id = a++;
    monster.setAttribute('onclick', 'remove('+b+++')');
    monster.setAttribute('class', 'monster');
    monster.style.left = Math.floor( ( Math.random( ) * 95 ) + 1) +"%";
    monster.style.top = 5 + Math.floor( ( Math.random( ) * 5 ) + 1 ) + "%";
    document.body.appendChild( monster );
  }
}
function remove ( id ) {
  var monster = document.getElementById(id);
  monster.parentNode.removeChild(monster);
  addPoints();
  addMonster(1);
}
function addPoints ( ) {
  var score = parseInt(document.getElementById("points").innerHTML);
  var points = score + 1;
  if( points == 100 ) {
    addMonster(1);
    alert('Next level ... 2');
  }
  document.getElementById('points').innerHTML = points;
}
//Options
function soundControl( ) {
  var sound_status = document.getElementById('bgMusic').muted;
  var sound_icon = document.getElementById('sound');
  if( !sound_status ) {
    document.getElementById('bgMusic').muted = true;
    sound_icon.className="mute";
  } else {
    document.getElementById('bgMusic').muted = false;
    sound_icon.className="unmute";
  }
}
