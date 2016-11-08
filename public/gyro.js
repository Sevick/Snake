/**
 * Created by S on 05.11.2016.
 */

var DIRECTION_UP=0;
var DIRECTION_LEFT=3;
var DIRECTION_RIGHT=1;
var DIRECTION_DOWN=2;

function gyroControls(event) {
    var tiltLR = event.gamma;             // gamma is the left-to-right tilt in degrees, where right is positive
    var tiltUD = event.beta;              // beta is top-top-bottom tilt


    // substract initial device position
    if (typeof(startTiltLR) === 'undefined') {
        startTiltLR = tiltLR;
    }
    else {
        tiltLR = tiltLR - startTiltLR;
    }
    if (typeof(startTiltUD) === 'undefined') {
        startTiltUD = tiltUD;
    }
    else{
        tiltUD=tiltUD-startTiltUD;
    }


    // rotate controls according to current screen orientation
    var lrSign=Math.sign(parseFloat(tiltLR));
    var udSign=Math.sign(parseFloat(tiltUD));
    var innerHTML="lrSign="+lrSign+" udSign="+udSign+"<br>"+"    lastTiltLR="+lastTiltLR+"  lastTiltUD="+lastTiltUD+"<br>lrSign!=lastTildLR="+(lrSign!=lastTiltLR);
    //console.log("lrSign="+lrSign+" udSign="+udSign+"    lastTiltLR="+lastTiltLR+"  lastTiltUD="+lastTiltUD+"   lrSign!=lastTildLR="+(lrSign!=lastTiltLR));
    //document.getElementById("debug").innerHTML=innerHTML;

    if (tiltLR*lrSign<5){
        lrSign=0;
    }
    if (tiltUD*udSign<5){
        udSign=0;
    }

    //document.getElementById("debug").innerHTML=window.orientation;

    var controls=[DIRECTION_LEFT,DIRECTION_DOWN,DIRECTION_RIGHT,DIRECTION_UP];
    var controlNames=['DIRECTION_LEFT','DIRECTION_DOWN','DIRECTION_RIGHT','DIRECTION_UP'];

    var rotationCount=0;
    switch (window.orientation) {
        case 0:
            rotationCount = 0;
            break;
        case 90:
            controls=[DIRECTION_DOWN,DIRECTION_LEFT,DIRECTION_RIGHT,DIRECTION_UP];
            controlNames=['DIRECTION_DOWN','DIRECTION_LEFT','DIRECTION_RIGHT','DIRECTION_UP'];
            rotationCount = 1;
            break;
        case 180:
            controls=[DIRECTION_RIGHT,DIRECTION_UP,DIRECTION_LEFT,DIRECTION_DOWN];
            controlNames=['DIRECTION_RIGHT','DIRECTION_UP','DIRECTION_LEFT','DIRECTION_DOWN'];
            rotationCount = 2;
            break;
        case -90:
            controls=[DIRECTION_UP,DIRECTION_RIGHT,DIRECTION_LEFT,DIRECTION_DOWN];
            controlNames=['DIRECTION_UP','DIRECTION_RIGHT','DIRECTION_LEFT','DIRECTION_DOWN'];
            rotationCount = 3;
            break;
    }

    if (lrSign!=lastTiltLR){
        lastTiltLR=lrSign;
        if (lrSign>0) {
            document.getElementById("debug").innerHTML=controlNames[3];
            console.log("gyroRight");
            sendUserControl(controls[3]);
        }
        if (lrSign<0) {
            document.getElementById("debug").innerHTML=controlNames[0];
            console.log("gyroLeft");
            sendUserControl(controls[0]);
        }
    }
    if (udSign!=lastTiltUD){
        lastTiltUD=udSign;
        if (udSign>0) {
            document.getElementById("debug").innerHTML=controlNames[2];
            console.log("gyroDown");
            sendUserControl(controls[2]);
        }
        if (udSign<0){
            document.getElementById("debug").innerHTML=controlNames[1];
            console.log("gyroUp");
            sendUserControl(controls[1]);
        }
    }
}

/*
 function motion(event){
 console.log("Accelerometer: "
 + event.accelerationIncludingGravity.x + ", "
 + event.accelerationIncludingGravity.y + ", "
 + event.accelerationIncludingGravity.z
 );
 var accX = Math.round(event.accelerationIncludingGravity.x*10) / 10;
 var accY = Math.round(event.accelerationIncludingGravity.y*10) / 10;

 movement = 10;

 xA = -(accX / 10) * movement;
 yA = -(accY / 10) * movement;
 }
 */