import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalogo" element={<Navigate to="/" replace />} />
        <Route path="/jogo/:slug" element={<Navigate to="/" replace />} />
        <Route path="/carrinho" element={<Navigate to="/" replace />} />
        <Route path="/promocoes" element={<Navigate to="/" replace />} />
        <Route path="/checkout" element={<Navigate to="/" replace />} />
        <Route path="/conta" element={<Navigate to="/" replace />} />
        <Route path="/minhas-keys" element={<Navigate to="/" replace />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
