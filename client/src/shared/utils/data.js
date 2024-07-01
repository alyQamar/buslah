import {
  HomeIcon,
  SearchIcon,
  CalendarIcon,
  MessageIcon,
  BookmarkIcon,
  HeartIcon,
  ProfileIcon,
  DotHorizontalIcon,
  ShareIcon,
  LikeIcon,
  CommentIcon,
  BookmarkReactionIcon,
  helpful,
  unhelpful
} from '@shared/utils/Icons';
import { routes } from '../../routes';

export const sideNavItems = [
  { id: 1, name: 'Home', icon: HomeIcon, route: routes.home },
  { id: 2, name: 'Explore', icon: SearchIcon, route: routes.mentors },
  { id: 3, name: 'Sessions', icon: CalendarIcon, route: routes.social },
  { id: 4, name: 'Messages', icon: MessageIcon, route: routes.social },
  { id: 5, name: 'Bookmarks', icon: BookmarkIcon, route: routes.bookmarks },
  // { id: 6, name: 'Wishlist', icon: HeartIcon, route: routes.social },
  { id: 7, name: 'Profile', icon: ProfileIcon, route: routes.profile },
  // { id: 8, name: 'More', icon: DotHorizontalIcon, route: routes.social }
];

export const postAnalysisItems = [
  { key: 'likes', AnalysisIcon: LikeIcon, name: 'likes' },
  { key: 'comments', name: 'comments' }
];

export const postActionItems = [
  { key: 'like', ActionIcon: LikeIcon, label: 'Like' },
  { key: 'comment', ActionIcon: CommentIcon, label: 'Comment' },
  { key: 'save', ActionIcon: BookmarkReactionIcon, label: 'Save' }
];

export const qaAnalysisItems = [
  { key: 'helpful',ActionIcon: helpful, label: 'Helpful' },
  { key: 'unhelpful',ActionIcon: unhelpful, label: 'Unhelpful' },
  { key: 'answers',ActionIcon: CommentIcon, label: 'Answers' },
  { key: 'save', ActionIcon: BookmarkReactionIcon, label: 'Save' }
];

export const errorData = {
  404: {
    message: "Page Not Found",
    retryAction: null
  },
};

export const FilterEnum = {
  ALL: 'all',
  POSTS: 'post',
  QA: 'qa'
};

export const SortEnum = {
  MOST_RECENT: 'mostRecent',
  FOLLOWING: 'following'
};

export const Roles= {
  Mentee: 'mentee',
  Mentor: 'mentor',
  Admin:'admin',
  Manager: 'manager',
  Owner:'owner'
};
