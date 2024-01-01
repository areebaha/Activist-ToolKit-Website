/* .js files add interaction to your website */
var factList= [
  "Women make up 2/3 of the world's illiterate population.",
  "Global illiteracy rates have only dropped by 4% since 2000.",
  "In South Asia, 42% of women are illiterate compared to 23% of men.",
  "About every 1/6 adults can't read or write.",
  "In the US, 17% of women are illiterate compared to 10% of men."];

  var fact = document.getElementById("fact");
  var factsButton = document.getElementById("factsButton");
  var count=0;
  factsButton.addEventListener("click", displayFact);
  function displayFact(){
    fact.innerHTML= factList[count];
    count++;
    if (count== factList.length){
      count=0;
    }
  }

