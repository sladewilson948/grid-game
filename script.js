

const body = document.body
const icon = document.getElementById("icon")
const text = document.getElementById("text")
const alltiles = [...document.getElementsByClassName("tile")]
const reset = document.getElementById("reset")
const time = document.getElementById("time")
const start = document.getElementById("start")
const colored = document.getElementById("colored")
const res = document.getElementById("res")
const finalscore = document.getElementById("finalscore")
const score = document.getElementById("score")
alltiles.forEach(x=> {
    x.style.backgroundColor = `rgb(177, 174, 174)`
})
let count = 0
let flag = true
let id





start.addEventListener("click", ()=> {
    
    
    alltiles.forEach(x=> {
        x.style.backgroundColor = `rgb(177, 174, 174)`
    })
    count = 0
    colored.textContent = "0"
    id = setInterval(()=>{
        let val1 = time.textContent

        if(val1==0)
            {
                
                time.textContent = "Game Over"
                clearInterval(id)
                finalscore.style.display = "flex"
                score.textContent = count

            }
        else{
            time.textContent = val1-1
        }
    }, 1000)

    




})

reset.addEventListener("click", ()=> {
    
    
    
    alltiles.forEach(x=> {
        x.style.backgroundColor = `rgb(177, 174, 174)`
    })
    count = 0
    colored.textContent = "0"
    time.textContent = "30"
    finalscore.style.display = "none"
    score.textContent = "0"
    clearInterval(id)
    

})

icon.addEventListener("click", ()=> {

    if(flag)
        {
            body.style.backgroundColor = "black"
            icon.style.color = "white"
            text.style.color = "white"
            res.style.color = "white"
            flag = false
        }
    else{

            body.style.backgroundColor = "white"
            icon.style.color = "black"
            text.style.color = "black"
            res.style.color = "black"
            flag = true
    }
})

alltiles.forEach(x =>{
    x.addEventListener("mouseenter", ()=> {
        let c1 = x.style.backgroundColor
        if(c1==`rgb(177, 174, 174)`)
            {
                count+=1
                colored.textContent = String(count)
            }
        x.style.backgroundColor = getColor()
    })

    
})



function getColor()
{
    let c1 = Math.floor(Math.random()*255)
    let c2 = Math.floor(Math.random()*255)
    let c3 = Math.floor(Math.random()*255)


    return `rgb(${c1}, ${c2}, ${c3})`
}

