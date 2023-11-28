import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleToggleMenu = () => {
    setActive(!active);
  };


  // ========= APLICAR EFEITO UNDERLINE NO LI =========

  // Usando o hook useState(null) para criar um estado chamado 'activeLink'. Este estado será usado para rastrear qual link (li) está ativo no momento. Inicialmente, o valor de 'activeLink' é definido como null, ou seja, vazio.
  // O estado 'setActiveLink' será criado para permitir alteração dinamicamente no li que está ativo.
  const [activeLink, setActiveLink] = useState(null);

  // Função chamada "handleToggleLink" que recebe o parâmetro 'link'. Quando um li é clicado, esta função é chamada.
  const handleToggleLink = (link) => {
    // link === activeLink | Verifica se o li atual é o mesmo que o li que já está ativo (ou seja, activeLink). Se for verdadeiro, significa que o usuário está clicando no li que já está ativo. Se for falso, 

    // null : link | Se o link clicado não for o mesmo que o link ativo, definimos 'activeLink' como o link clicado. Se for o mesmo link que já está ativo, definimos activeLink como null, indicando que nenhum link está ativo.
    setActiveLink(link === activeLink ? null : link);
  };

  return (
    <>
      <header>
        <nav>
          <ul className="menu">
            <li>
              <a
                href="#"
                className={`link-menu-desktop ${
                  activeLink === "marketplace" ? "underline" : ""
                }`}
                onClick={() => handleToggleLink("marketplace")}
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`link-menu-desktop ${
                  activeLink === "artists" ? "underline" : ""
                }`}
                onClick={() => handleToggleLink("artists")}
              >
                Artists
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`link-menu-desktop ${
                  activeLink === "community" ? "underline" : ""
                }`}
                onClick={() => handleToggleLink("community")}
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`link-menu-desktop ${
                  activeLink === "collections" ? "underline" : ""
                }`}
                onClick={() => handleToggleLink("collections")}
              >
                Collections
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`bx ${active ? "active" : ""}`}
          onClick={handleToggleMenu}
        ></div>

        <div className="cta-desktop ml-3">
          <a href="" className="btn">
            Login
          </a>
        </div>
      </header>

      <div className="relative">
        <div className={`menu-mobile ${active ? "showmenu" : ""}`}>
          <ul className="nav-mobile">
            <li>
              <a href="#" className="link-menu-mobile">
                Marketplace
              </a>
            </li>
            <li>
              <a href="#" className="link-menu-mobile">
                Artists
              </a>
            </li>
            <li>
              <a href="#" className="link-menu-mobile">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="link-menu-mobile">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="link-menu-mobile no-border">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
