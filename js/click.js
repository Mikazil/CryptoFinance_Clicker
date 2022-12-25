//Объявил переменные
let mymoney = 0;
let click = 1;
var clicker = document.getElementById("clicker");
const main = document.getElementById("main");
const shop = document.getElementById("shopwin");
//Отработчик нажатий на монетку
clicker.onclick = clickCheck;
function clickCheck() {
  mymoney = mymoney + click;
  document.getElementById("mymoneynum").innerHTML = mymoney;
};

//Отработчик анимации после нажатия
document.getElementsByClassName("coin")[0].addEventListener('click',
  function () {
    clicker.style.transform = "scale(1.15)";
    setTimeout(back, 260);
  })

//Функция для возвращения монетки в исходное состояние
function back() {
  clicker.style.transform = "scale(1)"
}

function main(){
  main.style.display = "none";
  shop.style.display = "block";
}

function shop(){
 main.style.display = "none";
 shop.style.display = "block";
}

