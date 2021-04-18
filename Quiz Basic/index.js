function selectOnlyThis(id) {
    for (var i = 1;i <= 4; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
}
var data
const request = new XMLHttpRequest();
 request.open("get","data.json")         
 request.onload = () =>{
     try{
      data=JSON.parse(request.responseText)
     console.log(data)
     generate(0,data);
     }
     catch(e){
         console.warn("could not load json");
     }
 };
 request.send();

var i = 0;
var correctCount = 0 ;
//initialize the first question

// generate from json array data with index
function generate(index,data) {
    document.getElementById("question").innerHTML = data[index].q;
    document.getElementById("1").innerHTML = data[index].a;
    document.getElementById("2").innerHTML = data[index].b;
    document.getElementById("3").innerHTML = data[index].c;
    document.getElementById("4").innerHTML = data[index].d;
}

function checkAnswer() {
    if (document.getElementById("a5").checked && data[i].a == data[i].answer) {
       correctCount++;
    }
    if (document.getElementById("a6").checked && data[i].b == data[i].answer) {
        correctCount++;
    }
    if (document.getElementById("a7").checked && data[i].c == data[i].answer) {
        correctCount++;
    }
    if (document.getElementById("a8").checked && data[i].d == data[i].answer) {
        correctCount++;
    }
    // increment i for next question
    i++;
    if(data.length-1 < i){
        document.write("<body style='background-color:#348322;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>*****Your score is : "+correctCount+"*****</div>");
        document.write("</body>");
    }
    else{
        document.getElementById("a5").checked=false;
        document.getElementById("a6").checked=false;
        document.getElementById("a7").checked=false;
        document.getElementById("a8").checked=false;
        generate(i,data);

    }
    
}