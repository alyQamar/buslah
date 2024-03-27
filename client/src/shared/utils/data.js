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
  { id: 1, name: 'Home', icon: HomeIcon, route: routes.home },
  { id: 2, name: 'Explore', icon: SearchIcon, route: routes.mentors },
  { id: 3, name: 'Sessions', icon: CalendarIcon, route: routes.social },
  { id: 4, name: 'Messages', icon: MessageIcon, route: routes.social },
  { id: 5, name: 'Bookmarks', icon: BookmarkIcon, route: routes.social },
  { id: 6, name: 'Wishlist', icon: HeartIcon, route: routes.social },
  { id: 7, name: 'Profile', icon: ProfileIcon, route: routes.social },
  { id: 8, name: 'More', icon: DotsIcon, route: routes.social }
];
