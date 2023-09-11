import viteLogo from 'images/vite.svg';
import reactLogo from 'images/react.svg';

const HomePage = () => {
  return (
    <div>
      <h1>Vite + React</h1>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
};

export default HomePage;
