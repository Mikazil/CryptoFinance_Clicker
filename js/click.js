//Объявил переменные
let mymoney = 0;
let click = 1;
let clicker = document.getElementById("clicker");
let shopis = false;
let shop = document.getElementById("shopkey");
let kof = 0;
coinstartcheck();
onload();

//Отработчик нажатий на монетку
clicker.onclick = clickCheck;
function clickCheck() {
  if (localStorage.getItem("coinname") == "Coin") {
    mymoney = mymoney + 1;
  }
  else if (localStorage.getItem("coinname") == "Bitcoin") {
    mymoney = mymoney + intrandom(1, 5)
  }
  else if (localStorage.getItem("coinname") == "Dash") {
    mymoney = mymoney + 4;
  }
  else if (localStorage.getItem("coinname") == "Ethereum") {
    mymoney = mymoney + intrandom(3, 8);
  }
  else if (localStorage.getItem("coinname") == "Monero") {
    mymoney = mymoney + intrandom(10, 15);
  }
  else if (localStorage.getItem("coinname") == "Ripple") {
    mymoney = mymoney + 19;
  }
  else if (localStorage.getItem("coinname") == "Tron") {
    mymoney = mymoney + intrandom(25, 35);
  }
  else if (localStorage.getItem("coinname") == "USDT") {
    mymoney = mymoney + intrandom(3, 7);
  }
  else if (localStorage.getItem("coinname") == null) {
    localStorage.setItem("coinname", "Coin")
  }
  else {
    alert("ОШИБОЧКА ВЫШЛА");
  }

  localStorage.setItem('localmoney', mymoney);
  if (localStorage.getItem("localmoney") == "NaN") {
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
  if (shopis == false) {
    shopis = true;
    document.getElementById("main").style.display = "none";
  } else {
    shopis = false;
    document.getElementById("main").style.display = "flex";
  }
};


function onload() {
  mymoney = parseInt(localStorage.getItem('localmoney'));
  document.getElementById("mymoneynum").innerHTML = localStorage.getItem('localmoney');
}

function intrandom(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

function coinstartcheck() {
  if (localStorage.getItem("coinname") == "Coin") {
    clicker.src = "coins/coin.svg";
  }
  else if (localStorage.getItem("coinname") == "Bitcoin") {
    clicker.src = "coins/bitcoin.svg";
  }
  else if (localStorage.getItem("coinname") == "Dash") {
    clicker.src = "coins/dash.svg";
  }
  else if (localStorage.getItem("coinname") == "Ethereum") {
    clicker.src = "coins/ethereum.svg";
  }
  else if (localStorage.getItem("coinname") == "Monero") {
    clicker.src = "coins/monero.svg";
  }
  else if (localStorage.getItem("coinname") == "Ripple") {
    clicker.src = "coins/ripple.svg";
  }
  else if (localStorage.getItem("coinname") == "Tron") {
    clicker.src = "coins/tron.svg";
  }
  else if (localStorage.getItem("coinname") == "USDT") {
    clicker.src = "coins/usdt.svg";
  }
}