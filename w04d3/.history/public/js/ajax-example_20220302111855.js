$(document).ready(function(){

  $('form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: 'https://xkcd.com/1597/info.0.json',
      method: "GET"
    })
    .then()
    .catch(function(error){
      console.log(`Error: ${error}`);
      alert(error);
    });

  });

});

