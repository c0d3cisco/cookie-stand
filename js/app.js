function CitySales(cityName, minCustomer, maxCustomer, avgCookieSaleHour) {
  this.cityName = cityName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSaleHour = avgCookieSaleHour;
  this.hourlySale = [];
  this.totalSales= 0;
}

CitySales.prototype.hourlyListAndTotalPrint = function() {

  for (let i = 0; i < 15; i++) {
    let randomHourly = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; // random function from https://www.w3schools.com/js/js_random.asp
    let randomHourlySale = Math.ceil(randomHourly * this.avgCookieSaleHour);
    this.hourlySale.push(randomHourlySale); //recommend to Math.ceil to always round up. Better to have one extra cookie than one too few cookies.
    this.totalSales += randomHourlySale;
  }
  this.hourlySale.push(this.totalSales);
  this.hourlySale.shift(this.cityName);

  // this sets parent element for the table details
  let tBodyElement = document.getElementById('tbodyTest');
  //console.log(this.hourlySale);
  let trElement = document.createElement('tr');
  tBodyElement.appendChild(trElement);
  // this sets the table row of cities
  let tdElement = document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent = this.cityName;;
  // this sets up all numerical values, including the total sales at the end
  for (let i = 0; i < this.hourlySale.length; i++) { // prints numbers
    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = this.hourlySale[i];
  }
};
let cityObjArr = [];
cityObjArr[0] = new CitySales('Seattle', 23, 65, 6.3);
cityObjArr[1] = new CitySales('Tokyo', 3, 24, 1.2);
cityObjArr[2] = new CitySales('Dubai', 11, 38, 3.7);
cityObjArr[3] = new CitySales('Paris', 20, 38, 6.3);
cityObjArr[4] = new CitySales('Lima', 2, 65, 6.3);

for (let i = 0; i < cityObjArr.length; i++) {
  cityObjArr[i].hourlyListAndTotalPrint();
}


function totalRow(cityObject){

  let totalRow = [];
  for (let i = 0; i < cityObject[0].hourlySale.length; i++) {
    let totalColumn = 0;
    for (let j = 0; j < cityObject.length; j++) {
      totalColumn += cityObject[j].hourlySale[i];
    }
    totalRow.push(totalColumn);
  }

  let tBodyElement = document.getElementById('tbodyTest');
  let trElement = document.createElement('tr');
  tBodyElement.appendChild(trElement);
  // this sets the table row of the total
  let tdElement = document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent = 'Total';
  // this sets up all numerical values, including the total sales at the end
  for (let i = 0; i < totalRow.length; i++) { // prints numbers
    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = totalRow[i];
  }
}

totalRow(cityObjArr);
