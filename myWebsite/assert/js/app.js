const counters = document.querySelectorAll('.value');
const myarrow = document.querySelector("#myarrow")
// const togel = document.querySelector(".togel")
// const h = document.querySelector(".h")
// togel.addEventListener("click",()=>{
//     console.log(h.classList.contains("show"))
// })
const speed = 200;

counters.forEach(counter => {
  const animate = () => {
    const value = +counter.getAttribute('akhi');
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }

  }

  animate();
});



// hide arrow button on top
window.onscroll = function(){
  scrollfun()
}
function scrollfun(){
  if(document.documentElement.scrollTop>20){
    myarrow.style.display = "block"

  }else{
    myarrow.style.display = "none"

  }

}

// when click arrow button then go in top
myarrow.addEventListener("click",()=>{
  document.documentElement.scrollTop = 0;
})

