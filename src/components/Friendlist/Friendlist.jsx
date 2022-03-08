import PropTypes from 'prop-types';
import css from './Friendlist.module.css'
import { FriendListItem } from '../FriendListItem/FriendListItem'

export const Friendlist = ({ friends }) =>{

    return (
        <section className={css.friendlistSection}>
            <ul className={css.friendlist}>{
                friends.map(({ id, isOnline, avatar, name }) =>
                    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
                )}
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