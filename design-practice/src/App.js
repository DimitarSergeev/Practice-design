import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
