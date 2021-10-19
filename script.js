$(document).ready(function(){
    $("#form").submit(function(){
        event.preventDefault();

        var ip = $('#ip').val();
        
        $("#details").empty();
        $("#map").empty(); 

        if(ip==""){
            alert("Please enter the IP Address!");
        }

        var API_KEY = "be168d934e9d4310bf33d904b1534585"
        var url = "https://api.ipgeolocation.io/ipgeo?apiKey="+API_KEY+"&ip="+ip;

        $.get(url, function(data){
            var city = data.city;

            var country_name = data.country_name;

            var country_flag = data.country_flag;

            var lat = parseFloat(data.latitude);

            var lng = parseFloat(data.longitude);

            var position = {
                lat:lat,
                lng:lng
            }

            displayDetails(city, country_name, country_flag);

            displayMap(position);

        })
    })

    function displayDetails(city, country_name, country_flag){
        var details = `
            <h1>${country_name}</h1><br><h2>${city}</h2><br>
            <img src="${country_flag}">`;

        $("#details").append(details); 

    }

    function displayMap(position){
        var link = `<a href='https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}' target="_blank">Map Location</a>`;

        $("#map").append(link); 
    }
});