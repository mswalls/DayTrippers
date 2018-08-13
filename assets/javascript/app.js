

var city = "Charlotte";

var weatherAPI = "=86e077f1801044c6bf8210536181308";

var queryURL= "http://api.apixu.com/v1/forecast.json?key" + weatherAPI + "&q=" + city + "&days=3";
    

$.ajax({
      url: queryURL,
      method: "GET"
    })
    
      .then(function(response) {

        
        console.log(queryURL);

        console.log(response);
      });
     