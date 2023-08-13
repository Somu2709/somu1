

function changeFontStyle(e)
{
    const text = document.querySelector('.box');
    if(e.target.id==="bold"){
        e.target.classList.toggle('active');
        text.classList.toggle('bold');
    }
    if(e.target.id==="italic"){
        e.target.classList.toggle('active');
        text.classList.toggle('italic');
    }    
    if(e.target.id==="underline"){
        e.target.classList.toggle('active');
        text.classList.toggle('underline');
    }
}

const btnAction = document.querySelector('.btn-action');
btnAction.addEventListener('click',changeFontStyle);