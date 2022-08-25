import React from 'react'
import { useParams } from 'react-router-dom';

const profileData = {
    kim: {
        name: '김정훈',
        description: 'jungkimhoon'
    },
    godol: {
        name: '고돌',
        description: '고두기'
    }
};

const Profile = ({match}) => {
    console.log(match);
    const { username } = useParams();
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;
