import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MainPage from '../pages/MainPage/MainPage';

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<MainPage />}>
          {/* <Route
            index
            element={}
          ></Route> */}
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
