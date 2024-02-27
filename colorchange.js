let btn = document.querySelector("button")
let body = document.querySelector("body")
let para = document.querySelector("p")
btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 16777251)
    let getcode = "#" + random.toString(16)
    para.innerText=getcode
    body.style.backgroundColor = getcode;
})
// let color = ["a","b","c","d","e","f","g",1,2,3,4,5,6,7,8,9,0]
// btn.addEventListener("click",()=>{
//     for(let i =0; i<6; i++){
//         let random = Math.floor(Math.random()*color.length)
//         console.log(random)
//     }
//     body.style.backgroundColor = color;
// })