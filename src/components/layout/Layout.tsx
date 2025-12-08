import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
    return (
        <div className="layout-wrapper">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />

            <style>{`
        .layout-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
          width: 100%;
        }
      `}</style>
        </div>
    );
};
