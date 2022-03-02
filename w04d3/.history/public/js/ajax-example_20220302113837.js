$(document).ready(function(){

  $('form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: 'https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true',
      method: "GET"
    })
    .then(function(data){
      alert('it worked');
      console.log('data', data);
    })
    .catch(function(error){
      console.log(`Error: ${error}`);
      alert('error' + error);
    });

  });

});

