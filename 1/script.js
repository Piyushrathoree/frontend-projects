// const body=document.querySelector("body")
// body.addEventListener('mousemove',(event)=>{
//     let posX=event.offsetX;
//     let posY=event.offsetY;
//     const span=document.createElement('span')
//     span.style.left=posX+'px'
//     span.style.top=posY+'px'
//     body.appendChild(span)
//     const size=Math.random()*100;
//     span.style.width=size+'px'
//     span.style.height=size+'px'
//     setTimeout(() => {
//         span.remove();
//     }, 3000);
// console.log(event)

// })


const body=document.querySelector('body')
body.addEventListener('mousemove',(event)=>{

    const posX=event.offsetX;
    const posY=event.offsetY;
    const span=document.createElement('span')
    span.style.left=posX+'px'
    span.style.top=posY+'px'
    body.appendChild(span)
    const size=Math.random()*100;
    span.style.width=size+'px'
    span.style.height=size+'px'
    setTimeout(() => {
        span.remove();
    }, 3000);
})