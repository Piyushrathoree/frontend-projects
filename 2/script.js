const container = document.querySelector(".container");
let career = ["web developer", "freelancer", "engineer"];

let careerNum = 0;
let numIndex = 0;
function textUpdate() {
  container.innerHTML = `<h1><i>I am a ${career[careerNum].slice(
    0,
    numIndex
  )}</i></h1>`;

  numIndex++;

  if(numIndex==career[careerNum].length+1){
    careerNum++;
    numIndex=0;
  }
  if(careerNum===career.length){
    careerNum=0
  }
setTimeout(textUpdate, 150);



//this is my logic but it can only display names not show every character one by one
  //     setInterval(()=>{
  //    container.innerHTML=`<h1><i>I am a ${career[careerNum].slice(0,numIndex)}</i></h1>`;
  //    careerNum++
  //    if(careerNum===3){
  //     careerNum=0;
  //    }
  // },
  // 1000)
}
textUpdate();
