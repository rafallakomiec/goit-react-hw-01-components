import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

const FriendList = function ({ friends }) {
  const friendItems = friends.map((friend, index) => {
    return (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        friendId={friend.id}
        key={index}
      />
    );
  });

  return <ul className={css.friendList}>{friendItems}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
