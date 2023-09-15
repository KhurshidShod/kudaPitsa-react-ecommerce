import styles from "./Header.module.scss";
import { CgDarkMode } from "react-icons/cg";
import Logo from "../../assets/images/logo.svg";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../button";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContextProvider";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);
  const [cartFixed, setCartFixed] = useState(false);
  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 115) {
        setCartFixed(true);
      } else {
        setCartFixed(false);
      }
    });
  });

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") === "light" ? "dark" : "light"
    );
  };

  return (
    <header>
      <nav>
        <div className="container">
          <div className={styles.navTop}>
            <div className={styles.navTop__left}>
              <select
                name=""
                id=""
                defaultValue={localStorage.getItem("lang")}
                onChange={(e) => changeLang(e)}
              >
                <option value="uz">Uz</option>
                <option value="en">En</option>
                <option value="ru">Ru</option>
              </select>
              <p>{t("adresTek")}</p>
              <p>
                {t("yetVaqt")} <b>00:24:19</b>
              </p>
            </div>
            <div
              className={`${styles.nav__menu} ${navOpen ? styles.open : null}`}
            >
              <div>
                <button>
                  <CgDarkMode
                    onClick={changeTheme}
                    color="var(--color-orange)"
                  />
                </button>
              </div>
              <ul>
                <li>
                  <a href="">Акции</a>
                </li>
                <li>
                  <a href="">О компании</a>
                </li>
                <li>
                  <a href="">Пользовательское соглашение</a>
                </li>
                <li>
                  <a href="">Условия гарантии</a>
                </li>
                <li>
                  <a href="">Ресторан</a>
                </li>
                <li>
                  <a href="">Контакты</a>
                </li>
                <li>
                  <a href="">Поддержка</a>
                </li>
                <li>
                  <a href="">Отследить заказ</a>
                </li>
              </ul>
            </div>
            <div className={styles.navTop__right}>
              <p>
                {t("ishVaqti")}
                <b>: 11:00 до 23:00</b>
              </p>
              <button onClick={changeTheme}>
                <CgDarkMode color="var(--color-orange)" />
              </button>
            </div>
          </div>
        </div>
        <span></span>
        <div className="container">
          <div
            className={`${styles.navBottom} ${
              cartFixed ? styles.cartBtm : null
            }`}
          >
            <NavLink href="" className={styles.logo}>
              <img src={Logo} alt="" />
              Куда пицца
            </NavLink>
            <input
              type="checkbox"
              id="checkbox"
              onChange={() => setNavOpen(!navOpen)}
            />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
            <Button padding={"8px 16px"} br={"4px"} fontSize={"16px"}>
              <FaShoppingCart />
              <div>
                <p>0</p>
                <p>P</p>
              </div>
            </Button>
          </div>
        </div>
        <span></span>
      </nav>
    </header>
  );
};

export default Header;
