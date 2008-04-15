//sound preload
soundManager.url = 'sound.swf'; // override default SWF url
soundManager.debugMode = false;
soundManager.consoleOnly = false;

soundManager.onload = function() {
  // soundManager is initialised, ready to use. Create a sound for this demo page.
  soundManager.createSound('a1','sounds/drum1.mp3');
  soundManager.createSound('a2','sounds/drum2.mp3');
  soundManager.createSound('a3','sounds/drum3.mp3');
  soundManager.createSound('a4','sounds/drum4.mp3');
  soundManager.createSound('a5','sounds/drum5.mp3');
  soundManager.createSound('a6','sounds/bass1.mp3');
  soundManager.createSound('a7','sounds/bass2.mp3');
  soundManager.createSound('a8','sounds/bass3.mp3');
  soundManager.createSound('a9','sounds/bass4.mp3');
  soundManager.createSound('a10','sounds/bass5.mp3');
  soundManager.createSound('a11','sounds/splash.mp3');
  soundManager.createSound('a12','sounds/ting.mp3');
soundManager.play('a1');
}
//soundmanagerv20b-20070415 - Scott Schiller (schillmania.com)