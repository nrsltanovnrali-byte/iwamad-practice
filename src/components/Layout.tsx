import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer year={2026} name="Nursultanov Nurali" />
    </>
  );
}

export default Layout;