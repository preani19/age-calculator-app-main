let f = document.forms[0]
let date = document.querySelectorAll("input")

function calculateAge(birthDate) {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust months and years if needed
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return [ years, months, days ];
}

f.addEventListener("submit", (e) => {
    e.preventDefault()
    if(date[0].value > 31 || date[1].value > 12 || date[2].value > 2025){
        erro()
    }
    else{
        let bd = new Date(`${date[2].value}-${date[1].value}-${date[0].value}`)
        let t = calculateAge(bd)
        document.querySelector(".years").innerHTML=t[0]
        document.querySelector(".months").innerHTML=t[1]
        document.querySelector(".days").innerHTML=t[2]
    }
    
    
    
})


function erro(){
    for(i=0;i<3;i++){
        date[i].style.borderColor="#ff5757"
    }
    let p = document.createElement("p")
    let t = document.createTextNode("Not valid")
    p.appendChild(t)
    p.style.color = "#ff5757"
    document.querySelector(".input").appendChild(p)
}