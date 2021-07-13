$(document).ready(function() {
// get a quote from the server when the page loads and add it to the dom
  getQuote();
// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    // console.log('submit a new one')
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });
  $('#fresh').click((e) => {
    e.preventDefault();
    // console.log('get a new one')
    getQuote()
  })
  function getQuote(){

    //YOUR CODE HERE, Add a GET request
    $("#quote").html('')
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/quote",
      success: (data) => {
        console.log('Succes GET')
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
      data: quote,
      success: () => {
        console.log('Succes POST');
        $("#quote").append(quote)
      }
    })
  }
});
