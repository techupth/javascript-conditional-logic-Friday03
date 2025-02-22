//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
let show;
    lightBulbStatus === "On"
    ? (show = "Light bulb is On.")
    : lightBulbStatus === "Off"
    ? (show = "Light bulb is Off.")
    : lightBulbStatus === "Broken"
    ? (show = "Light bulb is Broken.")
    : (show = "Please choose the correct input (On/Off/Broken)")

console.log(show)
