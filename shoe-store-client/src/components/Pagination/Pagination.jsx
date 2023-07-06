import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../toolkitRedux/filtersSlice";
import { ReactComponent as Arrow } from "../../assets/oneArrow.svg";
import { fetchProducts } from "../../toolkitRedux/productsCollectionSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filtersSlice.filters);
  const productsCount = useSelector(
    (state) => state.productsCollectionSlice.productsCount
  );
  const pagesCount = Math.ceil(productsCount / filters.limit);

  const handlePageClick = (event) => {
    dispatch(changePage(event.selected + 1));
    dispatch(
      fetchProducts({ filters: { ...filters, page: event.selected + 1 } })
    );
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.paginationMainWrapper}>
      {productsCount > filters.limit ? (
        <ReactPaginate
          className={styles.paginationWrapper}
          previousLinkClassName={styles.previousBtn}
          nextLinkClassName={styles.nextBtn}
          pageLinkClassName={styles.linkBtns}
          activeLinkClassName={styles.activeLinkBtn}
          disabledClassName={styles.disabledPrevOrNextBtn}
          pageCount={pagesCount}
          forcePage={filters.page - 1}
          nextLabel={<Arrow className={styles.arrowRight} />}
          previousLabel={<Arrow className={styles.arrowLeft} />}
          onPageChange={handlePageClick}
          renderOnZeroPageCount={null}
          //pageRangeDisplayed={2}
          //marginPagesDisplayed={1}
          //breakLabel="..."
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pagination;
