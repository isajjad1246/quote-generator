    var q1= "I love texting and DM'ing on Twitter. I will pretty much avoid talking on the phone at all costs.";
    var q2= "Twitter is the limit of me putting myself out there.";
    var q3= "Instagram has a faster chance of reaching me than CNN, and if I really want to know what's going on, I refresh my Twitter feed.";
    var quotes=[q1,q2,q3];
    function newQuote(){
        var randomNum= Math.floor(Math.random()* (quotes.length));
        document.getElementById('quoteDisplay').innerHTML=quotes[randomNum];

    }




