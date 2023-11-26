import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import { exits } from "../../features/applicationSlice";
import classNames from "classnames";
import { sidebarClose } from "../../features/justReducer";

const Sidebar = () => {
  const user = useSelector((state) => state.application.user);
  const token = useSelector((state) => state.application.token);
  const dispatch = useDispatch();
  const handleExit = () => {
    dispatch(exits());
  };
  const handleSidebarClose = () => {
    dispatch(sidebarClose());
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className={classNames(
              styles.sidebarBlock,
              "bg-dark col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-column"
            )}
          >
            <div>
              <a className="text-decoration-none text-white d-flex align-itemcenter my-3">
                <div className={classNames(styles.nameBlock, "d-flex")}>
                  <div>Hello, World!</div>{" "}
                  <i
                    className={classNames(
                      styles.sidebarClose,
                      "bi bi-x-circle"
                    )}
                    onClick={handleSidebarClose}
                  ></i>
                </div>
              </a>
              <hr className="text-secondary" />
              {user?.avatar ? (
                <div className={styles.user}>
                  <img
                    className={styles.avatar}
                    src={`http://localhost:3077/${user?.avatar}`}
                    alt=""
                  />
                  <h3 className={styles.userName}>{user.login}</h3>
                </div>
              ) : (
                <div className={styles.user}>
                  <h3 className={styles.userName}></h3>
                </div>
              )}
              <div>
                {token ? (
                  user.admin ? (
                    <ul className="nav nav-pills flex-column">
                      <li className="nav-item text-white fs-4 my-1">
                        <a
                          href="/waitbooking"
                          className="nav-link text-white fs-5 d-flex"
                          aria-current="page"
                        >
                          <i className="bi bi-calendar"></i>
                          <div className="ms-2">Ожидание брони</div>
                        </a>
                      </li>
                      <li className="nav-item text-white fs-4 my-1">
                        <a
                          href="#"
                          className="nav-link text-white fs-5 d-flex"
                          aria-current="page"
                        >
                          <i className="bi bi-check-all"></i>
                          <div className="ms-2">Актуальная бронь</div>
                        </a>
                      </li>
                      <li className="nav-item text-white fs-4 my-1">
                        <a
                          href="#"
                          className="nav-link text-white fs-5 d-flex"
                          aria-current="page"
                        >
                          <i className="bi bi-telephone-inbound"></i>
                          <div className="ms-2">Подбор тура</div>
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <ul className="nav nav-pills flex-column">
                      <li className="nav-item text-white fs-4 my-1">
                        <a
                          href="/mytours"
                          className="nav-link text-white fs-5"
                          aria-current="page"
                        >
                          <i className="bi bi-calendar"></i>
                          <span className="ms-2">Мои туры</span>
                        </a>
                      </li>
                      <li className="nav-item text-white fs-4 my-1">
                        <a
                          href="#"
                          className="nav-link text-white fs-5"
                          aria-current="page"
                        >
                          <i className="bi bi-telephone-outbound"></i>
                          <span className="ms-2">Подбор тура</span>
                        </a>
                      </li>
                    </ul>
                  )
                ) : null}
              </div>
              <div className="dropdown open">
                <a
                  className="btn btn-secondary text-white dropdown-toggle "
                  type="button"
                  id="triggerId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bi bi-user-circle"></i>
                  {token ? (
                    <a className={styles.exit} onClick={handleExit}>
                      Выйти
                    </a>
                  ) : (
                    <a href="/login" className={styles.enterLink}>
                      <a className={styles.enter}>Войти</a>
                    </a>
                  )}
                </a>
                <div className="dropdown-menu" aria-labelledby="triggerId">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item disabled" href="#">
                    Disabled action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
