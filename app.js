const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

// 캔버스 위에서 마우스를 감지했으면 좋겠다.
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

    // console.log(event); clientX : 스크린에서의 마우스 좌표, offsetX: canvas에서의 마우스 좌표
}

// 캔버스에 mousedown(누르는 순간)하면 painting=True로
// click(눌렀다가 떼는 순간) != mousedown(누르는 순간)
function onMouseDown(event){
    painting = true;
}

// 마우스 떼면 painting 종료
function onMouseUp(event){
    stopPainting(); // 실제로 그리는 line이 필요해서 함수로 종료 호출
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    // 마우스가 캔버스 밖으로 나가도 painting 종료
    canvas.addEventListener("mouseleave", stopPainting);
}
