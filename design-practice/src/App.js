import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { ProductChair } from './components/ProductChair/ProductChair';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product-chair' element={<ProductChair />} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
