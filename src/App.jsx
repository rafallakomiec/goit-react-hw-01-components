import './App.css';
import user from './assets/user.json';
import Profile from './components/Profile/Profile.jsx';

function App() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

export default App;
