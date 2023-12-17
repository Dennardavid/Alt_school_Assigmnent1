const printForecast = function (arr) {
  let forecast = "...";

  for (i = 0; i < arr.length; i++) {
    forecast = forecast + ` ${arr[i]}C in day ${i + 1} ...`;
  }

  return forecast;
};

console.log(printForecast([12, 5, -5, 0, 4]));
