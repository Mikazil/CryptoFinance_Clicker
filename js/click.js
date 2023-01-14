//Объявил переменные
let mymoney = 0;
let click = 1;
let clicker = document.getElementById("clicker");
let shopis = false;
let shop = document.getElementById("shopkey");

//Отработчик нажатий на монетку
clicker.onclick = clickCheck;
function clickCheck() {
  mymoney = mymoney + click;
  localStorage.setItem('localmoney', mymoney);
  if (localStorage.getItem("localmoney") == "NaN"){
    localStorage.setItem('localmoney', 1);
    location.reload()
  }
  document.getElementById("mymoneynum").innerHTML = localStorage.getItem('localmoney');
};

//Отработчик анимации после нажатия
document.getElementsByClassName("coin")[0].addEventListener('click',
  function () {
    clicker.style.transform = "scale(1.15)";
    setTimeout(back, 260);
  })

//Функция для возврпащения монетки в исходное состояние
function back() {
  clicker.style.transform = "scale(1)"
}


shop.onclick = shopwindow;
function shopwindow() {
  if (shopis==false) {
    shopis=true;
    document.getElementById("main").style.display = "none";
  } else {
    shopis=false;
    document.getElementById("main").style.display = "flex";
  }
};


function onload(){
  mymoney = parseInt(localStorage.getItem('localmoney'));  
  document.getElementById("mymoneynum").innerHTML = localStorage.getItem('localmoney');

  
}