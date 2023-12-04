import { Link } from 'react-router-dom';
import './MainPage.css';

export default function MainPage() {
  return (
    <>
      <h1>Main page</h1>
      <Link to="/uncontrol-form">uncontrol-form</Link>
      <Link to="/react-hook-form">react-hook-form</Link>
    </>
  );
}
