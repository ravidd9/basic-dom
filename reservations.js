const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}



const checkRes = function(){
    let name = document.getElementById("input").value
    const button = document.getElementById("button")
    if(reservations[name.toLowerCase()] && !reservations[name.toLowerCase()].claimed){
          document.getElementById("message").innerHTML = "welcome " + name
          reservations[name.toLowerCase()] = {claimed: true}
    }
    else if(reservations[name.toLowerCase()] && reservations[name.toLowerCase()].claimed){
        document.getElementById("message").innerHTML = "Hmm, someone already claimed this reservation Mr." + name
    }
    else if(!reservations[name.toLowerCase()]){
        document.getElementById("message").innerHTML = "you have no reservations, let me add one Mr." + name
        reservations[name.toLowerCase()] = {claimed: true}
    }
    console.log(reservations)   
}
button.onclick = checkRes


const box1 = document.createElement("div")
box1.setAttribute("class", "box")
const box2 = document.createElement("div")
box2.setAttribute("class", "box")
const box3 = document.createElement("div")
box3.setAttribute("class", "box")
const box4 = document.createElement("div")
box4.setAttribute("class", "box")
const box5 = document.createElement("div")
box5.setAttribute("class", "box")
const box6 = document.createElement("div")
box6.setAttribute("class", "box")
document.body.appendChild(box1)
document.body.appendChild(box2)
document.body.appendChild(box3)
document.body.appendChild(box4)
document.body.appendChild(box5)
document.body.appendChild(box6)
const changeColor = function(){
    let colors = ['#ff0000', '#00ff00', '#0000ff'];
    this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] 
    if(box1.style.backgroundColor == box2.style.backgroundColor ==
        box3.style.backgroundColor == box4.style.backgroundColor ==
        box5.style.backgroundColor == box6.style.backgroundColor){
            let nice = document.createElement("div")
            document.body.appendChild(nice)
            nice.innerHTML = "NICE"
        }
}
box1.onmouseenter = changeColor
box2.onmouseenter = changeColor
box3.onmouseenter = changeColor
box4.onmouseenter = changeColor
box5.onmouseenter = changeColor
box6.onmouseenter = changeColor






