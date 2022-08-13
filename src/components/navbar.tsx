import React, { useState, useEffect } from 'react';
import { debounce } from '../utils/helpers';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const navigation = [
  { name: 'About', href: '#about', current: false },
  { name: 'Experience', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  //{ name: 'Blog', href: '/blog', current: false },
]

function classNames(...classes: string[]) {  
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    if (typeof window === 'undefined') return

    const currentScrollPos = window.pageYOffset;

    setVisible((
      prevScrollPos > currentScrollPos &&
      prevScrollPos - currentScrollPos > 70) ||
      currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    }

  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    transition: 'top 0.2s'
  }

  return (
    <nav className='bg-sub-alt-color/50 drop-shadow-lg h-14 w-full fixed text-white flex justify-between items-center px-10' style={{ ...navbarStyles, top: visible ? '0' : '-3.5rem' }}>
      <Link to='/'><StaticImage src="../images/logo.png" className="w-10" alt='Logo'/></Link>
      <div>
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={classNames(
              item.current ? 'text-main-color' : 'hover:text-main-color',
              'mx-6 rounded-md text-sm font-medium'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
