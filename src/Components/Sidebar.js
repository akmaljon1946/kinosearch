import React from 'react';
import house from "../assets/house.svg";
import on from "../assets/on.svg";
import movi from "../assets/movi.svg";
import doc from "../assets/doc.svg";
import ticket from "../assets/ticket.svg";
import med from "../assets/med.svg";

function Sidebar (props) {
  return (
    <div className="sidebar">
      <div className='sidebarContainer'>
        <div className="sticky">
          <div className="sticky__box">
            <SidebarContent />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;

function SidebarContent () {
  return (
    <div className="aside">
      <a className="aside__link-activ" href={ '#' } >
        <img className="aside__icon" src={ house } alt={ "" } />
        Главная
      </a>
      <a className="aside__link" href={ '#' } >
        <img className="aside__icon" src={ on } alt={ "" } />
        Онлайн-кинотеатр
      </a>
      <a className="aside__link" href={ '#' } >
        <img className="aside__icon" src={ movi } alt={ "" } />
        Фильмы
      </a>
      <a className="aside__link" href={ '#' } >
        <img className="aside__icon" src={ doc } alt={ "" } />
        Сериалы
      </a>
      <a className="aside__link" href={ '#' } >
        <img className="aside__icon" src={ ticket } alt={ "" } />
        Билеты в кино
      </a>
      <a className="aside__link" href={ '#' } >
        <img className="aside__icon" src={ med } alt={ "" } />
        Медиа
      </a>
    </div>
  );
}