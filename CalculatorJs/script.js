let a = ''; //first numer
let b = ''; //second number
let sign = ''; //operation sign
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];

//screen our calculator
const out = document.querySelector('#result');


function clearAll()
{
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;


document.querySelector('.buttons_block').onclick = (event) =>{
    // btn doesnt pressed
    if(!event.target.classList.contains('btn')) return;
    // pressed btn clearAll
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    //get pressed btn
    const key = event.target.textContent;

    //check if was pressed number or  .
    if(digit.includes(key)){
        if(b === '' && sign ===''){
            a += key;
            console.log(a,b,sign);
            out.textContent = a;
        }
        else if(a!=='' && b!=='' && finish)
        {
            b = key;
            finish = false;
            out.textContent= b;
        }
        else
        {
            b +=key;
            out.textContent= b;
            console.log(a,b,sign);
        }
        return;
    }

    if(action.includes(key)){
        sign = key;
        console.log(sign);
        out.textContent = sign;
    }

    if(key === '=')
    {
        if(b === '')b = a;
        switch(sign)
        {
            case "+":
                a = (+a) + (+b);
                break;

            case "-":
                a = a - b;
                break;

            case "X":
                a = a * b;
                break;

            case "/":
                if(b === '0')
                {
                out.textContent='Error';
                a='';
                b='';
                sign='';
                return;
                }
                a = a / b;
                break;
        }
        finish = true
        out.textContent = a;
        console.log(a,b,sign);
    }

}