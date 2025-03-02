const article = document.querySelector("article");
//article.style.backgroundColor="blue";
if (article){
    const text = article.textContent;
    //console.log(text);
}

const intervalId = setInterval(fadeToBW, 1000);
let startTime = Date.now();
let grayscaleVal = 100;
function fadeToBW() {
    let timeSinceStarted = (Date.now() - startTime) / 1000;
    grayscaleVal = Math.min(100, timeSinceStarted);
    if (grayscaleVal == 100){
        clearInterval(intervalId);
        
    }
    document.body.style.filter = `grayscale(${grayscaleVal}%)`;
    console.log("Changed grayscale value to " + grayscaleVal);
  }
  
  
