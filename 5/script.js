const container = document.querySelector(".container");
const btn = document.querySelector(".button");
function generateImgNum() {
  return Math.floor(Math.random() * 1000 + 1);
}
function randomImg() {
  btn.addEventListener("click", () => {
    container.innerHTML += `<img src="https://picsum.photos/400?random=${generateImgNum()}" >`;
    container.innerHTML += `<img src="https://picsum.photos/400?random=${generateImgNum()}" >`;
    container.innerHTML += `<img src="https://picsum.photos/400?random=${generateImgNum()}" >`;
    container.innerHTML += `<img src="https://picsum.photos/400?random=${generateImgNum()}" >`;
    console.log("button clicked");
  });
}
randomImg()
