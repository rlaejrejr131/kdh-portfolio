// const showMenu2 = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//           nav = document.getElementById(navId);
    
//     toggle.addEventListener('click', () => {
//         nav.classList.toggle('show-menu');
//         toggle.classList.toggle('show-icon');
//     })
// }

// showMenu2('nav-toggle', 'nav-menu');

const showMenu = (toggleClass) => {
    const toggleActive = document.querySelector(toggleClass)
    
    toggleActive.addEventListener('click', () => {
        toggleActive.classList.toggle('active');
    })
}

showMenu('.mobile_menu_btn');

// 섹션 이동
const sectionChange = (navList) => {
    const navBtns = document.querySelectorAll(navList);

    navBtns.forEach((navLi) => {
        navLi.addEventListener("click", (e) => {
            e.preventDefault();
            
            const sectionIdName = navLi.dataset['secId'];
            const sectionId = document.getElementById(sectionIdName);
            const idxSec = document.querySelectorAll('.idx_section');
            const hasClass = sectionId.classList.contains('show_section');
            
            if (!hasClass) {
                idxSec.forEach((e) => {
                    e.classList.remove('show_section');
                });
                sectionId.classList.add('show_section');
                
                // setTimeout(() => {
                //     idxSec.forEach((e) => {
                //         e.classList.remove('animate_content');
                //     });
                //     // console.log(idxSec)
                // }, 3000);
            }
        });
    });
}

sectionChange('.nav_btn')








