const btn_toggle: any = document.getElementById('btn_toggle');

let toggle_para: any = document.getElementById('toggle_para');


btn_toggle.addEventListener('click', () => {
    toggle_para.classList.add('show');
});
