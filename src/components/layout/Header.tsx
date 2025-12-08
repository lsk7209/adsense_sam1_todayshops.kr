import { Link } from 'react-router-dom';
import { Calculator, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <Calculator className="header__logo-icon" />
          <span className="header__logo-text">BizCalc Pro</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav desktop-only">
          <Link to="/vat-calculator" className="header__link">부가세 계산기</Link>
          <Link to="/margin-calculator" className="header__link">마진 계산기</Link>
          <Link to="/salary-calculator" className="header__link">연봉 계산기</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="header__menu-btn mobile-only"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <nav className="header__mobile-nav mobile-only" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-header">
            <span className="mobile-nav-title">Menu</span>
            <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <Link to="/vat-calculator" className="header__mobile-link" onClick={() => setIsMenuOpen(false)}>
            <span className="link-icon">📊</span> 부가세 계산기
          </Link>
          <Link to="/margin-calculator" className="header__mobile-link" onClick={() => setIsMenuOpen(false)}>
            <span className="link-icon">📈</span> 마진 계산기
          </Link>
          <Link to="/salary-calculator" className="header__mobile-link" onClick={() => setIsMenuOpen(false)}>
            <span className="link-icon">💰</span> 연봉 계산기
          </Link>

          <div className="mobile-nav-divider"></div>

          <Link to="/about" className="header__mobile-sub-link" onClick={() => setIsMenuOpen(false)}>소개</Link>
          <Link to="/contact" className="header__mobile-sub-link" onClick={() => setIsMenuOpen(false)}>문의하기</Link>
        </nav>
      </div>

      <style>{`
        .header {
          background: var(--bg-card);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header__inner {
          height: var(--navbar-height);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header__logo {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-weight: 700;
          font-size: var(--text-lg);
          color: var(--primary);
        }
        .header__logo-icon {
          color: var(--secondary);
        }
        .header__nav {
          display: flex;
          gap: var(--space-6);
        }
        .header__link {
          font-weight: 500;
          color: var(--text-sub);
          transition: color 0.2s;
        }
        .header__link:hover {
          color: var(--primary);
        }
        
        /* Mobile Menu Styles */
        .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
            z-index: 200;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        .mobile-menu-overlay.open {
            opacity: 1;
            visibility: visible;
        }

        .header__mobile-nav {
            position: absolute;
            top: 0;
            right: 0;
            width: 280px;
            height: 100%;
            background: var(--bg-card);
            box-shadow: -4px 0 15px rgba(0,0,0,0.1);
            padding: var(--space-6);
            display: flex;
            flex-direction: column;
            gap: var(--space-2);
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-menu-overlay.open .header__mobile-nav {
            transform: translateX(0);
        }

        .mobile-nav-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--space-6);
        }
        .mobile-nav-title {
            font-size: var(--text-lg);
            font-weight: 700;
            color: var(--primary);
        }
        .close-btn {
            background: none;
            border: none;
            color: var(--text-sub);
            cursor: pointer;
            padding: var(--space-1);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .header__mobile-link {
            display: flex;
            align-items: center;
            gap: var(--space-3);
            padding: var(--space-3) var(--space-4);
            border-radius: var(--radius-md);
            font-size: var(--text-base);
            font-weight: 600;
            color: var(--text-main);
            transition: background 0.2s;
        }
        .header__mobile-link:hover, .header__mobile-link:active {
            background: var(--bg-page);
            color: var(--primary);
            color: var(--bg-card); /* Assuming standard hover contrast */
        }
        /* Fix hover color to primary text color or similar if bg changes */
         .header__mobile-link:hover {
             color: var(--primary);
         }

        .link-icon {
            font-size: 1.2rem;
        }

        .mobile-nav-divider {
            height: 1px;
            background: var(--border-color);
            margin: var(--space-4) 0;
        }

        .header__mobile-sub-link {
            padding: var(--space-2) var(--space-4);
            font-size: var(--text-sm);
            color: var(--text-sub);
        }
        
        @media (min-width: 768px) {
          .mobile-only { display: none; }
        }
        @media (max-width: 767px) {
          .desktop-only { display: none; }
        }
      `}</style>
    </header>
  );
};
