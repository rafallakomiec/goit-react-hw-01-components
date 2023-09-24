import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, friendId }) => {
  const statusStyle = {
    backgroundColor: isOnline ? 'green' : 'red',
  };

  return (
    <li key={friendId} className={css.item}>
      <span className={css.status} style={statusStyle}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  friendId: PropTypes.number.isRequired,
};

export default FriendListItem;
