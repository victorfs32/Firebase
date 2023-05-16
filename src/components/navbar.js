import React, { useEffect, useState } from "react";
import firebase from "firebase/app"; // Importe o objeto firebase aqui
import "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "./navbar.css";

function SidebarMenu() {
  const [userDisplayName, setUserDisplayName] = useState(null);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      setUserDisplayName(currentUser.displayName);
    }
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
          <div className="mt-2">
            <a
              className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline"
              role="button"
            >
              <span className="fs-4">Firebase Auth</span>
            </a>
            <hr className="text-white d-none d-sm-block" />
            <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
              <li className="nav-item my-1 py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link text-white text-center text-sm-start"
                  aria-current="page"
                >
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-2 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li className="nav-item my-1 py-2 py-sm-0">
                <a
                  href="#submenu"
                  className="nav-link text-white text-center text-sm-start"
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <i className="bi bi-grid"></i>
                  <span className="ms-2 d-none d-sm-inline">Gereciador</span>
                  <i className="bi bi-arrow-down-short ms-0 ms-sm-3"></i>
                </a>
                <ul
                  className="nav collapse ms-1 flex-column"
                  id="submenu"
                  data-bs-parent="#parentM"
                >
                  <li className="nav-item py-2 py-sm-0">
                    <a
                      className="nav-link text-white text-center text-sm-start"
                      href="#"
                      aria-current="page"
                    >
                      <span className="d-none d-sm-inline">Admin</span>
                    </a>
                  </li>
                  <li className="nav-item text-white text-center text-sm-start">
                    <a className="nav-link" href="#">
                      <span className="d-none d-sm-inline">Usuarios</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i className="bi bi-house"></i>
                  <span className="ms-2 d-none d-sm-inline">House</span>
                </a>
              </li>
              <li className="nav-item my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Customers</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown open">
            <a
              className="btn borne-none dropdown-toggle text-white"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-person f5-4"></i>
              <span className="fs-6 ms-1 d-none d-sm-inline">{userDisplayName}</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <a className="dropdown-item" href="#">
                Perfil
              </a>
              <a className="dropdown-item" href="#">
                Configurações
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
