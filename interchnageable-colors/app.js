const body=document.querySelector('body')
const btns=document.querySelectorAll('.btn')

btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        body.classList.add(`${btn.value}`);
    })
})
