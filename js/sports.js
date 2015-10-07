$(document).ready(function(){

var results;

var quoteGenerator = {
		
			pullQuote: function(){
				return $.ajax ({
					url: 'js/sports.json',
					dataType: 'json',
					type: 'GET',
					mimeType: 'application/json',
					success: function(result){
						results = result;
        			}
        		});
			}
		};
			
	

		$("#quote-wrapper").on('click', '.button', function(e){
			e.preventDefault();
			console.log("I've been clicked");
			
			var newQuote = quoteGenerator.pullQuote();
				newQuote.done(function(results){
					var quote = results[Math.floor(Math.random()* results.length)];						
					var returnQuote = $("#quote").html($('<div class="saying">' + quote.quote + '</div>' + '<div class="genius">' + quote.author + '</div>'));
        				
        		});
		});
});



