import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UsersGridLayer = () => {
  const [users] = useState([
    {
      key: '1',
      name: 'Kathryn Murphy',
      email: 'osgoodwy@gmail.com',
      role: 'Manager',
      image: 'assets/images/user-grid/user-grid-img1.png',
      background: 'assets/images/user-grid/user-grid-bg1.png',
    },
    {
      key: '2',
      name: 'Annette Black',
      email: 'redaniel@gmail.com',
      role: 'Admin',
      image: 'assets/images/user-grid/user-grid-img2.png',
      background: 'assets/images/user-grid/user-grid-bg2.png',
    },
    {
      key: '3',
      name: 'Ronald Richards',
      email: 'seannand@mail.ru',
      role: 'Manager',
      image: 'assets/images/user-grid/user-grid-img3.png',
      background: 'assets/images/user-grid/user-grid-bg3.png',
    },
    {
      key: '4',
      name: 'Eleanor Pena',
      email: 'miyokoto@mail.ru',
      role: 'Editor',
      image: 'assets/images/user-grid/user-grid-img4.png',
      background: 'assets/images/user-grid/user-grid-bg4.png',
    },
    {
      key: '5',
      name: 'Leslie Alexander',
      email: 'icadahli@gmail.com',
      role: 'Editor',
      image: 'assets/images/user-grid/user-grid-img5.png',
      background: 'assets/images/user-grid/user-grid-bg5.png',
    },
    {
      key: '6',
      name: 'Albert Flores',
      email: 'warn@mail.ru',
      role: 'Admin',
      image: 'assets/images/user-grid/user-grid-img6.png',
      background: 'assets/images/user-grid/user-grid-bg6.png',
    },
    {
      key: '7',
      name: 'Jacob Jones',
      email: 'zitka@mail.ru',
      role: 'Frontend Developer',
      image: 'assets/images/user-grid/user-grid-img7.png',
      background: 'assets/images/user-grid/user-grid-bg7.png',
    },
    {
      key: '8',
      name: 'Jerome Bell',
      email: 'igerrin@gmail.com',
      role: 'Frontend Developer',
      image: 'assets/images/user-grid/user-grid-img8.png',
      background: 'assets/images/user-grid/user-grid-bg8.png',
    },
    {
      key: '9',
      name: 'Marvin McKinney',
      email: 'maka@yandex.ru',
      role: 'Frontend Developer',
      image: 'assets/images/user-grid/user-grid-img9.png',
      background: 'assets/images/user-grid/user-grid-bg9.png',
    },
    {
      key: '10',
      name: 'Cameron Williamson',
      email: 'danten@mail.ru',
      role: 'Credit Manager',
      image: 'assets/images/user-grid/user-grid-img10.png',
      background: 'assets/images/user-grid/user-grid-bg10.png',
    },
    {
      key: '11',
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      role: 'Backend Developer',
      image: 'assets/images/user-grid/user-grid-img11.png',
      background: 'assets/images/user-grid/user-grid-bg11.png',
    },
    {
      key: '12',
      name: 'John Smith',
      email: 'johnsmith@example.com',
      role: 'Product Manager',
      image: 'assets/images/user-grid/user-grid-img12.png',
      background: 'assets/images/user-grid/user-grid-bg12.png',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  return (
    <div className="card h-100 p-0 radius-12">
      <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
        <div className="d-flex align-items-center flex-wrap gap-3">
          <span className="text-md fw-medium text-secondary-light mb-0">Show</span>
          <select
            className="form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <form className="navbar-search">
            <input
              type="text"
              className="bg-base h-40-px w-auto"
              name="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Icon icon="ion:search-outline" className="icon" />
          </form>
        </div>
        <Link
          to="/users/add-user"
          className="btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
        >
          <Icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
          Add New User
        </Link>
      </div>
      <div className="card-body p-24">
        <div className="row gy-4">
          {currentUsers.map((user) => (
            <div key={user.key} className="col-xxl-3 col-md-6 user-grid-card">
              <div className="position-relative border radius-16 overflow-hidden">
                <img
                  src={user.background}
                  alt=""
                  className="w-100 object-fit-cover"
                />
                <div className="dropdown position-absolute top-0 end-0 me-16 mt-16">
                  <button
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white"
                  >
                    <Icon icon="entypo:dots-three-vertical" className="icon" />
                  </button>
                  <ul className="dropdown-menu p-12 border bg-base shadow">
                    <li>
                      <Link
                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                        href="#"
                      >
                        Edit
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="ps-16 pb-16 pe-16 text-center mt--50">
                  <img
                    src={user.image}
                    alt=""
                    className="border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover"
                  />
                  <h6 className="text-lg mb-0 mt-4">{user.name}</h6>
                  <span className="text-secondary-light mb-16">{user.email}</span>
                  <div className="center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4">
                    <div className="text-center w-50">
                      <h6 className="text-md mb-0">Design</h6>
                      <span className="text-secondary-light text-sm mb-0">
                        Department
                      </span>
                    </div>
                    <div className="text-center w-50">
                      <h6 className="text-md mb-0">{user.role}</h6>
                      <span className="text-secondary-light text-sm mb-0">
                        Designation
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/view-profile"
                    className="bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100"
                  >
                    View Profile
                    <Icon
                      icon="solar:alt-arrow-right-linear"
                      className="icon text-xl line-height-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!isLoading && (
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="text-muted" style={{ fontSize: "13px" }}>
              <span>
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
              </span>
            </div>
            <nav aria-label="Page navigation">
              <ul className="pagination mb-0" style={{ gap: "6px" }}>
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "24px", height: "24px", padding: "0", transition: "all 0.2s" }}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <Icon icon="ri-arrow-drop-left-line" style={{ fontSize: "12px" }} />
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                    <button
                      className={`page-link btn ${
                        currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"
                      } rounded-circle d-flex align-items-center justify-content-center`}
                      style={{
                        width: "30px",
                        height: "30px",
                        padding: "0",
                        transition: "all 0.2s",
                        fontSize: "10px",
                        color: currentPage === i + 1 ? "#fff" : "",
                      }}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                  <button
                    className="page-link btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "24px", height: "24px", padding: "0", transition: "all 0.2s" }}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <Icon icon="ri-arrow-drop-right-line" style={{ fontSize: "12px" }} />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersGridLayer;