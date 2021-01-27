const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

// 실제 픽셀사이즈를 넘겨주어야한다... pixel modifier
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

// context = canvas 안에서 픽셀을 다루는 것 
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

// 클릭하지 않고 떠다니는 건 path를 만들다
// path : 선의 시작점 
function startPainting(){
    painting = true;
}

// 캔버스 위에서 마우스 움직임 감지
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }


    // console.log(event); clientX : 스크린에서의 마우스 좌표, offsetX: canvas에서의 마우스 좌표
}

// 캔버스에 mousedown(누르는 순간)하면 painting=True로
// click(눌렀다가 떼는 순간) != mousedown(누르는 순간)
function onMouseDown(event){
    painting = true;
}

/* 마우스 떼면 painting 종료 
function onMouseUp(event){
    stopPainting(); // 실제로 그리는 line이 필요해서 함수로 종료 호출
}
*/

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    // 마우스가 캔버스 밖으로 나가도 painting 종료
    canvas.addEventListener("mouseleave", stopPainting);
}
