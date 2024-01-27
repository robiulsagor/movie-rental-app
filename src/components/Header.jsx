import { useContext, useState } from "react";
import Moon from "../assets/icons/Moon.svg";
import Sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Cart from "../assets/shopping-cart.svg";

import { MovieContext, ThemeContext } from "../context/MovieContext";
import CartModal from "./CartModal";

export default function Header() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [showCartModal, setShowCartModal] = useState(false);

  const { state } = useContext(MovieContext);

  return (
    <>
      {showCartModal && (
        <CartModal onCloseModal={() => setShowCartModal(false)} />
      )}
      <header>
        <nav className="container py-6 flex items-center justify-between ">
          <img src={Logo} width="139" height="26" alt="site logo" />

          <ul className="flex items-center space-x-5 dark:bg-slate-900">
            <li>
              <a
                href="#"
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg  p-1 inline-block "
              >
                <img src={Ring} width={24} height={24} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-primary/20 dark:bg-primary/[7%] inline-block p-1 rounded-lg"
                onClick={() => setIsDark(!isDark)}
              >
                <img src={isDark ? Sun : Moon} width={24} height={24} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-primary/20 dark:bg-primary/[7%] p-1 inline-block rounded-lg relative"
              >
                <img
                  src={Cart}
                  width={24}
                  height={24}
                  onClick={() => setShowCartModal(true)}
                />

                {state.cartItems.length > 0 && (
                  <span className="absolute -top-5 ring-0 -right-5 bg-primary w-[30px] h-[30px] text-sm flex items-center justify-center rounded-full text-center">
                    {state.cartItems.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
