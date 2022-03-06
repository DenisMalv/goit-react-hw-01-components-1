import PropTypes from 'prop-types';
import css from './Friendlist.module.css'

export default function Friendlist({ friends }){
    // console.log(props);
    // const { friends } = props
    console.log(friends);
    return (
        <section className={css.friendlistSection}>
        <ul className={css.friendlist}>
            {friends.map(friend =>
                <li className={css.item} key={friend.id}>
                    <span className={friend.isOnline ? css.online : css.offline}></span>
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>
                </li>)}
            </ul>
        </section>
    )
}

Friendlist.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired, 
        isOnline: PropTypes.bool.isRequired,
  }))
}