import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {
  return (
    <ul className={css.gallery}>
      {friends.map((friend) => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
}
