const btn_toggle = document.getElementById('btn_toggle');
let toggle_para = document.getElementById('toggle_para');
btn_toggle.addEventListener('click', () => {
    toggle_para.classList.add('show');
});
export {};
