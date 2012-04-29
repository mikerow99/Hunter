var a = 0;
var b = 0;
var version = 'Developer Preview 0.3.1';
function addMonster (value) {
  for(var i = 1; i <= value; i++) {
    monster = document.createElement('div');
    monster.id = a++;
    monster.setAttribute('onclick', 'remove('+b+++')');
    monster.setAttribute('class', 'squirrel');
    //Need rewrite
    monster.style.left = Math.floor( ( Math.random( ) * 95 ) + 1) +"%";
    monster.style.top = 5 + Math.floor( ( Math.random( ) * 5 ) + 1 ) + "%";
    //End rewrite
    document.body.appendChild(monster);
  }
}
function remove ( id ) {
  monster = document.getElementById(id);
  monster.parentNode.removeChild(monster);
  addPoints();
  addMonster(1);
}
function addPoints ( ) {
  score = parseInt(document.getElementById("points").innerHTML);
  level = document.getElementById("level").innerHTML;
  points = score + 1;
  if(points == 10 || points == 20 || points == 30) {
    addMonster(1);
//    document.getElementById('level').innerHTML = '2';
  }
  document.getElementById('points').innerHTML = points;
}
