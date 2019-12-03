let numberCheck = false;
let display = document.getElementById('display');
let result =  document.getElementById('result');
let inputbutton = [
    ["AC", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
];

const colMaxSize = 4;

const input = inputbutton.map((value,index) =>{
    return (`
        <tr key=${index}>
            ${value.map(
                (val, idx) =>{
                    const colSize = idx == 0 ? colMaxSize - value.length + 1 : 1
                    return (`
                        <td colspan = ${colSize} class="btn_item" onclick = cal('${val}')>
                        ${val}
                        </td>
                    `)
                }
            ).join('')}
        </tr>
    `)
}).join('') 

document.getElementById("test").innerHTML = input;

cal = (char) => {
    switch(char){
        case "=" :
            return calculate()
        case "AC":
            return reset()
        default:
            return addInput(char)
    }
}

addInput = (char) => {
    console.log(isNaN(char));
    if(numberCheck == false){ //이전에 들어온 값이 문자일때 수행
        if(isNaN(char) == true){ // 연속 문자가 눌렸을때 아무 기능수행 안함
            
        } else { // 연속 문자가 아니라면 숫자 출력
            display.value += char;
        }
    } else {  // 이전에 들어온 값이 숫자일때 연속 출력수행
        display.value += char;
    }
    numberCheck = (isNaN(char) == true) ? false : true; 
}

calculate = () => {
    let total = eval(display.value);
    result.value = total;
}

reset = () => {
    display.value ='';
    result.value ='';
}

