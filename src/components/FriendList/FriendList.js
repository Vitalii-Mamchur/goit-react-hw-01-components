import React from 'react';
import style from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map(friend => (
        <li className={style.item} key={friend.id}>
          <FriendListItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
