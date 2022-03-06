import PropTypes from 'prop-types';
// import css from './Profile.module.css'
import { SectionProfile,Description,Avatar,Name,Tag,Location,Stats,Item,Label,Quantity } from './Profile.styled.jsx'

export default function Profile({ avatar,username,tag,location,stats}) {
  // console.log(props);
  // const { avatar,username,tag,location,stats} = props
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
        <Quantity>{stats.followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </Item>
    </Stats>
  </SectionProfile>
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}