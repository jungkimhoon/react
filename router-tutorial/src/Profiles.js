import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';


export const Profiles = () => {
  return (
    <div>
        <h3>유저 목록:</h3>
        <ul>
            <li>
                <Link to="/profiles/kim">Kim</Link>
            </li>
            <li>
                <Link to="/profiles/godol">godol</Link>
            </li>
        </ul>

        <Routes>
            <Route path="/" exact render={() => <div>유저를 선택해라</div>}/>
            <Route path="/:username" element={<Profile />} />
        </Routes>
    </div>    
  );
};

export default Profiles;
