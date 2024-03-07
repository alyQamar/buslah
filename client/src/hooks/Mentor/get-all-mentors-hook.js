
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMentorsSearch } from '../../redux/Actions/mentorsActions';

const GetAllMentorsHook = (page, limit, searchTerm, selectedCountry, selectedLanguage) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch action with all filters
    dispatch(getAllMentorsSearch(searchTerm, page, limit, selectedCountry, selectedLanguage));
  }, [dispatch, page, limit, searchTerm, selectedCountry, selectedLanguage]);

  const allmentors = useSelector((state) => state.allmentors.allmentors);
  const pagination = allmentors?.paginationResult || { currentPage: 1, numberOfPages: 1 };

  let items = [];
  try {
    if (allmentors.data) {
      items = allmentors.data;
    } else {
      items = [];
    }
  } catch (e) {
    console.error("Error fetching mentors:", e);
  }

  return [items, pagination];
}

export default GetAllMentorsHook;

