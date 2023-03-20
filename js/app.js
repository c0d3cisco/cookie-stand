function CitySales(cityName, minCustomer, maxCustomer, avgCookieSaleHour) {
  this.cityName = cityName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSaleHour = avgCookieSaleHour;
  this.hourlySaleList = [];
  this.hourlyEmployee = [];
  this.totalSales = 0;
}


CitySales.prototype.hourlyCookieAndEmployee = function (){
  this.hourlySaleList = [];
  this.hourlyEmployee = [];
  this.totalSales = 0;
  let controlCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.00, 0.7, 0.4, 0.6, 0.9, 0.68, 0.5, 0.3, 0.45];
  controlCurve.forEach(controlCurve =>{
    let randomNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    let hourlySale = Math.ceil(randomNum * this.avgCookieSaleHour * controlCurve);
    let employeeNeededHourly = Math.round(hourlySale / 20); //adjust depending on rounding
    if (employeeNeededHourly < 2) {
      employeeNeededHourly = 2;
    }
    this.hourlySaleList.push(hourlySale); //recommend to Math.ceil to always round up
    this.hourlyEmployee.push(employeeNeededHourly);
    this.totalSales += hourlySale;
  });
  this.hourlySaleList.push(this.totalSales);
  this.hourlySaleList.unshift(this.cityName);
  this.hourlyEmployee.unshift(this.cityName);
};

CitySales.prototype.rowPrintCookie = function () {
  let tBodySales = document.getElementById('tbodySales');
  let tRowSales = document.createElement('tr');
  tBodySales.appendChild(tRowSales);
  this.hourlySaleList.forEach(hourCookies => {
    let tCell = document.createElement('td');
    tCell.textContent = hourCookies;
    tRowSales.appendChild(tCell);
  });
};

CitySales.prototype.rowPrintEmployee = function () {
  let tBodyEmployee = document.getElementById('tbodyEmployee');
  let tRowEmployee = document.createElement('tr');
  tBodyEmployee.appendChild(tRowEmployee);
  this.hourlyEmployee.forEach(hourEmployee => {
    let tCell = document.createElement('td');
    tCell.textContent = hourEmployee;
    tRowEmployee.appendChild(tCell);
  });
};


let cityObjArr = [];
cityObjArr[0] = new CitySales('Seattle', 23, 65, 6.3);
cityObjArr[1] = new CitySales('Tokyo', 3, 24, 1.2);
cityObjArr[2] = new CitySales('Dubai', 11, 38, 3.7);
cityObjArr[3] = new CitySales('Paris', 20, 38, 6.3);
cityObjArr[4] = new CitySales('Lima', 2, 65, 6.3);

for (let i = 0; i < cityObjArr.length; i++) {
  cityObjArr[i].hourlyCookieAndEmployee();
  cityObjArr[i].rowPrintCookie();
  cityObjArr[i].rowPrintEmployee();
};


function totalRowPrint(cityObject) {

  let footerSales = document.getElementById('tfootSales');
  footerSales.innerHTML = ''; // erase footer first.

  let totalRowSales = [];
  for (let i = 0; i < cityObject[0].hourlySaleList.length; i++) {
    let totalColumn = 0;
    for (let j = 0; j < cityObject.length; j++) {
      totalColumn += cityObject[j].hourlySaleList[i];
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
  let footerEmployee = document.getElementById('tfootEmployee');
  footerEmployee.innerHTML = ''; // erase footer first.

  let totalRowEmployee = [];
  for (let i = 1; i < cityObject[0].hourlyEmployee.length; i++) {
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
  return totalRowSales;
}

totalRowPrint(cityObjArr);

let formEl = document.getElementById('formInput');

formEl.addEventListener('submit', function(e){
  e.preventDefault();
  let {identifierCityName, identifierMinNum, identifierMaxNum, identifierAvgCus} = e.target;
  console.log(identifierCityName.value, identifierMinNum.value, identifierMaxNum.value, identifierAvgCus.value);
  let newCity = new CitySales(
    identifierCityName.value,
    parseInt(identifierMinNum.value),
    parseInt(identifierMaxNum.value),
    parseInt(identifierAvgCus.value)
  );
  
  //identify if there is a repeat
  let x=0;
  let iterator = 0;
  let repeatCity = 0;
  cityObjArr.forEach(cityObj => { //will check all city arrays to imput
    console.log(cityObj.cityName);
    if(cityObj.cityName === identifierCityName.value){ //if name matches, its a repeat
      console.log(cityObj.cityName);
      x=1;
      repeatCity = iterator;
    }else{
      console.log(iterator +=1);
    }


  });
  if(x===0){
    cityObjArr.push(newCity);
    cityObjArr[cityObjArr.length-1].hourlyCookieAndEmployee();
    cityObjArr[cityObjArr.length-1].rowPrintCookie();
    cityObjArr[cityObjArr.length-1].rowPrintEmployee();
  }

  if(x===1){
    cityObjArr[repeatCity] = newCity;
    // cityObjArr[repeatCity].hourlyCookieAndEmployee();
    eraseRow(cityObjArr,repeatCity);
  }
  
  totalRowPrint(cityObjArr);

});

function eraseRow(cityObj,iterator){
  cityObj[iterator].hourlyCookieAndEmployee();
  let hourlySaleList = cityObj[iterator].hourlySaleList;
  let hourlyEmployee = cityObj[iterator].hourlyEmployee;
  // let rowExcess = (cityObj.length-1)-iterator;
  let capturedRowSales = document.querySelector(`#tbodySales tr:nth-of-type(${iterator+1})`);
  let capturedRowEmploy = document.querySelector(`#tbodyEmployee tr:nth-of-type(${iterator+1})`);
  capturedRowSales.innerHTML = '';
  capturedRowEmploy.innerHTML = '';
  hourlySaleList.forEach(listItem => {
    const editedData = document.createElement('td');
    editedData.textContent = listItem;
    capturedRowSales.appendChild(editedData);
  });
  hourlyEmployee.forEach(listItem => {
    const editedData = document.createElement('td');
    editedData.textContent = listItem;
    capturedRowEmploy.appendChild(editedData);
  });
}
