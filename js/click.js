//Объявил переменные
let mymoney = 0;
let click = 1;
let clicker = document.getElementById("clicker");
let shopis = false;
let shop = document.getElementById("shopkey");
let nameC = "Coin";
let kof = 0;




//Отработчик нажатий на монетку
clicker.onclick = clickCheck;
function clickCheck() {
  if(nameC=="Coin")
  {
    mymoney = mymoney + click;
  }
  else if(nameC=="Bitcoin"){
    kof = Math.random() * (2 - 0.1) + 0.1;
    kof=kof.toFixed(1);
    mymoney = Math.ceil(mymoney * kof);
  }
  else{
    alert("ОШИБОЧКА ВЫШЛА");
  }
  
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




