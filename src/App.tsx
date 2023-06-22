import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const PlanetPage = lazy(() => import("pages/PlanetPage/PlanetPage"));

const App = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='/:planet' element={<PlanetPage/> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
