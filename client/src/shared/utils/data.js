import {
  HomeIcon,
  SearchIcon,
  CalendarIcon,
  MessageIcon,
  BookmarkIcon,
  HeartIcon,
  ProfileIcon,
  DotsIcon
} from '@utils/Icons';
import { routes } from '../../routes';

export const sideNavItems = [
  { name: 'Home', icon: HomeIcon, route: routes.home },
  { name: 'Explore', icon: SearchIcon, route: routes.mentors },
  { name: 'Sessions', icon: CalendarIcon, route: routes.social },
  { name: 'Messages', icon: MessageIcon, route: routes.social },
  { name: 'Bookmarks', icon: BookmarkIcon, route: routes.social },
  { name: 'Wishlist', icon: HeartIcon, route: routes.social },
  { name: 'Profile', icon: ProfileIcon, route: routes.social },
  { name: 'More', icon: DotsIcon, route: routes.social }
];
