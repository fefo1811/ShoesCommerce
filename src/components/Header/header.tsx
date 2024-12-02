import React, { useRef, useLayoutEffect } from "react";
import style from './header.module.css';

export default function Header() {
    // const containerRef = useRef(null);

    // useLayoutEffect(() => {
    //     containerRef.current
    // })

    return (
        <header className={style.header__container}>
            {/* <nav className={style.primary__nav}>
                <li><a href="">Air Jordan</a></li>
                <li><a href="">Air Force</a></li>
                <li><a href="">Air Max</a></li>
            </nav> */}
            <div className={style.menu__container} onClick={abrirMenu}>
                <i className={`ri-menu-fill ri-2x ${style.menu__burguer}`}></i>
            </div>

            <nav className={style.primary__nav}>
                <a href=""><li>Air Jordan</li></a>
                <a href=""><li>Air Force</li></a>
                <a href=""><li>Air Max</li></a>
            </nav>

            <nav className={style.secondary__nav}>
                <a href=""><i className="ri-shopping-cart-2-fill ri-2x"></i></a>
            </nav>
        </header>
    )
}

function abrirMenu() {
    
}