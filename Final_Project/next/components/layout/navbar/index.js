import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import cn from 'classnames'
import styles from '@/styles/layout/navbar.module.css'
import Drawer from '@/components/layout/drawer'
import { ImFacebook2 } from 'react-icons/im'
import { FaShoppingCart } from 'react-icons/fa'
import { RiMenuFoldFill } from 'react-icons/ri'
import { VscSignOut } from 'react-icons/vsc'
import { useCart } from '@/hooks/use_cart'
const Navbar = ({ navItemName = '', navbarControl = '' }) => {
  const [isSticky, setIsSticky] = useState(true)
  const {cartItemCount} =useCart()

  return (
    <>
      <Head>
        <link rel="icon" href="/browsing.ico" />
      </Head>
      <header
        className={`header-area ${isSticky ? styles.sticky : ''} m-0 pt-0 pb-0`}
      >
        <div className="container-fluid">
          <div className="row d-flex justify-content-center h-100">
            <div className="col-lg-12 col-xl-10">
              <div className={cn(styles.nav, navbarControl)}>
                {/* Logo Area  */}
                <div className={cn(styles.logoBox, navItemName)}>
                  <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>締杉旅遊</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                </div>
                {/* Nav */}
                <nav className={styles.rowNav}>
                  <ul>
                    <li className="nav-item">
                      <Link className={styles.navLink} href="/">
                        關於締杉
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/itinerary/country-all"
                        className={styles.navLink}
                      >
                        <div>各國行程</div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className={styles.navLink} href="/lectures">
                        旅遊講座
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/product/product" className={styles.navLink}>
                        <div>締杉商城</div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className={styles.navLink} href="/contact">
                        聯絡我們
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link href="/members" className={styles.navLink}>
                        <div>締杉會員</div>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className={`menu-content-area d-flex align-items-center ${navItemName}`}
                >
                  {/* Header Social Area */}
                  <div className={styles.icons}>
                    <Link href="/cart/cart" title="購物車" >
                      <FaShoppingCart size={25} className={styles.facebookIcon} />
                      <span>
                        {cartItemCount > 0 && (
                          <span  className={styles.navLink}>{cartItemCount}</span>
                        )}
                      </span>
                    </Link>

                    <Link href="#" title="Facebook">
                      <ImFacebook2 size={23} className={styles.facebookIcon} />
                    </Link>

                    <Link href="/members/logout" title="登出">
                      <VscSignOut size={30} className={styles.facebookIcon} />
                    </Link>
                  </div>

                  <div className={styles.menuIcon}>
                    <Drawer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
