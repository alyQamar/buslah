import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeed } from '../../redux/Actions/feedActions';

const useGetFeed = (page, limit, sort, filterBy) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeed(page, limit, sort, filterBy));
  }, [dispatch, page, limit, sort, filterBy]);
  const feed = useSelector((state) => state.feedReducer.feed);
  const pagination = feed?.paginationResult || { currentPage: 1, numberOfPages: 1 };

  let items = [];
  try {
    if (feed.data) {
      items = feed.data;
    } else {
      items = [];
    }
  } catch (e) {
    console.error("Error fetching feed:", e);
  }

  return [items, pagination];
};

export default useGetFeed;
