import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

const FriendList = ({ friends }) => {
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
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
