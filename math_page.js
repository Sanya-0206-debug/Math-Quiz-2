player1_name=localStorage.getItem("p1name");
player2_name=localStorage.getItem("p2name");
debugger;
player1_score=0;
player2_score=0;
document.getElementById("p1name").innerHTML=player1_name +":";
console.log("hi");
document.getElementById("p2name").innerHTML=player2_name +":";
document.getElementById("p1score").innerHTML=player1_score +"";
document.getElementById("p2score").innerHTML=player2_score +"";
document.getElementById("playerQuestion").innerHTML="Question turn : "+player1_name;
document.getElementById("playerAnswer").innerHTML="Answer turn : "+player2_name;


