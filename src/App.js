import { BrowserRouter } from 'react-router-dom';
import CommonRoutes from './Routes/CommonRoutes';

function App() {

  return (
          <>
            <BrowserRouter>
                <CommonRoutes />
            </BrowserRouter>
          </>
  );
}

export default App;
