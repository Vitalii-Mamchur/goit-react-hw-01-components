import React from 'react';
import style from './FriendList.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <div>
      <span className={style.status}>{isOnline}</span>
      <img className={style.avatar} src={avatar} alt="" width="48" />
      <p className={style.name}>{name}</p>
    </div>
  );
};

export default FriendListItem;
