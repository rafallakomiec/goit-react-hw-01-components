import './App.css';
import user from './assets/user.json';
import statistics from './assets/statistics.json';
import friends from './assets/friends.json';
import transactions from './assets/transactions.json';
import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={statistics.title} stats={statistics.stats} />
      <FriendList friends={friends.friends} />
      <TransactionHistory items={transactions.transactions} />
    </>
  );
}

export default App;
