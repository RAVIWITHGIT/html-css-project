$('.carousel-slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('#banner-slick').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

// Search Mobile
const inputSearch = document.querySelector(".input"); 
const btnSearch = document.querySelector(".icon");
const banner = document.querySelector(".banner");

btnSearch.addEventListener('click', function(e){
  inputSearch.classList.toggle("active");
})
banner.addEventListener('click', function(){
  inputSearch.classList.remove('active');
})


//----------------------------------------------------- map
let co = document.getElementById("cont")
let a= 0;
let t = setInterval(()  => {
    co.innerHTML = `<h1>${a} </h1>`

    if (a < 146) {
        a++;
    }
}, 10);
if (a == 100) {                                             
clearInterval(t)
}


let co2 = document.getElementById("cont2")
let c= 0;
let d = setInterval(()  => {
    co2.innerHTML = `<h1>${c} </h1>`

    if (c < 1472) {
        c++;
    }
}, 10);
if (c == 100) {                                             
clearInterval(d)
}


let co3 = document.getElementById("cont3")
let x= 0;
let y = setInterval(()  => {
    co3.innerHTML = `<h1>${x} </h1>`

    if (x < 200) {
        x++;
    }
}, 10);
if (x == 100) {                                             
clearInterval(y)
}

let co4 = document.getElementById("cont4")
let m= 0;
let n = setInterval(()  => {
    co4.innerHTML = `<h1>${m} </h1>`

    if (m < 300) {
        m++;
    }
}, 10);
if (a == 100) {                                             
clearInterval(n)
}




//----------------------------------------------------------- footer
let rajat = document.getElementById("count")
    let ao = 0;
    let ot = setInterval(() => {
        rajat.innerHTML = `<h1>${ao} </h1>`
        if (ao < 931) {
            ao++;
        }
    }, 10);
    if (ao == 100) {
        clearInterval(ot)
    }

    rajat.style.color = "#fff"