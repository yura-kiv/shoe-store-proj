import React from "react";
import styles from "./styles/UserPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectCurrentUser } from "../toolkitRedux/userAuthSlice";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  console.log(user);
  return (
    <div className={styles.userPageWrapper}>
      <span>{user.name}</span>
      <span>{user.email}</span>
      <span>{user.gender}</span>
      <button
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
        className={styles.logOutBtn}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserPage;
