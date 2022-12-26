import React from 'react';
import myImg from '../assets/kino.svg';
import play from '../assets/play.svg';
import tv from '../assets/tv.svg';
import { link, Routes, Route } from "react-router-dom";
function Header () {
  return (
    <div className="hcontainer">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <a href={ "https://www.kinopoisk.ru/" } target={ " _blank" } className="header__link">
                <img src={ myImg } alt="kinopoisk logo" />
              </a>
            </div>
            <Hassidebar />
          </div>
        </div>
      </header >
    </div>
  );
};

export default Header;

function Hassidebar () {
  return (
    <div className="hassidbar_inner">
      <nav className="navbar">
        <a href={ '#' } className="navbar__link">
          <img className="navbar__link-img" src={ play } alt="" />Онлайн-кинотеатр
        </a>
        <a href={ "#" } className="navbar__link">
          <img className="navbar__link-img" src={ tv } alt="" />Установить на ТВ
        </a>
      </nav>
      <div className="search">
        <div className="search__box">
          <form action="" className="form">
            <div className="form__box">
              <input className="form__input" type="text" aria-label='Фильмы,сериалы,персоны' placeholder='Фильмы,сериалы,персоны' />
              <div className="form__control">
                <a href={ "#" } className="form__control_link">
                  <svg className='form__svg' width={ 18 } height={ 18 } viewBox={ '0 0 18 18' }><path fill="#000" fill-rule="evenodd" d="M5.995 10.3A2.7 2.7 0 0 1 8.504 12H17v2H8.504a2.7 2.7 0 0 1-5.018 0H1v-2h2.486a2.7 2.7 0 0 1 2.509-1.7zm0 1.7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5.997-8.7A2.7 2.7 0 0 1 14.5 5H17v2h-2.5a2.7 2.7 0 0 1-5.017 0H1V5h8.483a2.7 2.7 0 0 1 2.509-1.7zm0 1.7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                  </svg>
                </a>
                <button className="form__control_btn">
                  <svg className="form__svg" width={ 18 } height={ 18 }>
                    <path fill="#000" fill-rule="evenodd" d="M12.026 10.626L16 14.6 14.6 16l-3.974-3.974a5.5 5.5 0 1 1 1.4-1.4zM7.5 11.1a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="sign-up">
        <div>
          <a className="sign-up__link" href={ '#' } >Попробовать Плюс</a>
        </div>
        <button className="sign-up__btn">Войти</button>
      </div>
    </div>
  );
}


