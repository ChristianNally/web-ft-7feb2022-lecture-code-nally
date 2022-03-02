$(document).ready(function(){


  function convertToHTML(data){
    return '<h1>This is the shizzle yo!</h1>';
  }

  $('form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: 'https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true',
      method: "GET"
    })
    .then(function(data){
      console.log('data', data);
      const elements = convertToHTML(data);
      $('#display').html(elements);
    })
    .catch(function(error){
      console.log(`Error: ${error}`);
      alert('error' + error);
    });

  });

});

