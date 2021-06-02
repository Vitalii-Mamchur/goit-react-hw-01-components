import React from 'react';
import style from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  const imgClass = isOnline ? style.online : style.offline;

  return (
    <div>
      <span className={style.status}>{isOnline}</span>
      <img className={imgClass} src={avatar} alt="" width="48" />
      <p className={style.name}>{name}</p>
    </div>
  );
};

export default FriendListItem;
