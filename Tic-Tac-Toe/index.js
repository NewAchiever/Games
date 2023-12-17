let turn;
let gameOnOff;
/*
1 -> X
0 -> O
*/
let bits = ["", "", "", "", "", "", "", "", ""];
let winningBits = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [2,5,8], 
                    [1,4,7], [0,4,8], [2,4,6]];
let winBits="";

gameStart();

function gameStart(){
    gameOnOff = false;
    turn = "0";
    
    bits = ["", "", "", "", "", "", "", "", ""];
    winBits = "";
    document.getElementById("turnsMsg").innerHTML = declareWhoseTurn();
}

function gameStop(){
    gameOnOff = true;
}

function isGameStop(){
    return gameOnOff;
}

function getBit(index){
    return bits[index];
}

function hasAlreadyPlayedTheBox(id){
    if( isPlayed_X(id) || isPlayed_O(id) ){
        return true;
    }
    return false;
}

function isPlayed_X(id){
    if(getBit(getBitIndex(id)) == '1'){
        return true;
    }
    return false;
}

function isPlayed_O(id){
    if(getBit(getBitIndex(id)) == '0'){
        return true;
    }
    return false;
}

function play(id){
    
    if(hasAlreadyPlayedTheBox(id)){
        return;
    }
    if(!isGameStop()){
        displaySymbol(id);
        setBits(id);
        winBits = getWinBits(id);
        if(winBits){
            document.getElementById("turnsMsg").innerHTML = declareWinner();
            displayBar(winBits);
            gameStop();
        }
        else if(isGameOver()){
            document.getElementById("turnsMsg").innerHTML = declareTie();
            gameStop();
        }
        else{
            toggleTurn();
            document.getElementById("turnsMsg").innerHTML = declareWhoseTurn();
        }   
    }   
}

function declareWinner(){
    return getSymbolForTurn() + " WINS";
}

function declareTie(){
    return "Game is TIE"
}

function declareWhoseTurn(){
    return "IT'S " + getSymbolForTurn() + " TURN";
}

function isGameOver(){
    return !bits.includes('');
}


function stopGame(){
    gameStop = true;
}

function getSymbolForTurn(){
    if(turn == '1'){
        return 'X';
    }
    else{
        return 'O';
    }
}

function toggleTurn(){
    if(turn == '1'){
        turn = '0';
    }
    else{
        turn = '1';
    }
    return turn;
}

function displaySymbol(id){
    
    img_id = id + "_img";
    document.getElementById(img_id).src = "Images/" + getSymbolForTurn() + ".jpg";
    document.getElementById(img_id).style.display = "block";
    
}

function setBits(id){
    index = getBitIndex(id);
    
    bits[index] = bits[index] + turn;
    
}

function getBitIndex(id){
    row = id.split('', 2)[0];
    col = id.split('', 2)[1];

    bit = (row-1)*3 + (col-1);
    return bit;
}


function getWinBits(id){
    
    for(let i =0; i < 8; i++){
        a = winningBits[i][0];
        b = winningBits[i][1];
        c = winningBits[i][2]; 
        
        if( bits[a] == '1' && bits[a] == bits[b] && bits[b] == bits[c]){
            
            return winningBits[i];
        }
        else if(bits[a] == '0' && bits[a] == bits[b] && bits[b] == bits[c]){
            return winningBits[i];
        }
    }
    debugger;
    return 0;
}

function displayBar(won_bits){
    /* winningBits = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [2,5,8], 
                    [1,4,7], [0,4,8], [2,4,6]]; */
    bar = document.getElementById("win_bar");
     
    
    if(won_bits == winningBits[0]){
        bar.style.top = "68px";     
    }
    else if(won_bits == winningBits[1]){
           
    } 
    else if(won_bits == winningBits[2]){
        bar.style.bottom = "68px";        
    }
    else if(won_bits == winningBits[3]){
        bar.style.transform = "rotate(90deg)"
        bar.style.right = "130px"; 
    }
    else if(won_bits == winningBits[4]){
        bar.style.transform = "rotate(90deg)";
        bar.style.left = "130px";
    }
    else if(won_bits == winningBits[5]){
        bar.style.transform = "rotate(90deg)";
    }
    else if(won_bits == winningBits[6]){
        bar.style.transform = "rotate(45deg)";
    }
    else if(won_bits == winningBits[7]){
        bar.style.transform = "rotate(135deg)";
    }  
    bar.style.display = "block";
}


function gameRestart(){


    bar = document.getElementById("win_bar");
    bar.style = "";
    bar.style.left = null;
    bar.style.right = null;
    bar.style.top = null;
    bar.style.bottom = null;
    bar.style.transform = "rotate(0deg)";




    document.getElementById("11_img").src = "";
    document.getElementById("11_img").style.display = "none";

    document.getElementById("12_img").src = "";
    document.getElementById("12_img").style.display = "none";
    
    document.getElementById("13_img").src = "";
    document.getElementById("13_img").style.display = "none";

    document.getElementById("21_img").src = "";
    document.getElementById("21_img").style.display = "none";

    document.getElementById("22_img").src = "";
    document.getElementById("22_img").style.display = "none";

    document.getElementById("23_img").src = "";
    document.getElementById("23_img").style.display = "none";

    document.getElementById("31_img").src = "";
    document.getElementById("31_img").style.display = "none";

    document.getElementById("32_img").src = "";
    document.getElementById("32_img").style.display = "none";

    document.getElementById("33_img").src = "";
    document.getElementById("33_img").style.display = "none";

    
    gameStart();

}