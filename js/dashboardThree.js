const tax = document.querySelector('.bar-chart'); //haalt element op uit html
const receipts = document.querySelector('.pie-chart');

const averagePrice = document.querySelector('.average');


fetch("https://mbo-sd.nl/apiv2/basic-cash-register") //fetched aangegeven data
  .then(myData => myData.json())
  .then(jsonData => { // geeft parameter door aan de functies
    createChartOne(jsonData);
    createChartTwo(jsonData);
    createChartThree(jsonData);
  })

function createChartOne(jsonData) {
  console.log(jsonData); //logt jsondata
  let products = jsonData.products;

  let taxTwentyOne = 0; //maakt variable aan met de waarde 0
  let taxNine = 0;
  let taxZero = 0;
  for (let i = 0; i < products.length; i++) {  //loopt door de lengte van products heen
    const product = products[i];
    // console.log(product.tax);

    if (product.tax == 9) {
      taxNine += 1;
    } else if (product.tax == 21) {
      taxTwentyOne += 1;
    } else {
      taxZero += 1;
    }
  }

  const dataZero = {
    label: '0%',
    data: taxZero
  };
  const dataNine = {
    label: '9%',
    data: taxNine
  }

  const dataTwentyOne = {
    label: '21%',
    data: taxTwentyOne
  }

  new Chart(tax, { //zet chart in html

    type: 'bar',
    data: {
      labels: ['0%', '9%', '21%',],
      datasets: [{
        label: 'Tax',
        data: [
          dataZero.data, dataNine.data, dataTwentyOne.data
        ],
        borderWidth: 0.1,

      },

      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
  )
}



function createChartTwo(jsonData) {

  let allIds = []; //maakt lege array aan
  let allIdcount = [];

  const myIdOne = [];
  const myIdTwo = [];
  const myIdThree = [];
  const myIdFour = [];
  const myIdFive = [];
  const myIdSix = [];
  const myIdSeven = [];

  let products = jsonData.receipts;
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    // console.log(product);
    for (let i2 = 0; i2 < product.length; i2++) {
      const itemOne = product[i2];
      let getIDs = itemOne.category_id;
      // console.log(getIDs);


      if (getIDs == 1) { //if statement die dingen pushed in een array
        myIdOne.push(getIDs)
      } else if (getIDs == 2) {
        myIdTwo.push(getIDs)
      } else if (getIDs == 3) {
        myIdThree.push(getIDs)
      } else if (getIDs == 4) {
        myIdFour.push(getIDs)
      } else if (getIDs == 5) {
        myIdFive.push(getIDs)
      } else if (getIDs == 6) {
        myIdSix.push(getIDs)
      } else if (getIDs == 7) {
        myIdSeven.push(getIDs)
      }
    }

  }



  for (key in products) { //key value
    allIds.push(products[key])
  }

  allIdcount.push(
    myIdOne.length, //pushed lengte van array
    myIdTwo.length,
    myIdThree.length,
    myIdFour.length,
    myIdFive.length,
    myIdSix.length,
    myIdSeven.length
  );

  const allLabels = jsonData.categories;


  new Chart(receipts, { //maakt chart

    type: 'pie',
    data: {
      labels: allLabels,
      datasets: [{
        label: 'receipts',
        data: allIdcount,
        borderWidth: 0.1,

      },

      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
  )

}



function createChartThree(jsonData) { //moeilijke berekening
  console.log(jsonData)
let total = 0;

  for (let i = 0; i < jsonData.receipts.length; i++) {
    const receipt = jsonData.receipts[i];
    console.log(receipt)



    for (let j = 0; j < receipt.length; j++) {
      const product = receipt[j];
      
    total =  total + product.price;
    }

  }

  let average = total / jsonData.receipts.length;

  console.log(total)
  console.log(average);
  averagePrice.textContent += average.toFixed (2);
}