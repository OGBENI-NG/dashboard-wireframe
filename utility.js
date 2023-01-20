function eth() {
    fetch('https://api.coingecko.com/api/v3/coins/ethereum')
    .then(res => res.json())
    .then(data => {
        document.querySelector('.crpto').innerHTML += `
        <div class="crpto-con">
        <div class="main-container">
            <div class="img-container">
                <img src="${data.image.thumb}" alt="btc-logo" class="logo">
                <h1 class="btc">ETH <span class="name">${data.name}</span></h1>
            </div>
            <div class="price-con">
                <span class="price">
                    &#8358 ${data.market_data.current_price.ngn.toLocaleString('en-US')}
                </span>
                <span class="price">
                    &#x24 ${data.market_data.current_price.usd.toLocaleString('en-US')}
                </span>
            </div>
        </div>  
    </div>             
        `
    })
}

function doge() {
    fetch(`https://api.coingecko.com/api/v3/coins/dogecoin`)
    .then(res => res.json())
    .then(data  => {
        document.querySelector('.crpto').innerHTML += `
        <div class="crpto-con">
            <div class="main-container">
                <div class="img-container">
                    <img src="${data.image.thumb}" alt="btc-logo" class="logo">
                    <h1 class="btc">Doge <span class="name">${data.name}</span></h1>
                </div>
                <div class="price-con">
                    <span class="price">
                        &#8358 ${data.market_data.current_price.ngn.toLocaleString('en-US')}
                    </span>
                    <span class="price">
                        &#x24 ${data.market_data.current_price.usd.toLocaleString('en-US')}
                    </span>
                </div>
            </div>  
        </div>
    `
    })
}


function renderAll() {
    fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`)
    .then( res => res.json())
    .then(data => {
        document.querySelector('.crpto').innerHTML = `
            <div class="crpto-con">
                <div class="main-container">
                    <div class="img-container">
                        <img src="${data.image.thumb}" alt="btc-logo" class="logo">
                        <h1 class="btc">BTC <span class="name">${data.name}</span></h1>
                    </div>
                    <div class="price-con">
                        <span class="price">
                            &#8358 ${data.market_data.current_price.ngn.toLocaleString('en-US')}
                        </span>
                        <span class="price">
                            &#x24 ${data.market_data.current_price.usd.toLocaleString('en-US')}
                        </span>
                    </div>
                </div>
                <div class="doge-container-eth"></div> 
            </div>
        `
       
    })
    setTimeout(eth, 500);
    setTimeout(doge, 1000)
}

function myClock() {
    const date = new Date();
    const time = [date.getHours(), date.getMinutes(),
        date.getSeconds()
    ];
    const clockDive = [document.querySelector(".hours"),
        document.querySelector(".minutes"),
        document.querySelector(".seconds")
    ];

    let hour = time[1] / 2 + time[0] * 30;

    clockDive[0].style.transform = "rotate(" + hour + "deg)";
    clockDive[1].style.transform = "rotate(" + time[1] * 6 + "deg)";
    clockDive[2].style.transform = "rotate(" + time[2] * 6 + "deg)";
}

export{ renderAll, myClock}