function CitySales(cityName, minCustomer, maxCustomer, avgCookieSaleHour) {
  this.cityName = cityName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSaleHour = avgCookieSaleHour;
  this.hourlySale = [];
  this.hourlyEmployee = [];
  this.totalSales = 0;
}

CitySales.prototype.hourlyListAndTotalPrint = function () {
  let controlCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.00, 0.7, 0.4, 0.6, 0.9, 0.68, 0.5, 0.3, 0.45];
  for (let i = 0; i < controlCurve.length; i++) {

    let randomHourly = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; // random function from https://www.w3schools.com/js/js_random.asp

    let randomHourlySale = Math.ceil(randomHourly * this.avgCookieSaleHour * controlCurve[i]);
    this.hourlySale.push(randomHourlySale); //recommend to Math.ceil to always round up. Better to have one extra cookie than one too few cookies.

    let employeeNeededHourly = Math.round(this.hourlySale[i] / 20); //adjust depending on rounding
    if (employeeNeededHourly < 2) {
      employeeNeededHourly = 2;
    }

    this.hourlyEmployee.push(employeeNeededHourly);
    this.totalSales += randomHourlySale;
  }
  this.hourlySale.push(this.totalSales);
  this.hourlySale.unshift(this.cityName);

  // this sets parent element for the table details
  let tBodySalesEl = document.getElementById('tbodySales');
  let tBodyEmployeeEl = document.getElementById('tbodyEmployee');
  //console.log(this.hourlySale);
  let trSalesEl = document.createElement('tr');
  tBodySalesEl.appendChild(trSalesEl);

  let trEmployeeEl = document.createElement('tr');
  tBodyEmployeeEl.appendChild(trEmployeeEl);
  // this sets the table row of cities
  let tdSalesEl = document.createElement('td');
  trSalesEl.appendChild(tdSalesEl);
  tdSalesEl.textContent = this.cityName;

  let tdEmployeeEl = document.createElement('td');
  trEmployeeEl.appendChild(tdEmployeeEl);
  tdEmployeeEl.textContent = this.cityName;
  // this sets up all numerical values, including the total sales at the end
  for (let i = 1; i < this.hourlySale.length; i++) { // prints numbers
    let tdSalesEl = document.createElement('td');
    trSalesEl.appendChild(tdSalesEl);
    tdSalesEl.textContent = this.hourlySale[i];
  }
  for (let i = 0; i < this.hourlyEmployee.length; i++) { // prints numbers
    let tdEmployeeEl = document.createElement('td');
    trEmployeeEl.appendChild(tdEmployeeEl);
    tdEmployeeEl.textContent = this.hourlyEmployee[i];
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


function totalRowPrint(cityObject) {

  let totalRowSales = [];
  for (let i = 0; i < cityObject[0].hourlySale.length; i++) {
    let totalColumn = 0;
    for (let j = 0; j < cityObject.length; j++) {
      totalColumn += cityObject[j].hourlySale[i];
    }
    totalRowSales.push(totalColumn);
  }

  let tBodyElement = document.getElementById('tfootSales');
  let trElement = document.createElement('tr');
  tBodyElement.appendChild(trElement);
  // this sets the table row of the total
  let tdElement = document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent = 'Total';
  // this sets up all numerical values, including the total sales at the end
  totalRowSales[0] = 'Total';
  for (let i = 1; i < totalRowSales.length; i++) { // prints numbers
    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = totalRowSales[i];
  }

  let totalRowEmployee = [];
  for (let i = 0; i < cityObject[0].hourlyEmployee.length; i++) {
    let totalColumn = 0;
    for (let j = 0; j < cityObject.length; j++) {
      totalColumn += cityObject[j].hourlyEmployee[i];
    }
    totalRowEmployee.push(totalColumn);
  }

  tBodyElement = document.getElementById('tfootEmployee');
  trElement = document.createElement('tr');
  tBodyElement.appendChild(trElement);
  // this sets the table row of the total
  tdElement = document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent = 'Total';
  // this sets up all numerical values, including the total sales at the end
  for (let i = 0; i < totalRowEmployee.length; i++) { // prints numbers
    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = totalRowEmployee[i];
  }


  //

  return totalRowSales;


}


totalRowPrint(cityObjArr);



