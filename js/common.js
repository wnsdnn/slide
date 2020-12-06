
let count = 1; // 변수 count 생성

function back(){    // 전 슬라이드로 돌아가는 버튼
    if(count > 1){  // count 가 1보다 크면 -1후 imgview 함수를 실행
        count--;
        imgview();
    }
}; 
function next(){    // 다음 슬라이드로 넘어가는 버튼
    if(count < 5){  // count가 5보다 작으면 +1후 imgview 함수를 실행
        count++;
        imgview();
    }
};

function btm1(){  // 함수 실행시 count를 1로 하고 imgview함수와 count_num함수를 실행
    count = 1;
    imgview();
    count_num();
};
function btm2(){  // 함수 실행시 count를 2로 하고 imgview함수와 count_num함수를 실행
    count = 2;
    imgview();
    count_num();
};
function btm3(){  // 함수 실행시 count를 3로 하고 imgview함수와 count_num함수를 실행
    count = 3;
    imgview();
    count_num();
};
function btm4(){  // 함수 실행시 count를 4로 하고 imgview함수와 count_num함수를 실행
    count = 4;
    imgview();
    count_num();
};
function btm5(){  // 함수 실행시 count를 5로 하고 imgview함수와 count_num함수를 실행
    count = 5;
    imgview();
    count_num();
};

function count_num(){  // count의 맞춰 각 버튼의 색상 변경
    $('.btm1').css("background","#fff");  // 기본으로 흰 배경
    $('.btm2').css("background","#fff");
    $('.btm3').css("background","#fff");
    $('.btm4').css("background","#fff");
    $('.btm5').css("background","#fff");

    if(count == 1){                             // count n 시 각 색상 #666으로 변경
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


function imgview(){  //count의 맞춰 각 슬라이드의 위치 변경
    if(count == 1){   
        $('.slide>ul').stop().animate({  //count n 시 각 위치값 +=1000 으로 변경
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



function slide(){    // 자동으로 움직이는 슬라이드 
    function play(){
        if(count >= 5){ // 만약 count가 5이상이면 0으로 되돌리기
            count = 0;
        }
        count++;        // count 의 1씩 더하기
        imgview();
    }
    setInterval(play,7000)  // play함수 7초마다 실행
}




$(document)
.on('click', '.back' , back)  //클래스 back을 click 하면 back 함수 실행
.on('click', '.next' , next) //클래스 next click 하면 next 함수 실행
.on('click', '.btm1', btm1) //클래스 btm1 click 하면 btm1 함수 실행
.on('click', '.btm2', btm2) //클래스 btm2 click 하면 btm2 함수 실행
.on('click', '.btm3', btm3) //클래스 btm3 click 하면 btm3 함수 실행
.on('click', '.btm4', btm4) //클래스 btm4 click 하면 btm4 함수 실행
.on('click', '.btm5', btm5) //클래스 btm5 click 하면 btm5 함수 실행
.on('ready', count_num) //윈도우 로드 완료시 count_num 함수 실행
.on('ready', slide) //윈도우 로드 완료시 slide 함수 실행