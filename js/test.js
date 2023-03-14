function CitySales(cityName, minCustomers, maxCustomers, avgCookieSaleHour, targetElement) {
  this.cityName = cityName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSaleHour = avgCookieSaleHour;
  this.targetElement = targetElement;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
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
