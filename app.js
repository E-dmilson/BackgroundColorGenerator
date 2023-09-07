//EDMILSON ALVES//


//    Full video soon in my youtube channel

function changeBackgroundColor(){
    let apply = document.querySelector('.apply');
    let getCode = document.querySelector('.getCode');
    let pick = document.getElementById('pickColor');
    let outputColor = document.querySelector('.code')

    apply.addEventListener('click', () =>{
        window.document.body.style.background = pick.value;
    });

    getCode.addEventListener('click', () =>{
        outputColor.innerHTML = pick.value;
    });
}

changeBackgroundColor()