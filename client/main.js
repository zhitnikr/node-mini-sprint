$(document).ready(function() {
// get a quote from the server when the page loads and add it to the dom
  getQuote();
// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    console.log('after the e')
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });
  function getQuote(){

    //YOUR CODE HERE, Add a GET request
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/quote",
      success: (data) => {
        // $("#quote").html('')
        $("#quote").append(data)
      }
    })
  }

  function addQuote(quote){

    //YOUR CODE HERE, Add a POST request
    $("#quote").html('')
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/quote",
      data: JSON.stringify({ quote: quote }),
      success: () => {
        console.log('Succes');
        $("#quote").append(quote)
      }
    })
  }
});
