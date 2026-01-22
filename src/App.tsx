import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Universe from './pages/Universe';
import Contact from './pages/Contact';

type Page = 'home' | 'universe' | 'universes' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [universeId, setUniverseId] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, universeId]);

  const handleNavigate = (page: string, universeIdParam?: string) => {
    if (page === 'universe' && universeIdParam) {
      setUniverseId(universeIdParam);
      setCurrentPage('universe');
    } else if (page === 'universes') {
      setCurrentPage('home');
      setTimeout(() => {
        const section = document.getElementById('universes');
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setCurrentPage(page as Page);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'universe':
        return <Universe universeId={universeId} onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
