
let count = 1;

function back(){
    if(count > 1){
        count--;
        imgview();
    }
}; 
function next(){
    if(count < 5){
        count++;
        imgview();
    }
};

function btm1(){
    count = 1;
    imgview();
    count_num();
};
function btm2(){
    count = 2;
    imgview();
    count_num();
};
function btm3(){
    count = 3;
    imgview();
    count_num();
};
function btm4(){
    count = 4;
    imgview();
    count_num();
};
function btm5(){
    count = 5;
    imgview();
    count_num();
};

function count_num(){
    $('.btm1').css("background","#fff");
    $('.btm2').css("background","#fff");
    $('.btm3').css("background","#fff");
    $('.btm4').css("background","#fff");
    $('.btm5').css("background","#fff");

    if(count == 1){
        $('.btm1').css("background","#666");
    } else if(count == 2){
        $('.btm2').css("background","#666");
    } else if(count == 3){
        $('.btm3').css("background","#666");
    } else if(count == 4){
        $('.btm4').css("background","#666");
    } else if(count == 5){
        $('.btm5').css("background","#666");
    }
}


function imgview(){
    if(count == 1){
        $('.slide>ul').stop().animate({
            marginLeft: 0+'px'
        }, 1000)
    } else if(count == 2){
        $('.slide>ul').stop().animate({
            marginLeft: -1000+'px'
        }, 1000)
    } else if(count == 3){
        $('.slide>ul').stop().animate({
            marginLeft: -2000+'px'
        }, 1000)
    } else if(count == 4){
        $('.slide>ul').stop().animate({
            marginLeft: -3000+'px'
        }, 1000)
    } else if(count == 5){
        $('.slide>ul').stop().animate({
            marginLeft: -4000+'px'
        }, 1000)
    }
    count_num();
};



function slide(){
    function play(){
        if(count >= 5){
            count = 0;
        }
        count++;
        imgview();
    }
    setInterval(play,7000)
}




$(document)
.on('click', '.back' , back)
.on('click', '.next' , next)
.on('click', '.btm1', btm1)
.on('click', '.btm2', btm2)
.on('click', '.btm3', btm3)
.on('click', '.btm4', btm4)
.on('click', '.btm5', btm5)
.on('ready', count_num)
.on('ready', slide)