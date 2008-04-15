// variables
var v_val = 80;
var tem_val = 107;
var tem_rate = 560;
var t_val =100;
var flash_rate = 200;
//
var d_val = 10;
var dly_val = 10;
var d_val2 = 20;
var dly_val2 = 20;
var d_val3 = 30;
var dly_val3 = 30;
var d_val4 = 40;
var dly_val4 = 40;
var d_val5 = 50;
var dly_val5 = 50;
var d_val6 = 60;
var dly_val6 = 60;
var d_val7 = 10;
var dly_val7 = 10;
var d_val8 = 20;
var dly_val8 = 20;
var d_val9 = 30;
var dly_val9 = 30;
var d_val10 = 70;
var dly_val10 = 70;
var d_val11 = 80;
var dly_val11 = 80;
var d_val12 = 90;
var dly_val12 = 90;
//
var key_state = new Array();
key_state[0] =0;
key_state[1] =0;
key_state[2] =0;
key_state[3] =0;
key_state[4] =0;
key_state[5] =0;
key_state[6] =0;
key_state[7] =0;
key_state[8] =0;
key_state[9] =0;
key_state[10] =0;
key_state[11] =0;
key_state[12] =0;
//
var play_0 = new Image();
play_0.src = "play.png";
var play_1 = new Image();
play_1.src = "stop.png";
var sosw_0 = new Image();
sosw_0.src = "sw-off.png";
var sosw_1 = new Image();
sosw_1.src = "sw-on.png";
//
var led1_0 = new Image();
led1_0.src = "pngs/a1-off.png";
var led1_1 = new Image();
led1_1.src = "pngs/a1-on.png";
var led2_0 = new Image();
led2_0.src = "pngs/a2-off.png";
var led2_1 = new Image();
led2_1.src = "pngs/a2-on.png";
var led3_0 = new Image();
led3_0.src = "pngs/a3-off.png";
var led3_1 = new Image();
led3_1.src = "pngs/a3-on.png";
var led4_0 = new Image();
led4_0.src = "pngs/a4-off.png";
var led4_1 = new Image();
led4_1.src = "pngs/a4-on.png";
var led5_0 = new Image();
led5_0.src = "pngs/a5-off.png";
var led5_1 = new Image();
led5_1.src = "pngs/a5-on.png";
var led6_0 = new Image();
led6_0.src = "pngs/a6-off.png";
var led6_1 = new Image();
led6_1.src = "pngs/a6-on.png";
var led7_0 = new Image();
led7_0.src = "pngs/a7-off.png";
var led7_1 = new Image();
led7_1.src = "pngs/a7-on.png";
var led8_0 = new Image();
led8_0.src = "pngs/a8-off.png";
var led8_1 = new Image();
led8_1.src = "pngs/a8-on.png";
var led9_0 = new Image();
led9_0.src = "pngs/a9-off.png";
var led9_1 = new Image();
led9_1.src = "pngs/a9-on.png";
var led10_0 = new Image();
led10_0.src = "pngs/a10-off.png";
var led10_1 = new Image();
led10_1.src = "pngs/a10-on.png";
var led11_0 = new Image();
led11_0.src = "pngs/a11-off.png";
var led11_1 = new Image();
led11_1.src = "pngs/a11-on.png";
var led12_0 = new Image();
led12_0.src = "pngs/a12-off.png";
var led12_1 = new Image();
led12_1.src = "pngs/a12-on.png";
//
var beats_on = 0;
var note_press;
//
//
function playsound(key_sound,key_dex){
note_press = key_sound*1;
if (key_state[note_press] == 0)
{
key_state[note_press] = 1;
document.images[key_dex].src = sosw_1.src;
}
else
{
key_state[note_press] = 0;
document.images[key_dex].src = sosw_0.src;
}
linktext[5]= "<b>Beat " + note_press + " is set to " + key_state[note_press] +"</b>";
show_text(5,'music_bar');
}
//
//drag controls
var vThumb = document.getElementById("vol_set");
Drag.init(vThumb, null, 0, 150, 0, 0);
//
vThumb.onDragEnd = function(x, y){
v_val = Math.round(x * 0.66);
soundManager.createSound('aSound','sounds/click.mp3');
soundManager.setVolume('aSound',v_val);
soundManager.play('aSound');
soundManager.destroySound('aSound');
linktext[3]= "<b>Volume - " + v_val +"</b>";
show_text(3,'music_bar');
};
//
function start_beats(){
if (beats_on == 0){
beats_on = 1;
document.images.play_btn.src = play_1.src;
linktext[0]= "<b>Playing at "+ tem_val + " bpm</b><br/><font class='h_nav' onclick='help_show();'>Help</font>";
show_text(0,'music_bar');
run_beats();
}
else
{
beats_on = 0;
document.images.play_btn.src = play_0.src;
show_text(1,'music_bar');
}
}
//
function run_beats(){
if (beats_on == 1){
if (key_state[1]==1){window.setTimeout("play_beat1();",((tem_rate*dly_val)/100));}
if (key_state[2]==1){window.setTimeout("play_beat2();",((tem_rate*dly_val2)/100));}
if (key_state[3]==1){window.setTimeout("play_beat3();",((tem_rate*dly_val3)/100));}
if (key_state[4]==1){window.setTimeout("play_beat4();",((tem_rate*dly_val4)/100));}
if (key_state[5]==1){window.setTimeout("play_beat5();",((tem_rate*dly_val5)/100));}
if (key_state[6]==1){window.setTimeout("play_beat6();",((tem_rate*dly_val6)/100));}
if (key_state[7]==1){window.setTimeout("play_beat7();",((tem_rate*dly_val7)/100));}
if (key_state[8]==1){window.setTimeout("play_beat8();",((tem_rate*dly_val8)/100));}
if (key_state[9]==1){window.setTimeout("play_beat9();",((tem_rate*dly_val9)/100));}
if (key_state[10]==1){window.setTimeout("play_beat10();",((tem_rate*dly_val10)/100));}
if (key_state[11]==1){window.setTimeout("play_beat11();",((tem_rate*dly_val11)/100));}
if (key_state[12]==1){window.setTimeout("play_beat12();",((tem_rate*dly_val12)/100));}
//
window.setTimeout("run_beats();",tem_rate);
}
}
//
function play_beat1(){
soundManager.play('a1');
document.images.led_1.src =  led1_1.src ;
window.setTimeout("off_lite1();",flash_rate);
}
//
function off_lite1(){
document.images.led_1.src =  led1_0.src ;
}
//
function play_beat2(){
soundManager.play('a2');
document.images.led_2.src =  led2_1.src ;
window.setTimeout("off_lite2();",flash_rate);
}
//
function off_lite2(){
document.images.led_2.src =  led2_0.src ;
}
//
function play_beat3(){
soundManager.play('a3');
document.images.led_3.src =  led3_1.src ;
window.setTimeout("off_lite3();",flash_rate);
}
//
function off_lite3(){
document.images.led_3.src =  led3_0.src ;
}
//
function play_beat4(){
soundManager.play('a4');
document.images.led_4.src =  led4_1.src ;
window.setTimeout("off_lite4();",flash_rate);
}
//
function off_lite4(){
document.images.led_4.src =  led4_0.src ;
}
//
function play_beat5(){
soundManager.play('a5');
document.images.led_5.src =  led5_1.src ;
window.setTimeout("off_lite5();",flash_rate);
}
//
function off_lite5(){
document.images.led_5.src =  led5_0.src ;
}
//
function play_beat6(){
soundManager.play('a6');
document.images.led_6.src =  led6_1.src ;
window.setTimeout("off_lite6();",flash_rate);
}
//
function off_lite6(){
document.images.led_6.src =  led6_0.src ;
}
//
function play_beat7(){
soundManager.play('a7');
document.images.led_7.src =  led7_1.src ;
window.setTimeout("off_lite7();",flash_rate);
}
//
function off_lite7(){
document.images.led_7.src =  led7_0.src ;
}
//
function play_beat8(){
soundManager.play('a8');
document.images.led_8.src =  led8_1.src ;
window.setTimeout("off_lite8();",flash_rate);
}
//
function off_lite8(){
document.images.led_8.src =  led8_0.src ;
}
//
function play_beat9(){
soundManager.play('a9');
document.images.led_9.src =  led9_1.src ;
window.setTimeout("off_lite9();",flash_rate);
}
//
function off_lite9(){
document.images.led_9.src =  led9_0.src ;
}
//
function play_beat10(){
soundManager.play('a10');
document.images.led_10.src =  led10_1.src ;
window.setTimeout("off_lite10();",flash_rate);
}
//
function off_lite10(){
document.images.led_10.src =  led10_0.src ;
}
//
function play_beat11(){
soundManager.play('a11');
document.images.led_11.src =  led11_1.src ;
window.setTimeout("off_lite11();",flash_rate);
}
//
function off_lite11(){
document.images.led_11.src =  led11_0.src ;
}
//
function play_beat12(){
soundManager.play('a12');
document.images.led_12.src =  led12_1.src ;
window.setTimeout("off_lite12();",flash_rate);
}
//
function off_lite12(){
document.images.led_12.src =  led12_0.src ;
}
//
//tempo
var tThumb = document.getElementById("tem_set");
Drag.init(tThumb, null, 0, 150, 0, 0);
//
tThumb.onDragEnd = function(x, y){
t_val = Math.round(x);
tem_val = Math.round(2 + (t_val*1.4));
tem_rate = Math.round(60000/tem_val);
linktext[3]= "<b>Tempo - " + tem_val +"</b><br/>Beats per minute";
show_text(3,'music_bar');
};
//
// phase delays
var dThumb = document.getElementById("dly_set");
Drag.init(dThumb, null, 0, 100, 0, 0);
dThumb.onDragEnd = function(x, y){
d_val = Math.round(x);
dly_val = d_val;
linktext[4]= "<b>Delay - " + dly_val +" Percent</b>";
show_text(4,'music_bar');
};
//
var dThumb2 = document.getElementById("dly_set2");
Drag.init(dThumb2, null, 0, 100, 0, 0);
dThumb2.onDragEnd = function(x, y){
d_val2 = Math.round(x);
dly_val2 = d_val2;
linktext[4]= "<b>Delay - " + dly_val2 +" Percent</b>";
show_text(4,'music_bar');
};
//
var dThumb3 = document.getElementById("dly_set3");
Drag.init(dThumb3, null, 0, 100, 0, 0);
dThumb3.onDragEnd = function(x, y){
d_val3 = Math.round(x);
dly_val3 = d_val3;
linktext[4]= "<b>Delay - " + dly_val3 +" Percent</b>";
show_text(4,'music_bar');
};
//
var dThumb4 = document.getElementById("dly_set4");
Drag.init(dThumb4, null, 0, 100, 0, 0);
dThumb4.onDragEnd = function(x, y){
d_val4 = Math.round(x);
dly_val4 = d_val4;
linktext[4]= "<b>Delay - " + dly_val4 +" Percent</b>";
show_text(4,'music_bar');
};
//
var dThumb5 = document.getElementById("dly_set5");
Drag.init(dThumb5, null, 0, 100, 0, 0);
dThumb5.onDragEnd = function(x, y){
d_val5 = Math.round(x);
dly_val5 = d_val5;
linktext[4]= "<b>Delay - " + dly_val5 +" Percent</b>";
show_text(4,'music_bar');
};
//
var dThumb6 = document.getElementById("dly_set6");
Drag.init(dThumb6, null, 0, 100, 0, 0);
dThumb6.onDragEnd = function(x, y){
d_val6 = Math.round(x);
dly_val6 = d_val6;
linktext[4]= "<b>Delay - " + dly_val6 +" Percent</b>";
show_text(4,'music_bar');
};
//
var dThumb7 = document.getElementById("dly_set7");
Drag.init(dThumb7, null, 0, 100, 0, 0);
dThumb7.onDragEnd = function(x, y){
d_val7 = Math.round(x);
dly_val7 = d_val7;
linktext[4]= "<b>Delay - " + dly_val7 +" Percent</b>";
show_text(4,'music_bar');
};
//
//
var dThumb8 = document.getElementById("dly_set8");
Drag.init(dThumb8, null, 0, 100, 0, 0);
dThumb8.onDragEnd = function(x, y){
d_val8 = Math.round(x);
dly_val8 = d_val8;
linktext[4]= "<b>Delay - " + dly_val8 +" Percent</b>";
show_text(4,'music_bar');
};
//
var dThumb9 = document.getElementById("dly_set9");
Drag.init(dThumb9, null, 0, 100, 0, 0);
dThumb9.onDragEnd = function(x, y){
d_val9 = Math.round(x);
dly_val9 = d_val9;
linktext[4]= "<b>Delay - " + dly_val9 +" Percent</b>";
show_text(4,'music_bar');
};
//
var dThumb10 = document.getElementById("dly_set10");
Drag.init(dThumb10, null, 0, 100, 0, 0);
dThumb10.onDragEnd = function(x, y){
d_val10 = Math.round(x);
dly_val10 = d_val10;
linktext[4]= "<b>Delay - " + dly_val10 +" Percent</b>";
show_text(4,'music_bar');
};
//
var dThumb11 = document.getElementById("dly_set11");
Drag.init(dThumb11, null, 0, 100, 0, 0);
dThumb11.onDragEnd = function(x, y){
d_val11 = Math.round(x);
dly_val11 = d_val11;
linktext[4]= "<b>Delay - " + dly_val11 +" Percent</b>";
show_text(4,'music_bar');
};
//
var dThumb12 = document.getElementById("dly_set12");
Drag.init(dThumb12, null, 0, 100, 0, 0);
dThumb12.onDragEnd = function(x, y){
d_val12 = Math.round(x);
dly_val12 = d_val12;
linktext[4]= "<b>Delay - " + dly_val12 +" Percent</b>";
show_text(4,'music_bar');
};
//
//
function help_show() {
show_text(7,'music_bar');
}
//
function help_next(hlp_no) {
show_text(hlp_no,'music_bar');
}
// Online Help Start
//adapted from Link Description script- www.dynamicdrive.com
var linktext=new Array()
linktext[0]= "<b>Playing....</b><br/><font class='h_nav' onclick='help_show();'>Help</font>";
linktext[1]= "<b>Stopped Metronome</b><br/><font class='h_nav' onclick='help_show();'>Help</font>";
linktext[2]= "";
linktext[3]= ""; //vol
linktext[4]= ""; //dly
linktext[5]= ""; //key
linktext[6]= "";
linktext[7]="<img src='sw-on.png' align='left'>Select Beat - Click this to Turn ON - OFF a Note. <div  class='h_nav' onclick='help_next(8);'>Next</div>";
linktext[8]="<img src='play.png' align='left'>Play - Press Play to Start or Stop Metronome.<div class='h_nav'><font onclick='help_next(7);'>Prev</font>--<font onclick='help_next(9);'>Next</font></div>";
linktext[9]="<img src='pngs/a2-on.png' align='left'>LED - This will flash with Corresponding Sound.<div class='h_nav'><font onclick='help_next(8);'>Prev</font>--<font onclick='help_next(10);'>Next</font></div>";
linktext[10]="<img src='dly-track.jpg' align='left'><img src='crosshair.png' align='right'><br/>Sequence - Slide to Set.<div class='h_nav'><font onclick='help_next(9);'>Prev</font>--<font onclick='help_next(11);'>Next</font></div>";
linktext[11]="<img src='track.jpg' align='left'><img src='point.png' align='right'><br/>Tempo - Slide to Set.<div class='h_nav'><font onclick='help_next(10);'>Prev</font>--<font onclick='help_next(12);'>Next</font></div>";
linktext[12]="<img src='track.jpg' align='left'><img src='point.png' align='right'><br/>Volume - Slide to Set.<div class='h_nav'><font onclick='help_next(11);'>Prev</font>--<font onclick='help_next(13);'>Next</font></div>";
linktext[13]="How - ON Beats, Set all Sequence, Set Tempo - Play.<div class='h_nav'><font onclick='help_next(12);'>Prev</font>--<font onclick='help_next(14);'>Next</font></div>";
linktext[14]="More - After Stop, The Last Cycle of Beats will Still Play.<div class='h_nav'><font onclick='help_next(13);'>Prev</font>--<font onclick='help_next(15);'>Next</font></div>";
linktext[15]="<b><a target='_blank' href='http://sangear.googlepages.com/metronome'>Metronome Gadget Page</a></b><br/><br/><div class='h_nav'><font onclick='help_next(14);'>Prev</font>--<font onclick='help_next(7);'>Home</font></div>";
//
var ns6=document.getElementById&&!document.all
var ie=document.all

function show_text(thetext, whichdiv){
if (ie) eval("document.all."+whichdiv).innerHTML=linktext[thetext]
else if (ns6) document.getElementById(whichdiv).innerHTML=linktext[thetext]
}

function resetit(whichdiv){
if (ie) eval("document.all."+whichdiv).innerHTML=' '
else if (ns6) document.getElementById(whichdiv).innerHTML=' '
}
//  Online Help End