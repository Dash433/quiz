var startbutton = document.querySelector("#start");
var time = 30;
var display = document.querySelector("#timer");
var questionEl = document.querySelector("#question");
var listEl = document.querySelector("#list");

//var rank=[];
var list =JSON.parse(localStorage.getItem("rank"));
console.log(list);
listEl.textContent=list;
function highscore(){
    
var name=prompt("your score is "+time+" enter your name to save it");//asks the user to input there name


// var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

// var newItem = 
// {
//  'product-name': itemContainer.find('h2.product-name a').text(),
//  'product-image': itemContainer.find('div.product-image img').attr('src'),
//  'product-price': itemContainer.find('span.product-price').text()
// };

//  oldItems.push(newItem);

//  localStorage.setItem('itemsArray', JSON.stringify(oldItems));



questionEl.innerHTML="";// erases previous code
  
    var page = document.createElement("li");// creates a list for our scoreboard
    page.textContent = " name: "+ name +" , score: "+ time; //assigns to the list name and score
    var newScore={name:name,score:time};
    //rank=[{name:name,score:time}]+rank;
   //rank.push({name:name,score:time});

 list.push(newScore);
 localStorage.setItem("rank", JSON.stringify(list));

//     var rankstring=JSON.stringify(rank);
//      console.log(rankstring);
//     localStorage.setItem("rank",rankstring);
//     var backn=JSON.parse(localStorage.getItem("rank"));
//     console.log(backn);
//     //localStorage.setItem("page", page);
//     console.log(page);
    
//    page.textContent=list
     listEl.appendChild(page);// appends the list
    
    
    var playagain = document.createElement("button");// creates a play again button
    playagain.textContent = "playagain"// 
    //two.setAttribute("id", "right");
    playagain.addEventListener("click", () => {
        time=30;// when clicked time is reset
        questionone();// sent back to question one
    })
     questionEl.appendChild(playagain)// button is appended
//    var password=localStorage.getItem('password');
//    localStorage.setItem(['password',password]);


}
function incorrect() {
    time = time - 5;// subtracts 5s if incorrect answer is given
    //run();
    // console.log("clicked");
};

startbutton.addEventListener("click", function (event) {

    startbutton.style.display="none";// displays none when clicked
    //startbutton.textContent = null;

    questionone();// sends to question one

    run();// starts timer
    console.log("clicked");
});



function run() {

    var countdown = setInterval(function () {
        time--;// subtracts time each time when clicked
        display.textContent = time;
        if (time <= 0) {// runs so long above 0
            time--;
        display.textContent = time;
            //  highscore();
          // clearInterval(countdown);
            highscore();
            
        }
        console.log(time);
    }, 1000);
}


function questionone() {
    // in this code we are creating question one
    // A header along with four buttons are created.
    // 3 answers are wrong and if clicked it will subtract 5s all questiones will send you to the next question
    // it will also delete the appended children before it
    questionEl.innerHTML="";
    var first = document.createElement("h1");
    first.textContent = " first question: what does: dry stand for";//use data-id
   
   questionEl.appendChild(first)
    var one = document.createElement("button");
    one.textContent = "Digital replace ststem "
    

    one.addEventListener("click", () => {
        
        incorrect();
        questiontwo();
    })
    questionEl.appendChild(one)
    var two = document.createElement("button");
    two.textContent = "Do not repeat yourself "
    two.setAttribute("id", "right");
    two.addEventListener("click", () => {

        questiontwo();
    })
    //console.log(two.getAttribute("id"));

    questionEl.appendChild(two)
    var three = document.createElement("button");
    three.textContent = "dom runtime yet "
    three.setAttribute("class", "right");
    three.addEventListener("click", () => {
        incorrect();
        three.setAttribute("class", "wrong");
        questiontwo();
    })
    console.log(three.getAttribute("class"));

    questionEl.appendChild(three)
    var four = document.createElement("button");
    four.textContent = "delicate run yodel "
    four.setAttribute("class", "right");
    console.log(four.getAttribute("class"));
    four.addEventListener("click", () => {

        four.setAttribute("class", "wrong");
        incorrect();
        questiontwo();
    })
    questionEl.appendChild(four)
}


function questiontwo() {
    //var element=document.getElementById(first);
    // element.parentNode.removeChild(element);
   // console.log(element)
   questionEl.innerHTML="";
    var second = document.createElement("h1");
    second.textContent = " second question what does CSS stand for?";
    //document.body.appendChild(second);
    questionEl.appendChild(second)

    var one = document.createElement("button");
    one.textContent = "cryptic security system "

    one.setAttribute("class", "wrong");
    console.log(one.getAttribute("class"));
    one.addEventListener("click", () => {

        one.setAttribute("class", "wrong");
        incorrect();
        questionthree()
    })
    questionEl.appendChild(one)
    var two = document.createElement("button");
    two.textContent = "cant start styling "
    two.setAttribute("class", "right");
    two.addEventListener("click", () => {

        two.setAttribute("class", "wrong");
        incorrect();
        questionthree()
    })

    questionEl.appendChild(two)
    var three = document.createElement("button");
    three.textContent = "code system service "
    three.setAttribute("class", "right");
    three.addEventListener("click", () => {

        three.setAttribute("class", "wrong");
        incorrect();
        questionthree()
    })

    questionEl.appendChild(three)
    var four = document.createElement("button");
    four.textContent = "cascading style sheets "
    four.setAttribute("class", "right");
    four.addEventListener("click", () => {

        four.setAttribute("class", "wrong");
        
        questionthree()
    })
   // questionthree()
    questionEl.appendChild(four)
}


function questionthree() {
    // These questions will send you to the highscore function
   questionEl.innerHTML="";
    var second = document.createElement("h1");
    second.textContent = " third question: what does HTML stand for?";
    //document.body.appendChild(second);
    questionEl.appendChild(second)

    var one = document.createElement("button");
    one.textContent = "Hypertext Markup Language";

    one.setAttribute("class", "wrong");
    console.log(one.getAttribute("class"));
    one.addEventListener("click", () => {

        one.setAttribute("class", "wrong");
        highscore()
        clearInterval(interval);
        
    })
    questionEl.appendChild(one)
    var two = document.createElement("button");
    two.textContent = "he takes more lessons"
    two.setAttribute("class", "right");
    two.addEventListener("click", () => {

        two.setAttribute("class", "wrong");
        incorrect();
        
        highscore()
    })

    questionEl.appendChild(two)
    var three = document.createElement("button");
    three.textContent = " haiku trim most lost "
    three.setAttribute("class", "right");
    three.addEventListener("click", () => {

        three.setAttribute("class", "wrong");
        incorrect();
        
        highscore()
    })

    questionEl.appendChild(three)
    var four = document.createElement("button");
    four.textContent = "hi this makes lesces "
    four.setAttribute("class", "right");
    
    four.addEventListener("click", () => {

        four.setAttribute("class", "wrong");
        
        
        incorrect();
        
        highscore()

    })
    questionEl.appendChild(four)
}
