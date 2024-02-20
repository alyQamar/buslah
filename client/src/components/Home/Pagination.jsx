
import React from 'react';
import  ReactPaginate  from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {

  const handlePageClick = (data) => {
    onPageChange(data);
  };
  return (
    <ReactPaginate
    pageCount={pageCount}
    onPageChange={handlePageClick}
    containerClassName="pagination flex justify-center items-center"
    activeClassName="active"
    pageClassName="page-item mx-1"
    pageLinkClassName="page-link rounded-full bg-white hover:bg-cyan-800 hover:text-white w-10 h-10 flex items-center justify-center"
    breakClassName="page-item"
    breakLinkClassName="page-link"
    previousClassName="page-item"
    previousLinkClassName="page-link"
    nextClassName="page-item"
    nextLinkClassName="page-link"
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    />
  );
};

export default Pagination;

