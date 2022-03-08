import PropTypes from 'prop-types';
// import css from './Profile.module.css'
import { SectionProfile,Description,Avatar,Name,Tag,Location,Stats,Item,Label,Quantity } from './Profile.styled.jsx'

export const Profile = ({ avatar,username,tag,location,followers,views,likes}) => {

  return <SectionProfile>
    <Description>
      <Avatar src={avatar} alt={username}/>
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <Item>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Item>
    </Stats>
  </SectionProfile>
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}