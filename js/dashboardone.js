const ctx = document.getElementById('myChart'); //haalt element op uit html
const ctxTwo = document.getElementById('mySecondChart');
const ctxThree = document.getElementById('myThirdChart');
const ctxFour = document.getElementById('myFourthChart');
const ctxFive = document.getElementById('myFifthChart');
let number = 0; //slaat 0 op in nuber
let higestArray = []; //lege array

fetch("/json/crypto.json") //fetched data
  .then(myData => myData.json())
  .then(jsonData => fetchFunc(jsonData)); //stuurt door naar functie

fetch("/json/cryptotwo.json") //herhaling
  .then(data => data.json())
  .then(myJson => cryptoFunc(myJson))

function cryptoFunc(myJson) {
  console.log(myJson);
  demoCrypto(myJson); //roept functie op

  let btc = myJson.data[0]; //haalt de eerste object op uit myjson.data
  let eth = myJson.data[1];
  let rip = myJson.data[2];
  let eos = myJson.data[3];
  let stel = myJson.data[4];
  let lit = myJson.data[5];


function checkHigestNumber(array){
  let higest = 0;
  for (let i = 0; i < array.length; i++) { //haalt hoogste nummer uit array eruit
    const number = array[i];
    if (higest < number) {
      higest = number;
    }

  } console.log(higest); higestArray.push(higest);
  console.log(higestArray);

  return higest, higestArray; //geeft terug
}

function demoCrypto(myJson){
  console.log("demoCrypto", myJson.data); 
   for (let i = 0; i < myJson.data.length; i++) {
    let crypto = myJson.data[i];
    let array = crypto.highestMonthlyPeakUsd;
    console.log(array);
    checkHigestNumber(array);
   }
}

  new Chart(ctxFour, { //maakt chart aan
    type: 'radar',
    data: {
      labels: [btc.symbol, eth.symbol, rip.symbol, eos.symbol, stel.symbol, lit.symbol],
      datasets: [{
        label: 'Supply',
        data: [higestArray[0], higestArray[1], higestArray[2], higestArray[3], higestArray[4], higestArray[5]],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function fetchFunc(jsonData) {
  console.log(jsonData);
  let btc = jsonData.data[0];
  let eth = jsonData.data[1];
  let rip = jsonData.data[2];
  let eos = jsonData.data[4];
  let stel = jsonData.data[5];
  let lit = jsonData.data[6];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [btc.symbol, eth.symbol, rip.symbol, eos.symbol, stel.symbol, lit.symbol],
      datasets: [{
        label: 'Usd comparison',
        data: [btc.priceUsd, eth.priceUsd, rip.priceUsd, eos.priceUsd, stel.priceUsd, lit.priceUsd],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(ctxThree, {
    type: 'doughnut',
    data: {
      labels: [btc.symbol, eth.symbol, eos.symbol, stel.symbol, lit.symbol],
      datasets: [{
        label: 'Max supply',
        data: [btc.higestArray, eth.maxSupply, eos.maxSupply, stel.maxSupply, lit.maxSupply],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(ctxFive, {
    type: 'polarArea',
    data: {
      labels: [btc.symbol, eth.symbol, rip.symbol, eos.symbol, stel.symbol, lit.symbol],
      datasets: [{
        label: 'changePercent24Hr',
        data: [btc.changePercent24Hr, eth.changePercent24Hr, eos.changePercent24Hr, stel.changePercent24Hr, lit.changePercent24Hr],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
