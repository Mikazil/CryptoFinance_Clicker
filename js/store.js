

document.getElementById("btcbuy").onclick = btcbuyfunc;
function btcbuyfunc() {
    document.getElementById("prcard").style.display = "flex";
    document.getElementById("h1text").innerHTML = "Bitcoin";
    document.getElementById("prctext").innerHTML = "Ваши монеты имеют множитель от 0.1x до 2x.";
    document.getElementById("shopwin").style.filter = "blur(7px)";
    document.getElementById("price").innerHTML = "299";
};

document.getElementById("dashbuy").onclick = dashbuyfunc;
function dashbuyfunc() {
    document.getElementById("prcard").style.display = "flex";
    document.getElementById("h1text").innerHTML = "Dash";
    document.getElementById("prctext").innerHTML = "Вы будете получать<br> по 2 монеты за каждое нажатие.";
    document.getElementById("shopwin").style.filter = "blur(7px)";
    document.getElementById("price").innerHTML = "999";
};

document.getElementById("ethbuy").onclick = ethbuyfunc;
function ethbuyfunc() {
    document.getElementById("prcard").style.display = "flex";
    document.getElementById("h1text").innerHTML = "Ethereum";
    document.getElementById("prctext").innerHTML = "Вы будете получать<br>от 1 до 4 монет за каждое нажатие.";
    document.getElementById("shopwin").style.filter = "blur(7px)";
    document.getElementById("price").innerHTML = "300";
};

document.getElementById("monerobuy").onclick = monerobuyfunc;
function monerobuyfunc() {
    document.getElementById("prcard").style.display = "flex";
    document.getElementById("h1text").innerHTML = "Monero";
    document.getElementById("prctext").innerHTML = "Вы будете получать<br>от 1 до 20 монет за каждое нажатие.";
    document.getElementById("shopwin").style.filter = "blur(7px)";
    document.getElementById("price").innerHTML = "300";
};


document.getElementById("ripbuy").onclick = ripbuyfunc;
function ripbuyfunc() {
    document.getElementById("prcard").style.display = "flex";
    document.getElementById("h1text").innerHTML = "Ripple";
    document.getElementById("prctext").innerHTML = "Вы будете получать<br>по 3 монеты за <br>каждое нажатие.";
    document.getElementById("shopwin").style.filter = "blur(7px)";
    document.getElementById("price").innerHTML = "300";
};


document.getElementById("trxbuy").onclick = trxbuyfunc;
function trxbuyfunc() {
    document.getElementById("prcard").style.display = "flex";
    document.getElementById("h1text").innerHTML = "Tron";
    document.getElementById("prctext").innerHTML = "Вы будете получать<br>от 7 до 15 монет за каждое нажатие.";
    document.getElementById("shopwin").style.filter = "blur(7px)";
    document.getElementById("price").innerHTML = "300";
};

document.getElementById("usdtbuy").onclick = usdtbuyfunc;
function usdtbuyfunc() {
    document.getElementById("prcard").style.display = "flex";
    document.getElementById("h1text").innerHTML = "USDT";
    document.getElementById("prctext").innerHTML = "Вы будете получать<br>от 3 до 7 монет за каждое нажатие.";
    document.getElementById("shopwin").style.filter = "blur(7px)";
    document.getElementById("price").innerHTML = "300";
};

document.getElementById("coinbuy").onclick = coinbuyfunc;
function coinbuyfunc() {
    document.getElementById("prcard").style.display = "flex";
    document.getElementById("h1text").innerHTML = "Coin";
    document.getElementById("prctext").innerHTML = "Вы будете получать 1  монету за каждое нажатие.";
    document.getElementById("shopwin").style.filter = "blur(7px)";
    document.getElementById("price").innerHTML = "300";
};


document.getElementById("close").onclick = close;
function close() {
    document.getElementById("prcard").style.display = "none";
    document.getElementById("shopwin").style.filter = "blur(0px)";
}

document.getElementById("buy").onclick = buyfunc;
function buyfunc() {
    let price=Number(document.getElementById("price").textContent);
    
    if(mymoney >= price){
        mymoney=mymoney-price;
        localStorage.setItem('localmoney', mymoney);
        document.getElementById("mymoneynum").innerHTML = localStorage.getItem('localmoney');
        nameC = document.getElementById("h1text").textContent;
        
    }
    else{
        alert("Деньжат, то нет")
    }
}

