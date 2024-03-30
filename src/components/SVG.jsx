import { ReactComponent as X } from '../svg/x.svg';
import { ReactComponent as Home } from '../svg/home.svg';
import { ReactComponent as Explore } from '../svg/explore.svg';
import { ReactComponent as Notifications } from '../svg/notification.svg';
import { ReactComponent as Messages } from '../svg/message.svg';
import { ReactComponent as Post } from '../svg/post.svg';
import { ReactComponent as Setting } from '../svg/setting.svg';
import { ReactComponent as Verified } from '../svg/verified.svg';
import { ReactComponent as ThreePoints } from '../svg/three_points.svg';
import { ReactComponent as Comment } from '../svg/comment.svg';
import { ReactComponent as Save } from '../svg/save.svg';
import { ReactComponent as Share } from '../svg/share.svg';
import { ReactComponent as Like } from '../svg/like.svg';
import { ReactComponent as Retweet } from '../svg/retweet.svg';
import { ReactComponent as Views } from '../svg/views.svg';
import { ReactComponent as Share2 } from '../svg/share2.svg';
import { ReactComponent as Lists } from '../svg/lists.svg';
import { ReactComponent as Profile } from '../svg/profile.svg';
import { ReactComponent as More } from '../svg/more.svg';
import { ReactComponent as Media } from '../svg/media.svg';
import { ReactComponent as Gif } from '../svg/gif.svg';
import { ReactComponent as Emoji } from '../svg/emoji.svg';
import { ReactComponent as Location } from '../svg/location.svg';
import { ReactComponent as Poll } from '../svg/poll.svg';
import { ReactComponent as Schedule } from '../svg/schedule.svg';
import { ReactComponent as Search } from '../svg/search.svg';
import { ReactComponent as Premium } from '../svg/x.svg';
import { ReactComponent as Communities } from '../svg/communities.svg';

const svg = {
  'X': styles => <X style={{...styles}} />,
  'Home': styles => <Home style={{...styles}} />,
  'Explore': styles => <Explore style={{...styles}} />,
  'Notifications': styles => <Notifications style={{...styles}} />,
  'Messages': styles => <Messages style={{...styles}} />,
  'Post': styles => <Post style={{...styles}} />,
  'Setting': styles => <Setting style={{...styles}} />,
  'Verified': styles => <Verified style={{...styles}} />,
  'ThreePoints': styles => <ThreePoints style={{...styles}} />,
  'Comment': styles => <Comment style={{...styles}} />,
  'Save': styles => <Save style={{...styles}} />,
  'Share': styles => <Share style={{...styles}} />,
  'Like': styles => <Like style={{...styles}} />,
  'Retweet': styles => <Retweet style={{...styles}} />,
  'Views': styles => <Views style={{...styles}} />,
  'Share2': styles => <Share2 style={{...styles}} />,
  'Lists': styles => <Lists style={{...styles}} />,
  'Profile': styles => <Profile style={{...styles}} />,
  'More': styles => <More style={{...styles}} />,
  'Media': styles => <Media style={{...styles}} />,
  'Gif': styles => <Gif style={{...styles}} />,
  'Emoji': styles => <Emoji style={{...styles}} />,
  'Location': styles => <Location style={{...styles}} />,
  'Poll': styles => <Poll style={{...styles}} />,
  'Schedule': styles => <Schedule style={{...styles}} />,
  'Search': styles => <Search style={{...styles}} />,
  'Premium': styles => <Premium style={{...styles}} />,
  'Communities': styles => <Communities style={{...styles}} />,
}

const SVG = ({ name, w='26.25px', h='26.25px', color='#E7E9EA' }) => {
  const styles = {
    'width': w,
    'height': h,
    'fill': color,
  }
  return (svg[name](styles));
}

export { SVG };
