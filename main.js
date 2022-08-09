let dateList = document.getElementById("datelist")
let daysEl = document.getElementById("days")
let hoursEl = document.getElementById("hours")
let minsEl = document.getElementById("mins")
let secsEl = document.getElementById("secs")
let title = document.getElementById("occasion")

dateList.addEventListener("change", ()=>{
    let dayName = dateList.options[dateList.selectedIndex].textContent
    title.textContent = dayName
    setInterval(updateTime, 200)
})

function updateTime(){
    let occasion = dateList.options[dateList.selectedIndex].value
    let destinDate = new Date(occasion)
    let newDate = new Date()
    let diff = destinDate - newDate
    let secs = Math.floor((diff / 1000) % 60)
    let mins = Math.floor((diff / 1000 / 60) % 60)
    let hours = Math.floor((diff / 1000 / 60 / 60) % 24)
    let days = Math.floor(diff / 1000 / 60 / 60 / 24)

    secsEl.textContent = format(secs)
    minsEl.textContent = format(mins)
    hoursEl.textContent = format(hours)
    daysEl.textContent = format(days)

    function format(e){
        return ("0"+e).length > 2 ? e : "0"+e
    }
}