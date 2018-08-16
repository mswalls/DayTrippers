$(document).ready(function () {

  $("#city").on("click", function () {
    


    var city = $("#citytest").val();

    console.log(city);

    var weatherAPI = "=86e077f1801044c6bf8210536181308";

    var queryURL = "http://api.apixu.com/v1/forecast.json?key" + weatherAPI + "&q=" + city + "&days=3";


    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function (response) {

        

        console.log(queryURL);

        console.log(response);


        $("#date1").append(response.forecast.forecastday[0].date);
        $("#tempmin1").append(response.forecast.forecastday[0].day.mintemp_f);
        $("#tempmax1").append(response.forecast.forecastday[0].day.maxtemp_f);
        $("#condition1").append(response.forecast.forecastday[0].day.condition.text);
        $("#humidity1").append(response.forecast.forecastday[0].day.avghumidity + "%");
        
        $("#date2").append(response.forecast.forecastday[1].date);
        $("#tempmin2").append(response.forecast.forecastday[1].day.mintemp_f);
        $("#tempmax2").append(response.forecast.forecastday[1].day.maxtemp_f);
        $("#condition2").append(response.forecast.forecastday[1].day.condition.text);
        $("#humidity2").append(response.forecast.forecastday[1].day.avghumidity + "%");

        $("#date3").append(response.forecast.forecastday[2].date);
        $("#tempmin3").append(response.forecast.forecastday[2].day.mintemp_f);
        $("#tempmax3").append(response.forecast.forecastday[2].day.maxtemp_f);
        $("#condition3").append(response.forecast.forecastday[2].day.condition.text);
        $("#humidity3").append(response.forecast.forecastday[2].day.avghumidity + "%");
        reminder();
      })
  });

  var dayonemintemp = response.forecast.forecastday[0].day.mintemp_f;
  function reminder() {
    if (dayonemintemp < 80) {
      $("#message1").append("Don't Forget a jacket!");
     } else {
      $("#message1").append("Don't forget your sunglasses!");
     };
    };
});




