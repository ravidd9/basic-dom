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
box1.setAttribute("id", "box1")
const box2 = document.createElement("div")
box2.setAttribute("class", "box")
box2.setAttribute("id", "box2")
const box3 = document.createElement("div")
box3.setAttribute("class", "box")
box3.setAttribute("id", "box3")
const box4 = document.createElement("div")
box4.setAttribute("class", "box")
box4.setAttribute("id", "box4")
const box5 = document.createElement("div")
box5.setAttribute("class", "box")
box5.setAttribute("id", "box5")
const box6 = document.createElement("div")
box6.setAttribute("class", "box")
box6.setAttribute("id", "box6")
document.body.appendChild(box1)
document.body.appendChild(box2)
document.body.appendChild(box3)
document.body.appendChild(box4)
document.body.appendChild(box5)
document.body.appendChild(box6)
const changeColor = function(){
    let colors = ['red', 'blue', 'green'];
    this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] 
    cols[this.id[3]-1] = this.style.backgroundColor
    checkCol(cols)
}
const checkCol = function(cols){
    nice.innerHTML = cols
    for(let index in cols)
    {
        if(cols[index] != cols[0])
            return
    }
    nice.innerHTML = "NICE"
}
let nice = document.createElement("div")
document.body.appendChild(nice)
let cols = ["", "", "", "", "", ""]
box1.onmouseenter = changeColor
box2.onmouseenter = changeColor
box3.onmouseenter = changeColor
box4.onmouseenter = changeColor
box5.onmouseenter = changeColor
box6.onmouseenter = changeColor






