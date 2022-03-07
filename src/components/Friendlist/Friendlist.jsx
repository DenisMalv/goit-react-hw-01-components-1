import PropTypes from 'prop-types';
import css from './Friendlist.module.css'

export default function Friendlist({ friends }){

    const Friend = ({ id, isOnline, avatar, name }) => {
        return <li className={css.item} key={id}>
                    <span className={isOnline ? css.online : css.offline}></span>
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>                    
            }
    return (
        <section className={css.friendlistSection}>
            <ul className={css.friendlist}>{
                friends.map(({ id, isOnline, avatar, name }) =>
                    <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
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