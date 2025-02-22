//Exercise 2
let lightBulbStatus = "On";
lightBulbStatus = "Broken";
let show;
 if (lightBulbStatus === "On"){
    show = "Light bulb is On."
 } else if (lightBulbStatus === "Off") {
    show = "Light bulb is Off."
 } else if (lightBulbStatus === "Broken") {
    show = "Light bulb is Broken."
 } else {show = "Please choose the correct input (On/Off/Broken)"}

 console.log(show)