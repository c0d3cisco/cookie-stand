// let cityMaster = [
//   //[city, min/cust, max/cust, avg/sales]
//   ['Seattle', 23, 65, 6.3],
//   ['Tokyo', 3, 24, 1.2],
//   ['Dubai', 11, 38, 3.7],
//   ['Paris', 20, 38, 6.3],
//   ['Lima', 2, 65, 6.3],
// ];

const hourArrayString = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ', '7pm: ', 'Total: ']; //sets the string of the message and the total hours of the day in an array. Can be automated for user to adjust hours, but needed to hard code for now.


function hourlyListPrintingFunction(cityObject){
  //calling this method will create an array per items of each city

  for(let i = 0; i < hourArrayString.length-1; i++){
    let randomHourly = Math.floor(Math.random() * (cityObject.maxCustomer - cityObject.minCustomer + 1)) + cityObject.minCustomer; // random function from https://www.w3schools.com/js/js_random.asp
    console.log(randomHourly);
    let randomHourlySale = Math.ceil(randomHourly*cityObject.avgCookieSaleHour);
    cityObject.totalSales = cityObject.totalSales + randomHourlySale;
    cityObject.hourlySale.push(hourArrayString[i]+randomHourlySale+' cookies'); //recommend to Math.ceil to always round up. Better to have one extra cookie than one too few cookies.
  }
  console.log(hourArrayString[hourArrayString.length-1]);
  cityObject.hourlySale.push(hourArrayString[hourArrayString.length-1]+cityObject.totalSales+' cookies');
 
  let printArray = cityObject.hourlySale;
  let elementID = cityObject.targetElement;
  let hourlyList = document.getElementById(elementID);

  //   creating title
  let h2Element = document.createElement('h2');
  h2Element.textContent = cityObject.cityName;
  console.log(h2Element);
  hourlyList.appendChild(h2Element);

  //   creating list
  for(let i=0; i<printArray.length; i++){ // prints numbers
    let liElement = document.createElement('li');
    liElement.textContent = printArray[i];
    hourlyList.appendChild(liElement);
  }
}



let seattle = { //Varies per city: Min-23, Max-65, AvgCookies-6.3, targetElement - 'city1'
  cityName: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSaleHour: 6.3,
  hourlySale: [],
  totalSales: 0,
  targetElement: 'city-1', // needs to be an unordered list <ul>

};
hourlyListPrintingFunction(seattle);

let tokyo = { //Varies per city: Min-23, Max-65, AvgCookies-6.3, targetElement - 'city2'
  cityName: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSaleHour: 1.2,
  hourlySale: [],
  totalSales: 0,
  targetElement: 'city-2', // needs to be an unordered list <ul>
};
hourlyListPrintingFunction(tokyo);

let dubai = { //Varies per city: Min-23, Max-65, AvgCookies-6.3, targetElement - 'city2'
  cityName: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSaleHour: 3.7,
  hourlySale: [],
  totalSales: 0,
  targetElement: 'city-3', // needs to be an unordered list <ul>
};
hourlyListPrintingFunction(dubai);

let paris = { //Varies per city: Min-23, Max-65, AvgCookies-6.3, targetElement - 'city2'
  cityName: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSaleHour: 2.3,
  hourlySale: [],
  totalSales: 0,
  targetElement: 'city-4', // needs to be an unordered list <ul>
};
hourlyListPrintingFunction(paris);

let lima = { //Varies per city: Min-23, Max-65, AvgCookies-6.3, targetElement - 'city2'
  cityName: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSaleHour: 4.6,
  hourlySale: [],
  totalSales: 0,
  targetElement: 'city-5', // needs to be an unordered list <ul>
};
hourlyListPrintingFunction(lima);



//NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW


function CitySales(cityName, minCustomer, maxCustomer, avgCookieSaleHour, targetElement) {
    this.cityName = cityName;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookieSaleHour = avgCookieSaleHour;
    this.targetElement = targetElement;
    this.hourlySale = [];
    this.totalSales= 0;
  }
  
  CitySales.prototype.hourlyListAndTotalPrint = function(){
    const hourArrayString = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ', '7pm: ', 'Total: ']; //sets the string of the message and the total hours of the day in an array. Can be automated for user to adjust hours, but needed to hard code for now.
  
    for (let i = 0; i < hourArrayString.length - 1; i++) {
      let randomHourly = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; // random function from https://www.w3schools.com/js/js_random.asp
      console.log(randomHourly);
      let randomHourlySale = Math.ceil(randomHourly * this.avgCookieSaleHour);
      this.totalSales = this.totalSales + randomHourlySale;
      this.hourlySale.push(hourArrayString[i] + randomHourlySale + ' cookies'); //recommend to Math.ceil to always round up. Better to have one extra cookie than one too few cookies.
    }
    console.log(hourArrayString[hourArrayString.length - 1]);
    this.hourlySale.push(hourArrayString[hourArrayString.length - 1] + this.totalSales + ' cookies');
  
    let printArray = this.hourlySale;
    let elementID = this.targetElement;
    let hourlyList = document.getElementById(elementID);
  
    //   creating title
    let h2Element = document.createElement('h2');
    h2Element.textContent = this.cityName;
    console.log(h2Element);
    hourlyList.appendChild(h2Element);
  
    //   creating list
    for (let i = 0; i < printArray.length; i++) { // prints numbers
      let liElement = document.createElement('li');
      liElement.textContent = printArray[i];
      hourlyList.appendChild(liElement);
    }
  };
  
  //[city, min/cust, max/cust, avg/sales]
  // ['Seattle', 23, 65, 6.3, 'city-1'],
  // ['Tokyo', 3, 24, 1.2, 'city-2'],
  // ['Dubai', 11, 38, 3.7, 'city-3'],
  // ['Paris', 20, 38, 6.3, 'city-4'],
  // ['Lima', 2, 65, 6.3, 'city-5'],
  
  let seattle = new CitySales('Seattle', 23, 65, 6.3, 'city-1');
  let tokyo = new CitySales('Tokyo', 3, 24, 1.2, 'city-2');
  let dubai = new CitySales('Dubai', 11, 38, 3.7, 'city-3');
  let paris = new CitySales('Paris', 20, 38, 6.3, 'city-4');
  let lima = new CitySales('Lima', 2, 65, 6.3, 'city-5');
  
  seattle.hourlyListAndTotalPrint();
  tokyo.hourlyListAndTotalPrint();
  dubai.hourlyListAndTotalPrint();
  paris.hourlyListAndTotalPrint();
  lima.hourlyListAndTotalPrint();
  

//;KHASGDHJKGDKHLBGDASJBKDGSKHLDGSHKLDGSKHLDGSKLDGSHKLJGDS
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
  
      let employeeNeededHourly = Math.round(this.hourlySale[i] / 20); //adjust depending on rounding factor for employees
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
  
    let totalRowEmploee = [];
    for (let i = 0; i < cityObject[0].hourlyEmployee.length; i++) {
      let totalColumn = 0;
      for (let j = 0; j < cityObject.length; j++) {
        totalColumn += cityObject[j].hourlyEmployee[i];
      }
      totalRowEmploee.push(totalColumn);
    }
  
    let tBodyElement = document.getElementById('tfootEmployee');
    let trElement = document.createElement('tr');
    tBodyElement.appendChild(trElement);
    // this sets the table row of the total
    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = 'Total';
    // this sets up all numerical values, including the total sales at the end
    for (let i = 1; i < totalRowSales.length-1; i++) { // prints numbers
      let tdElement = document.createElement('td');
      trElement.appendChild(tdElement);
      tdElement.textContent = totalRowSales[i];
    }
    totalRowSales[0] = 'Total';
  
    //
  
    tBodyElement = document.getElementById('tfootSales');
    trElement = document.createElement('tr');
    tBodyElement.appendChild(trElement);
    // this sets the table row of the total
    tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = 'Total';
    // this sets up all numerical values, including the total sales at the end
    for (let i = 1; i < totalRowEmploee.length; i++) { // prints numbers
      let tdElement = document.createElement('td');
      trElement.appendChild(tdElement);
      tdElement.textContent = totalRowSales[i];
    }
    totalRowSales[0] = 'Total';
  
    //
  
    return totalRowSales;
  
  
  }
  
  
  totalRowPrint(cityObjArr);
  
  
  
  