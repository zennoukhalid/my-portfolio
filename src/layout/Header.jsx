import React from "react"
import { Link } from "react-router-dom"
import { usePortfolio } from "../views/portfolio.context"

function Header({ menus = [] }) {
  const { references, openLink } = usePortfolio()
  return (
    <header id='header' className='header header-style4 has-menu-model'>
      <div className='container'>
        <div className='flex-header d-flex justify-content-between align-items-center'>
          <div id='logo' className='logo'>
            <Link
              to='/'
              onClick={() => {
                window.location.href = "/"
              }}
              title='Logo'
            >
               <img src='images/logo/khalid.png' alt='images' width={122} height={25} />
            </Link>
          </div>
          <div dir='rtl' className='btn-menu mobile-header__menu-button'>
            <div className='line line-1' />
            <div className='line line-2' />
            <div className='line line-3' />
            <div className='line line-4' />
            
          </div>
          <div className='content-menu d-lg-flex'>
            <div className='nav-wrap'>
              <nav id='mainnav' className='mainnav'>
                <ul className='menu ace-responsive-menu' data-menu-style='horizontal'>
                  {menus.map((menu) => (
                    <li key={menu.id}>
                      <Link to={menu.tomenu} className='click-model'>
                        {menu.namemenu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className='socials-list-hd s3 hv2'>
            {references.map((item) => (
              <Link onClick={openLink.bind(this, item.reference)} key={item.name}>
                <i className={`fa fa-${item.name}`} aria-hidden='true' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
