/* 
    Created on : Jun. 10, 2020, 04:00:21 p.m.
    Author     : Paras Patel
*/


var btn0 = document.getElementById("0");    var btn1 = document.getElementById("1");
            var btn2 = document.getElementById("2");    var btn3 = document.getElementById("3");
            var btn4 = document.getElementById("4");    var btn5 = document.getElementById("5");
            var btn6 = document.getElementById("6");    var btn7 = document.getElementById("7");
            var btn8 = document.getElementById("8");    var turn = document.getElementById("turn");
            var start = document.getElementById("start");
            
            let space = [,,,,,,,,,];
            var p1Turn,p2Turn;
            var play = false;
            var j=1;//j is used to separate the playerOne function for different user.
            const loosingIndex = [
              [0, 1, 2], [3, 4, 5], 
              [6, 7, 8], [0, 3, 6],
              [1, 4, 7], [2, 5, 8],
              [2, 4, 6], [0, 4, 8]];
            
            function startGame() {

              play = true;        
              p1Turn= prompt("Player 1 \nEnter your initial.. ");
              p2Turn= prompt("Player 2 \nEnter your initial.. ");
             if(p1Turn.length == 0 || p2Turn.length == 0 || p1Turn == p2Turn){
               alert("Initials should not be null or same!!!");
               startGame();
              }
             else{
              document.getElementById("clkStart").style.visibility= "hidden";
              document.getElementById("startBtn").style.visibility= "hidden";
              turn.innerHTML="Player 1: " +p1Turn+" your turn.";
              j=1;

              start.onclick = false;
                      btn1.disabled=false;    btn2.disabled=false;    btn3.disabled=false;
                      btn4.disabled=false;    btn5.disabled=false;    btn6.disabled=false;
                      btn7.disabled=false;    btn8.disabled=false;    btn0.disabled=false;
              for (var i = 0; i < 9; i++) {
                      var board = document.getElementsByTagName("button")[i];
                      board.style.backgroundColor = "white";
                      board.style.color = "black";
                      board.innerHTML = " ";
                      board.setAttribute("onclick", "playerOne(this.id)");
                      //turn.innerHTML="Player 1: " +p1Turn+" your turn.";
               }
                  space = [,,,,,,,,,];
              }
            }


            function playerOne(id) {
                if(play) {
                  var place = document.getElementById(id);
                  if (place.innerText != p1Turn && place.innerText != p2Turn && place.innerHTML == " ") {
                    if(j==1){
                    place.innerText = p1Turn;
                    place.setAttribute("onclick", " ");
                    space[id] = 2;
                    turn.innerHTML="Player 2: "+p2Turn+" your turn.";
                    checkLooser(id, p1Turn,p2Turn);
                    j=2;

                    }
                 else{
                    place.innerText = p2Turn;
                    place.setAttribute("onclick", " ");
                    space[id] = 2;
                    turn.innerHTML="Player 1: " +p1Turn+" your turn.";
                    checkLooser(id, p2Turn,p1Turn);
                    j=1;
                    }
                }
              }
          } 


          function checkLooser(id, player, winner) {
                var emptySpace = 9;
                for (var i = 0; i < loosingIndex.length; i++) {
                if((player == document.getElementsByTagName("button")[loosingIndex[i][0]].innerHTML) 
                        && (player == document.getElementsByTagName("button")[loosingIndex[i][1]].innerHTML)
                        && (player == document.getElementsByTagName("button")[loosingIndex[i][2]].innerHTML))
                {
                    play = false;
                    alert(winner + ' is Winner!!\n' + player + ' is Looser!!');

                    for (var j = 0; j < 3; j++) {
                      document.getElementsByTagName("button")[loosingIndex[i][j]].style.backgroundColor = "#F00";
                  }
                  turn.innerHTML=" "+winner+" : is Winner!!<br> "+player+" : is Looser!!";
                  document.getElementById("clkStart").style.visibility= "visible";
                  document.getElementById("startBtn").style.visibility= "visible";
                  document.getElementById("startBtn").onclick = function(){startGame();}
                }
              }
              for (var i = 0; i < space.length; i++) {
                if(space[i] != null) {
                  emptySpace--;
                }

              }
              if (play && emptySpace == 0) {

                alert ("Both winner! Restart the game!!");
                turn.innerHTML="Both winner!! Restart again!! ";
                 document.getElementById("clkStart").style.visibility= "visible";
                document.getElementById("startBtn").style.visibility= "visible";
                document.getElementById("startBtn").onclick = function(){startGame();}
              }
}