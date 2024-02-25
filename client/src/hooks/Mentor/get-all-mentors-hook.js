
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMentors } from '../../redux/Actions/mentorsActions';

const GetAllMentorsHook = (page, limit) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMentors(page, limit));
  }, [page, limit]);

  const allmentors = useSelector((state) => state.allmentors.allmentors)
  const pagination = allmentors?.paginationResult || { currentPage: 1, numberOfPages: 1 };


  let items = [];
    try {
        if (allmentors.data)
            items = allmentors.data;
        else
            items = []
    } catch (e) { }

    return [items,pagination]

}

export default GetAllMentorsHook
