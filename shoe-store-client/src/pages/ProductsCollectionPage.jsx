import React from "react";
import styles from "./styles/ProductsCollectionPage.module.scss";
import ProductsTable from "../components/ProductsTable/ProductsTable";
import Filters from "../components/Filters/Filters";
import { useMatchMedia } from "../hooks/useMatchMedia";
import { useSelector, useDispatch } from "react-redux";
import { changeFiltersWindowState } from "../toolkitRedux/filtersSlice";

function ProductsCollectionPage() {
  const filtersWindowState = useSelector(
    (state) => state.filtersSlice.filtersWindowState
  );
  const { screen770_plus } = useMatchMedia();
  const dispatch = useDispatch();
  return (
    <>
      {!screen770_plus && (
        <div className={styles.btnsWrapper}>
          <div
            onClick={() => {
              dispatch(changeFiltersWindowState());
            }}
            className={styles.filtersBtn}
          >
            Filters
          </div>
          <div className={styles.menuBtn}>Menu</div>
        </div>
      )}
      <div className={styles.productsCollectionPageWraper}>
        <Filters />
        <ProductsTable />
      </div>
    </>
  );
}

export default ProductsCollectionPage;
