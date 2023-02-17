document.getElementById("btcbuy").onclick = btcbuyfunc;
function btcbuyfunc() {
  document.getElementById("prcard").style.display = "flex";
  document.getElementById("h1text").innerHTML = "Bitcoin";
  document.getElementById("prctext").innerHTML = "Вы будете получать<br>от 1 до 5 монет за каждое нажатие.";
  document.getElementById("shopwin").style.filter = "blur(7px)";
  document.getElementById("price").innerHTML = "499";
  nameC = document.getElementById("h1text").textContent;
};

document.getElementById("dashbuy").onclick = dashbuyfunc;
function dashbuyfunc() {
  document.getElementById("prcard").style.display = "flex";
  document.getElementById("h1text").innerHTML = "Dash";
  document.getElementById("prctext").innerHTML = "Вы будете получать<br> по 4 монеты за каждое нажатие.";
  document.getElementById("shopwin").style.filter = "blur(7px)";
  document.getElementById("price").innerHTML = "3499";
  nameC = document.getElementById("h1text").textContent;
};

document.getElementById("ethbuy").onclick = ethbuyfunc;
function ethbuyfunc() {
  document.getElementById("prcard").style.display = "flex";
  document.getElementById("h1text").innerHTML = "Ethereum";
  document.getElementById("prctext").innerHTML = "Вы будете получать<br>от 3 до 8 монет за каждое нажатие.";
  document.getElementById("shopwin").style.filter = "blur(7px)";
  document.getElementById("price").innerHTML = "7499";
  nameC = document.getElementById("h1text").textContent;
};

document.getElementById("monerobuy").onclick = monerobuyfunc;
function monerobuyfunc() {
  document.getElementById("prcard").style.display = "flex";
  document.getElementById("h1text").innerHTML = "Monero";
  document.getElementById("prctext").innerHTML = "Вы будете получать<br>от 10 до 15 монет за каждое нажатие.";
  document.getElementById("shopwin").style.filter = "blur(7px)";
  document.getElementById("price").innerHTML = "14999";
  nameC = document.getElementById("h1text").textContent;
};


document.getElementById("ripbuy").onclick = ripbuyfunc;
function ripbuyfunc() {
  document.getElementById("prcard").style.display = "flex";
  document.getElementById("h1text").innerHTML = "Ripple";
  document.getElementById("prctext").innerHTML = "Вы будете получать<br>по 19 монеты за <br>каждое нажатие.";
  document.getElementById("shopwin").style.filter = "blur(7px)";
  document.getElementById("price").innerHTML = "24999";
  nameC = document.getElementById("h1text").textContent;
};


document.getElementById("trxbuy").onclick = trxbuyfunc;
function trxbuyfunc() {
  document.getElementById("prcard").style.display = "flex";
  document.getElementById("h1text").innerHTML = "Tron";
  document.getElementById("prctext").innerHTML = "Вы будете получать<br>от 25 до 35 монет за каждое нажатие.";
  document.getElementById("shopwin").style.filter = "blur(7px)";
  document.getElementById("price").innerHTML = "34999";
  nameC = document.getElementById("h1text").textContent;
};

document.getElementById("usdtbuy").onclick = usdtbuyfunc;
function usdtbuyfunc() {
  document.getElementById("prcard").style.display = "flex";
  document.getElementById("h1text").innerHTML = "USDT";
  document.getElementById("prctext").innerHTML = "Вы будете получать<br>по 50 монет за <br>каждое нажатие.";
  document.getElementById("shopwin").style.filter = "blur(7px)";
  document.getElementById("price").innerHTML = "49999";
  nameC = document.getElementById("h1text").textContent;
};

document.getElementById("coinbuy").onclick = coinbuyfunc;
function coinbuyfunc() {
  document.getElementById("prcard").style.display = "flex";
  document.getElementById("h1text").innerHTML = "Coin";
  document.getElementById("prctext").innerHTML = "Вы будете получать 1  монету за каждое нажатие.";
  document.getElementById("shopwin").style.filter = "blur(7px)";
  document.getElementById("price").innerHTML = "249";
  nameC = document.getElementById("h1text").textContent;
};


document.getElementById("close").onclick = close;
function close() {
  document.getElementById("prcard").style.display = "none";
  document.getElementById("shopwin").style.filter = "blur(0px)";
}

document.getElementById("buy").onclick = buyfunc;
function buyfunc() {
  let price = Number(document.getElementById("price").textContent);
  if (nameC == "Coin") {
    localStorage.setItem("coinname", "Coin");
    clicker.src = "coins/coin.svg";
    document.getElementById("prcard").style.display = "none";
    document.getElementById("shopwin").style.filter = "blur(0px)";
  }
  else if (nameC == "Bitcoin") {
    localStorage.setItem("coinname", "Bitcoin");
    clicker.src = "coins/bitcoin.svg";
    document.getElementById("prcard").style.display = "none";
    document.getElementById("shopwin").style.filter = "blur(0px)";

  }
  else if (nameC == "Dash") {
    localStorage.setItem("coinname", "Dash");
    clicker.src = "coins/dash.svg";
    document.getElementById("prcard").style.display = "none";
    document.getElementById("shopwin").style.filter = "blur(0px)";

  }
  else if (nameC == "Ethereum") {
    localStorage.setItem("coinname", "Ethereum");
    clicker.src = "coins/ethereum.svg";
    document.getElementById("prcard").style.display = "none";
    document.getElementById("shopwin").style.filter = "blur(0px)";

  }
  else if (nameC == "Monero") {
    localStorage.setItem("coinname", "Monero");
    clicker.src = "coins/monero.svg";
    document.getElementById("prcard").style.display = "none";
    document.getElementById("shopwin").style.filter = "blur(0px)";

  }
  else if (nameC == "Ripple") {
    localStorage.setItem("coinname", "Ripple");
    clicker.src = "coins/ripple.svg";
    document.getElementById("prcard").style.display = "none";
    document.getElementById("shopwin").style.filter = "blur(0px)";

  }
  else if (nameC == "Tron") {
    localStorage.setItem("coinname", "Tron");
    clicker.src = "coins/tron.svg";
    document.getElementById("prcard").style.display = "none";
    document.getElementById("shopwin").style.filter = "blur(0px)";
  }
  else if (nameC == "USDT") {
    localStorage.setItem("coinname", "USDT");
    clicker.src = "coins/usdt.svg";
    document.getElementById("prcard").style.display = "none";
    document.getElementById("shopwin").style.filter = "blur(0px)";
  }
  if (mymoney >= price) {
    mymoney = mymoney - price;
    localStorage.setItem('localmoney', mymoney);
    document.getElementById("mymoneynum").innerHTML = localStorage.getItem('localmoney');
    nameC = document.getElementById("h1text").textContent;

  }
  else {
    document.getElementById("notification").style.filter = "opacity(1)";
    setTimeout(() => {  document.getElementById("notification").style.filter = "opacity(0)"; }, 3000);
  }


}

