import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import lang from '../assets/images/lang.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between items-center py-5 w-[90%] mx-auto">
          <div className="flex justify-center items-center gap-10">
            <img className="w-32" src={logo} alt="Logo" />
            <nav className="hidden xl:flex gap-5 text-[#050038] text-[17px] font-normal items-center">
              <AnchorLink href="#product">Product</AnchorLink>
              <AnchorLink href="#solutions">Solutions</AnchorLink>
              <AnchorLink href="#resources">Resources</AnchorLink>
              <AnchorLink href="#enterprise">Enterprise</AnchorLink>
              <AnchorLink href="#pricing">Pricing</AnchorLink>
            </nav>
          </div>

          <div className="hidden xl:flex items-center gap-5">
            <div className="flex items-center gap-2">
              <img className="w-5" src={lang} alt="Language" />
              <p>EN</p>
            </div>
            <div className="flex gap-5 text-[#050038] text-[17px] font-normal">
              <AnchorLink href="#contact">Contact Sales</AnchorLink>
              <AnchorLink href="#login">Login</AnchorLink>
            </div>
            <AnchorLink offset={-500} href="#signup">
              <button className="bg-[#4262FF] text-white border border-[#4262FF] py-2 px-5 rounded-3xl text-[17px]">
                Sign up free
              </button>
            </AnchorLink>
          </div>

          {/* Hamburger */}
          <button
            className="xl:hidden flex flex-col gap-1 z-50"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-7 h-1 bg-[#050038] rounded"></span>
            <span className="block w-7 h-1 bg-[#050038] rounded"></span>
            <span className="block w-7 h-1 bg-[#050038] rounded"></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-all duration-300 ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute top-0 left-0 h-full w-full bg-white transform transition-transform duration-700 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between w-full px-8 pt-6">
            <img className="w-32" src={logo} alt="Logo" />
            <button
              className="text-5xl font-bold text-[#050038] hover:text-[#4262FF]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <ul className="flex flex-col items-center gap-8 text-center text-2xl font-semibold text-[#050038] mt-16">
            <AnchorLink href="#product" onClick={() => setMenuOpen(false)}>Product</AnchorLink>
            <AnchorLink href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</AnchorLink>
            <AnchorLink href="#resources" onClick={() => setMenuOpen(false)}>Resources</AnchorLink>
            <AnchorLink href="#enterprise" onClick={() => setMenuOpen(false)}>Enterprise</AnchorLink>
            <AnchorLink href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</AnchorLink>
            <AnchorLink href="#contact" onClick={() => setMenuOpen(false)}>Contact Sales</AnchorLink>
            <AnchorLink href="#login" onClick={() => setMenuOpen(false)}>Login</AnchorLink>
            <AnchorLink href="#signup" onClick={() => setMenuOpen(false)}>
              <button className="bg-[#4262FF] text-white border border-[#4262FF] py-2 px-6 rounded-3xl">
                Sign up free
              </button>
            </AnchorLink>
          </ul>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[80px] xl:h-[88px]"></div>
    </>
  );
}

export default Header;
