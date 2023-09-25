import userData from 'data/user.json';
import dataStats from 'data/data.json';
import { Body } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/StatisticsSection/Statistics/Statistics';
// import { useDebugValue } from 'react';

export const App = () => (
  <Body>
    <Profile
      username={userData.username}
      avatar={userData.avatar}
      tag={userData.tag}
      location={userData.location}
      stats={userData.stats}
    />
    <Statistics title="Upload stats" stats={dataStats} />
  </Body>
);
