// const addBtn = document.querySelector('.addbtn');
// const removeBtn = document.querySelector('.removebtn');
// const enterInp = document.querySelector('.enter');
// const javob = document.querySelector('.javob');
// let javoblar;

// addEventListener('keydown', function (e) {
//     if (e.key == "Enter") {
//         if (!enterInp.value == "") render();
//         else alert("Please enter valid value");
//     }
// })

// function render() {
//     javoblar = document.createElement('div')
//     javoblar.className = 'javoblar';

//     if (!enterInp.value == "") {
//         let p = document.createElement('p');
//         p.textContent = enterInp.value
//         enterInp.value = '';
//         let icons = document.createElement('div');
//         icons.className = 'icons'
//         icons.innerHTML = `
//         <span class="material-symbols-outlined yashil">check_circle</span>
//         <span class="material-symbols-outlined kok">edit</span>
//         <span class="material-symbols-outlined qizil">cancel</span>`
//         javoblar.appendChild(p);
//         javoblar.appendChild(icons)
//         javob.appendChild(javoblar)
        
//         check = icons.querySelector('.yashil')
//         edit = icons.querySelector('.kok') 
//         remove = icons.querySelector('.qizil')
        
//         check.addEventListener("click", function(){
//             p.classList.toggle('pac');
//         });

//         edit.addEventListener("click", function(){
//             enterInp.value = p.textContent;
//             javoblar.remove()
//         })


//         remove.addEventListener("click", function(){
//             javoblar.style.display = 'none';
//         })
        
        
//     }
// };

// function remove() {
//     javob.remove();
// }

// function handleBtns() {
//     addBtn.addEventListener("click", render);
//     removeBtn.addEventListener("click", remove);
// }

// function init() {
//     handleBtns();
// }
// init();

const addBtn = document.querySelector('.addbtn');
const removeBtn = document.querySelector('.removebtn');
const enterInp = document.querySelector('.enter');
const javob = document.querySelector('.javob');
let javoblar = [];

addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        if (enterInp.value !== "") render();
        else alert("Please enter valid value");
    }
});

function render() {
    const javoblarDiv = document.createElement('div');
    javoblarDiv.className = 'javoblar';

    const value = enterInp.value.trim();
    if (value !== "") {
        const p = document.createElement('p');
        p.textContent = value;
        const icons = document.createElement('div');
        icons.className = 'icons';
        icons.innerHTML = `
            <span class="material-symbols-outlined yashil">check_circle</span>
            <span class="material-symbols-outlined kok">edit</span>
            <span class="material-symbols-outlined qizil">cancel</span>`;
        javoblarDiv.appendChild(p);
        javoblarDiv.appendChild(icons);
        javob.appendChild(javoblarDiv);

        const check = icons.querySelector('.yashil');
        const edit = icons.querySelector('.kok');
        const remove = icons.querySelector('.qizil');

        check.addEventListener("click", function () {
            p.classList.toggle('pac');
        });

        edit.addEventListener("click", function () {
            enterInp.value = p.textContent;
            javoblarDiv.remove();
            javoblar = javoblar.filter(item => item !== javoblarDiv);
        });

        remove.addEventListener("click", function () {
            javoblarDiv.remove();
            javoblar = javoblar.filter(item => item !== javoblarDiv);
        });

        javoblar.push(javoblarDiv);
        enterInp.value = "";
    }
}

function remove() {
    javoblar.forEach(div => div.remove());
    javoblar = [];
}

function handleBtns() {
    addBtn.addEventListener("click", render);
    removeBtn.addEventListener("click", remove);
}

function init() {
    handleBtns();
}
init();
