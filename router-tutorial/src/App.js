import React from "react";
import { Route, Routes, Link, useLocation, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">어바웃</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/*" element={<Profiles />} />
          <Route path="/history" element={<HistorySample />} />
          <Route path="/*" element={ <h1>이 페이지는 존재하지 않습니다. - {pathname}</h1> }/>
        </Routes>
    </div>
  );
};

export default App;