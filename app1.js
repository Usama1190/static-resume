const btn_toggle = document.getElementById('btn_toggle');

let toggle_para = document.getElementById('toggle_para');


let isShow = false;
btn_toggle.addEventListener('click', () => {
    isShow === false ? isShow = true : isShow = false;
    isShow === false ? toggle_para.classList.add('show') : toggle_para.classList.remove('show');
})
