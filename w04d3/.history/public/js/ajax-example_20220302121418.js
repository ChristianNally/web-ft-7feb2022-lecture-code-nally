$(document).ready(function(){


  function convertToHTML(data){
    let returnValue = '';
    returnValue += '<table style="border: 1px solid black">';
    for (let region of data.infectedByRegion){
      returnValue += `<tr><td style="border: 1px solid black">${region.region}</td><td>${region.infectedCount}</td></tr>`;
    }
    returnValue += '</table>';
    return returnValue;
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
      const $newDOMElement = $("<h4>Monkey Fuzz!!</h4>");
      $('#footer').append($newDOMElement);
      $newDOMElement.appendTo('#footer');
    })
    .catch(function(error){
      console.log(`Error: ${error}`);
      alert('error' + error);
    });

  });

});

