import { Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { CommandPalette } from './components/layout/CommandPalette';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetail';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CommandPalette />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;