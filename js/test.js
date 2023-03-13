
const hourArrayString = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ', '7pm: ']; //sets the string of the message and the total hours of the day in an array. Can be automated for user to adjust hours, but needed to hard code for now.

let cityMaster = [
  //[city, min/cust, max/cust, avg/sales]
  ['Seattle', 23, 65, 6.3],
  ['Tokyo', 3, 24, 1.2],
  ['Dubai', 11, 38, 3.7],
  ['Paris', 20, 38, 6.3],
  ['Lima', 2, 65, 6.3],
];


function hourlyListPrintingFunction(cityObject,elementCreate){
  let printArray = cityObject.hourlySale;
  let elementID = cityObject.targetElement;
  let hourlyList = document.getElementById(elementID);
  for(let i=0; i<printArray.length; i++){
    let liElement = document.createElement(elementCreate);
    liElement.textContent = printArray[i];
    hourlyList.appendChild(liElement);
  }
}

let seattle = { //Varies per city: Min-23, Max-65, AvgCookies-6.3, targetElement - 'city1'
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSaleHour: 6.3,
  hourlySale: [],
  targetElement: 'city-1', // needs to be an unordered list <ul>
  hourlyFunc: function(){
    //calling this method will create an array per items of each city
    for(let i = 0; i < hourArrayString.length; i++){
      let randomHourly = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; // random function from https://www.w3schools.com/js/js_random.asp
      console.log(randomHourly);
      this.hourlySale.push(hourArrayString[i]+Math.ceil(randomHourly*this.avgCookieSaleHour)+' cookies'); //recommend to Math.ceil to always round up. Better to have one extra cookie than one too few cookies.
    }
  },
  printList:[],

};
seattle.hourlyFunc();
hourlyListPrintingFunction(seattle,'p');





console.log(seattle);
