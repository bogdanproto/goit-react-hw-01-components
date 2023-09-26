import userData from 'data/user.json';
import dataStats from 'data/data.json';
import friendsList from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Body } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/StatisticsSection/Statistics/Statistics';
import { FriendList } from 'components/FriendSection/FriendList/FriendList';
import { TransactionsHistory } from 'components/TransactionSection/TransactionHistory/TransactionHistory';

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
    <FriendList friends={friendsList} />
    <TransactionsHistory items={transactions} />
  </Body>
);
