import React, { useState, useEffect, useRef, useCallback } from 'react';
import PostCard from '@components/Post/PostCard';
import SocialFeedFilter from './SocialFeedFilter';
import QuestionCard from '@components/Q&A/QuestionCard';
import AddContent from '../Feed/AddContent';
import useGetFeed from '@hooks/Feed/useGetFeed';
import { FilterEnum, SortEnum } from '@utils/data';

const HomeContentBody = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Number of items per page
  const [sort, setSort] = useState(SortEnum.MOST_RECENT);
  const [filterBy, setFilterBy] = useState(FilterEnum.ALL);
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch new feed items based on current page, limit, sort, and filter
  const [newFeedItems, pagination] = useGetFeed(page, limit, sort, filterBy);

  useEffect(() => {
    if (newFeedItems.length > 0) {
      setLoading(true);
      setFeedItems((prevItems) => [...prevItems, ...newFeedItems]);
      setLoading(false);
    }
    setHasMore(newFeedItems.length > 0);
  }, [newFeedItems]);

  const observer = useRef();
  const lastFeedElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleFilterChange = (filter) => {
    setFilterBy(filter);
    setPage(1);
    setFeedItems([]);
  };

  const handleSortChange = (sort) => {
    setSort(sort);
    setPage(1);
    setFeedItems([]);
  };

  const handleRefresh = () => {
    setPage(1);
    setFeedItems([]);
  };

  return (
    <div className="w-[680px] h-[1780px] relative bg-stone-50 rounded-2xl border-t flex flex-col pl-[32px] pr-[32px] pt-[30px]">
      <div>
        <div className="mb-[30px]">
          <SocialFeedFilter onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
        </div>
        <div className="mb-[20px]">
          <AddContent />
        </div>
        <div className="flex flex-col gap-[15px]">
          {feedItems.map((item) => (
            <div key={item._id} ref={item === feedItems[feedItems.length - 1] ? lastFeedElementRef : null}>
              {item.post ? <PostCard post={item.post} /> : <QuestionCard question={item.question} />}
            </div>
          ))}
        </div>
        {loading && <div>Loading...</div>}
        {!hasMore && (
          <div className="flex justify-center mt-4">
            <button onClick={handleRefresh} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              New Feed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeContentBody;
