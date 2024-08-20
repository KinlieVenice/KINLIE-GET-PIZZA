const menutabs = document.querySelectorAll(".menu__btn");
const menucontents = document.querySelectorAll(".offer__details");

menutabs.forEach((menutab) => {
  menutab.addEventListener("click", () => {
    removeActiveMenutab();
    menutab.classList.add("active");
    const activeMenucontent = document.querySelector(`#${menutab.id}-content`);
    removeActiveMenucontent();
    activeMenucontent.classList.add("active");
  });
});

function removeActiveMenutab() {
    menutabs.forEach((menutab) => {
        menutab.classList.remove("active");
    });
}
function removeActiveMenucontent() {
    menucontents.forEach((menucontent) => {
        menucontent.classList.remove("active");
    });
};