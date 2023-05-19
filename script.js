setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock()
{
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio =(minutesRatio +  currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

//Alarm

setAlarmBtn = document.querySelector("button")
const currentTime=document.querySelector("h1")
selectMenu=document.querySelectorAll("select")
for (let i = 12; i > 0; i--) {
    i=i<10 ? "0" + i: i;
    let option = `<option value=>${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
   // console.log(i)
    
}

for (let i = 59; i >= 0; i--) {
    i=i<10 ? "0" + i: i;
    let option = `<option value=>${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
   // console.log(i)
    
}

for (let i = 2; i > 0; i--) {
   let ampm= i ==1 ? "AM" : "PM";
    let option = `<option value=>${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
   // console.log(i)
    
}

setInterval(()=>{
    let data=new Date();
    h=data.getHours(),
    m=data.getMinutes(),
    s=data.getSeconds(),
    ampm="AM";

    if (h >=12) {
        h=h-12;
        ampm="PM";
    }
    //If hour value is 0, set this value to 12
    h = h == 0 ? h = 12 : h;
    //adding 0 before hr, min, sec if this value is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText=(`${h}:${m}:${s} ${ampm}`);
}, 1000);

function setAlarm(){
    //get hour, minutes ampm
    let time= `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}:)`;
    //console.log(time);
    if(time.includes("Hour") || time.includes("Minute") || time.includes(AM/PM)){
        return alert("Select a Valid Time");
    }


}
setAlarmBtn.addEventListner("click", setAlarm)