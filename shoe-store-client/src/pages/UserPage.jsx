import React from "react";
import styles from "./styles/UserPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectCurrentUser } from "../toolkitRedux/userAuthSlice";
import { useNavigate } from "react-router-dom";
import { ReactComponent as UserIcon } from "../assets/userIcon.svg";

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  return (
    <div className={styles.userPageWrapper}>
      <b className="text-xl mt-10">User information:</b>
      <div className="p-5 bg-backgroundSecond rounded-full mt-5">
        <UserIcon className="fill-textColorFirst w-20 h-20" />
      </div>
      <span>
        Name: <b>{user.name}</b>
      </span>
      <span>
        Email: <b>{user.email}</b>
      </span>
      <span>
        Gender: <b>{user.gender}</b>
      </span>
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
