document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("mynavbar");

    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
  });


let myobj = {

}  
let get_element_for_change_color = ''
let cart_number = document.getElementById('cart_number')
function add(getg){
  let g = getg.parentElement.parentElement.parentElement.children[0].src.slice(60,62)
  if(myobj[g]){
    alert('out of stock')

  }else{
    let a = Number(cart_number.innerText)
    let b = a+1
    cart_number.innerText = b
    myobj[g] = 1
    getg.style.backgroundColor = "#7bed9f";
    get_element_for_change_color = getg

  }

}

function sub(getg){
  if(cart_number.innerText>0){
    let g = getg.parentElement.parentElement.parentElement.children[0].src.slice(60,62)
    if(getg.parentElement.children[0].style.backgroundColor = "#7bed9f"){
      getg.parentElement.children[0].style.backgroundColor = "white"

    }
    if(myobj[g]>=1){
      myobj[g]--
      let a = Number(cart_number.innerText)
      let b = a-1
      cart_number.innerText = b

    }
  }
}