$(document).ready(function(){
getQuote()
  var author;
  var quote;
  
  function getQuote(){
  var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url,function(data){
      $(".quote").html(data.quoteText);  
       $(".author").html(data.quoteAuthor); 
    });
  };

   $("#newQuote").on("click",function(){
    getQuote();
  });
  
  
  $("#tweet").click(function(){
    var tweetAuthor = $(".author").text();
    var tweetQuote = $(".quote").text();
   window.open("https://twitter.com/intent/tweet?text="+ tweetQuote+" — "+tweetAuthor);
  });
  
});