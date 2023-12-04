import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MainPage from '../pages/MainPage/MainPage';
import UncontrolFormPage from '../pages/UncontrolFormPage/UncontrolFormPage';
import ReactHookFormPage from '../pages/ReactHookFormPage/ReactHookFormPage';

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/uncontrol-form" element={<UncontrolFormPage />}></Route>
        <Route path="/react-hook-form" element={<ReactHookFormPage />}></Route>
      </Routes>
    </ErrorBoundary>
  );
}
