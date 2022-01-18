import React from "react"
import { Link } from "react-router-dom"
import { usePortfolio } from "../views/portfolio.context"
function Footer({ menus = [] }) {
  const { references, openLink } = usePortfolio()
  return (
    <div className='tf-modal-content justify-content-end'>
      <footer id='footer' className='footer footer-s4'>
        <div className='container'>
          <div id='footer-widget' className='footer-widget-s3 border-bottom-s2 position-relative'>
            <h3 className='widget-title larger lt-sp06 text-white text-center'>Let’s try me!</h3>
            <div className='site-list site-list-center text-center'>
              {references.map((item) => (
                <Link className='bg-s2' onClick={openLink.bind(this, item.reference)} key={item.name}>
                  <i className={`fa fa-${item.name}`} aria-hidden='true' />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div id='bottom' className='bottom-s3'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='copyright lt-sp02'>© Roy Design, 2021 All rights reserved.</div>
              </div>
              <div className='col-lg-6'>
                <ul className='widget-nav-menu color-s2'>
                  {menus.map((menu) => (
                    <li key={menu.id}>
                      <Link to={menu.tomenu} className='click-model'>
                        {menu.namemenu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='col-lg-2'>
                <div className='socials-list color-s2'>
                  {references.map((item, i) => (
                    <Link onClick={openLink.bind(this, item.reference)} key={item.name}>
                      <i className={`fa fa-${item.name}`} aria-hidden='true' />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
