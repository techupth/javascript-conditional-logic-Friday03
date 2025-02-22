//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

let show;

switch (lightBulbStatus) {
    case "On":
    show = "Light bulb is On."
    break
    case "Off":
    show = "Light bulb is Off."
    break
    case "Broken":
    show = "Light bulb is Broken."
    break
    default:
    show = "Please choose the correct input (On/Off/Broken)"
}
console.log(show)