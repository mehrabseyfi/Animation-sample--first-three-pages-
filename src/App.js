import './App.scss';
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="nav">
        <input type="button" value="1" onClick={() => navigate('1')} />
        <input type="button" value="2" onClick={() => navigate('2')} />
        <input type="button" value="3" onClick={() => navigate('3')} />
      </div>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
