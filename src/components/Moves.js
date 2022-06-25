import { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { CONTENT_PER_PAGE } from "../data";
import usePagination from "../hooks/usePagination";

const Moves = ({ moves }) => {
  const { totalPages, items, handlePageClick } = usePagination({
    contentPerPage: CONTENT_PER_PAGE,
    count: moves.length,
    items: moves,
  });

  return (
    <div className="moves-container">
      <div className="moves-list">
        {items.length ? (
          items.map((move, idx) => {
            return (
              <div className="move-item" key={idx}>
                {move.move.name}
              </div>
            );
          })
        ) : (
          <h1>This pokemon has no moves</h1>
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        previousLabel="&larr;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        nextLabel="&rarr;"
        renderOnZeroPageCount={null}
        disabledClassName="disabled"
        activeClassName="active"
        className="pagination"
        pageClassName="page"
        nextClassName="page"
        previousClassName="page"
        breakClassName="page"
        pageLinkClassName="active-link"
      />
    </div>
  );
};
export default Moves;
