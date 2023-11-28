// Ativando Menu Mobile

// setando classes
const bx = document.querySelector(".bx");
const menu_mobile = document.querySelector(".menu-mobile");
const link_mobile = document.querySelectorAll(".link-menu-mobile");

const link_desktop = document.querySelectorAll(".link-menu-desktop");

// criando evento de clique ao menu hamburguer
bx.addEventListener("click", () => {
  // ao clicar no menu, ativa classe 'active' a classe 'bx', se estiver ativa, será desativada.
  bx.classList.toggle("active");
  // ao clicar no menu, ativa classe 'showmenu' a classe 'menu-mobile', se estiver ativa, será desativada.
  menu_mobile.classList.toggle("showmenu");
});

// criando um laço de tarefas para todos os links
link_mobile.forEach((item) => {
  item.addEventListener("click", () => {
    menu_mobile.classList.remove("showmenu");
    bx.classList.toggle("active");
  });
});

// criando laço para aplicar "efeito underline" nos links do menu desktop

link_desktop.forEach((li) => {
  li.addEventListener("click", () => {
    // Remove a classe 'underline' de todos os links
    link_desktop.forEach((link) => {
      link.classList.remove("underline");
    });

    // Adiciona a classe 'underline' ao link clicado
    li.classList.add('underline');
  })
})