import React from 'react'
import friends from '../dummy-data/friends'
// 👉 1- FriendsList renders several Friend components, import Friend
import Friend from './Friend'

export default function FriendsList(props) {
  const { listOfFriends, changeStatus } = props
  // 👉 2- What data does FriendsList need to do its job? Use destructuring
  return (
    <div className='list-friends container'>
      {/* 👉 3- We need to loop over the data rendering a Friend as we go */}
      {listOfFriends.map(friendObj => {
        return <Friend
        key={friendObj.id}
        friendDetails={friendObj}
        changeStatus={changeStatus}
        />
      })}
      {/* Each friend is going to need a `key` prop and also some other prop with data */}
    </div>
  )
}
