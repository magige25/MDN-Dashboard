import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmailLayer = () => {
  const [emails, setEmails] = useState([
    { id: 1, sender: "Jerome Bell", subject: "Aliquam pulvinar vestibulum blandit...", time: "6:07 AM", selected: false, starred: false },
    { id: 2, sender: "Kristin Watson", subject: "Aliquam pulvinar vestibulum blandit...", time: "6:07 AM", selected: false, starred: false },
    { id: 3, sender: "Cody Fisher", subject: "Aliquam pulvinar vestibulum blandit...", time: "6:07 AM", selected: false, starred: false },
    { id: 4, sender: "Dianne Russell", subject: "Aliquam pulvinar vestibulum blandit...", time: "6:07 AM", selected: false, starred: false },
    { id: 5, sender: "Floyd Miles", subject: "Aliquam pulvinar vestibulum blandit...", time: "6:07 AM", selected: false, starred: false },
    { id: 6, sender: "Devon Lane", subject: "Aliquam pulvinar vestibulum blandit...", time: "6:07 AM", selected: false, starred: false },
    { id: 7, sender: "Dianne Russell", subject: "Aliquam pulvinar vestibulum blandit...", time: "6:07 AM", selected: false, starred: false },
    { id: 8, sender: "Annette Black", subject: "Aliquam pulvinar vestibulum blandit...", time: "6:07 AM", selected: false, starred: false },
    { id: 9, sender: "Bessie Cooper", subject: "Aliquam pulvinar vestibulum blandit...", time: "6:07 AM", selected: false, starred: false },
    { id: 10, sender: "Courtney Henry", subject: "Aliquam pulvinar vestibulum blandit...", time: "6:07 AM", selected: false, starred: false },
    { id: 11, sender: "Wade Warren", subject: "Aliquam pulvinar vestibulum blandit...", time: "6:07 AM", selected: false, starred: false },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setEmails(emails.map(email => ({ ...email, selected: newSelectAll })));
  };

  const handleIndividualSelect = (id) => {
    const updatedEmails = emails.map(email => 
      email.id === id ? { ...email, selected: !email.selected } : email
    );
    setEmails(updatedEmails);
    
    // Check if all items are selected after individual selection
    const allSelected = updatedEmails.every(email => email.selected);
    setSelectAll(allSelected);
  };

  const handleStarToggle = (id) => {
    setEmails(emails.map(email =>
      email.id === id ? { ...email, starred: !email.starred } : email
    ));
  };

  return (
    <div className="row gy-4">
      <div className="col-xxl-3">
        <div className="card h-100 p-0">
          <div className="card-body p-24">
            <button
              type="button"
              className="btn btn-primary text-sm btn-sm px-12 py-12 w-100 radius-8 d-flex align-items-center gap-2 mb-16"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <Icon
                icon="fa6-regular:square-plus"
                className="icon text-lg line-height-1"
              />
              Compose
            </button>
            <div className="mt-16">
              <ul>
                <li className="item-active mb-4">
                  <Link
                    to="/email"
                    className="bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light"
                  >
                    <span className="d-flex align-items-center gap-10 justify-content-between w-100">
                      <span className="d-flex align-items-center gap-10">
                        <span className="icon text-xxl line-height-1 d-flex">
                          <Icon
                            icon="uil:envelope"
                            className="icon line-height-1"
                          />
                        </span>
                        <span className="fw-semibold">Inbox</span>
                      </span>
                      <span className="fw-medium">800</span>
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/starred"
                    className="bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light"
                  >
                    <span className="d-flex align-items-center gap-10 justify-content-between w-100">
                      <span className="d-flex align-items-center gap-10">
                        <span className="icon text-xxl line-height-1 d-flex">
                          <Icon
                            icon="ph:star-bold"
                            className="icon line-height-1"
                          />
                        </span>
                        <span className="fw-semibold">Starred</span>
                      </span>
                      <span className="fw-medium">250</span>
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/email"
                    className="bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light"
                  >
                    <span className="d-flex align-items-center gap-10 justify-content-between w-100">
                      <span className="d-flex align-items-center gap-10">
                        <span className="icon text-xxl line-height-1 d-flex">
                          <Icon
                            icon="ion:paper-plane-outline"
                            className="icon line-height-1"
                          />
                        </span>
                        <span className="fw-semibold">Sent</span>
                      </span>
                      <span className="fw-medium">80</span>
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/email"
                    className="bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light"
                  >
                    <span className="d-flex align-items-center gap-10 justify-content-between w-100">
                      <span className="d-flex align-items-center gap-10">
                        <span className="icon text-xxl line-height-1 d-flex">
                          <Icon
                            icon="lucide:pencil"
                            className="icon line-height-1"
                          />
                        </span>
                        <span className="fw-semibold">Draft</span>
                      </span>
                      <span className="fw-medium">50</span>
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/email"
                    className="bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light"
                  >
                    <span className="d-flex align-items-center gap-10 justify-content-between w-100">
                      <span className="d-flex align-items-center gap-10">
                        <span className="icon text-xxl line-height-1 d-flex">
                          <Icon
                            icon="ph:warning-bold"
                            className="icon line-height-1"
                          />
                        </span>
                        <span className="fw-semibold">Spam</span>
                      </span>
                      <span className="fw-medium">30</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/email"
                    className="bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light"
                  >
                    <span className="d-flex align-items-center gap-10 justify-content-between w-100">
                      <span className="d-flex align-items-center gap-10">
                        <span className="icon text-xxl line-height-1 d-flex">
                          <Icon
                            icon="material-symbols:delete-outline"
                            className="icon line-height-1"
                          />
                        </span>
                        <span className="fw-semibold">Bin</span>
                      </span>
                      <span className="fw-medium">20</span>
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="mt-24">
                <h6 className="text-lg fw-semibold text-primary-light mb-16">
                  TAGS
                </h6>
                <ul>
                  <li className="mb-20">
                    <span className="line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-10">
                      <span className="w-8-px h-8-px bg-primary-600 rounded-circle" />
                      Personal
                    </span>
                  </li>
                  <li className="mb-20">
                    <span className="line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-10">
                      <span className="w-8-px h-8-px bg-lilac-600 rounded-circle" />
                      Social
                    </span>
                  </li>
                  <li className="mb-20">
                    <span className="line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-10">
                      <span className="w-8-px h-8-px bg-success-600 rounded-circle" />
                      Promotions
                    </span>
                  </li>
                  <li className="mb-20">
                    <span className="line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-10">
                      <span className="w-8-px h-8-px bg-warning-600 rounded-circle" />
                      Business
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-9">
        <div className="card h-100 p-0 email-card">
          <div className="card-header border-bottom bg-neutral-200 py-16 px-24">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-4">
              <div className="d-flex align-items-center gap-3">
                <div className="form-check style-check d-flex align-items-center">
                  <input
                    className="form-check-input bg-base radius-4 border input-form-dark"
                    type="checkbox"
                    name="checkbox"
                    id="selectAll"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                  <div className="dropdown line-height-1">
                    <button
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="line-height-1 d-flex"
                    >
                      <Icon
                        icon="typcn:arrow-sorted-down"
                        className="icon line-height-1"
                      />
                    </button>
                    <ul className="dropdown-menu p-12 border bg-base shadow">
                      <li>
                        <button
                          type="button"
                          className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalView"
                        >
                          All
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalEdit"
                        >
                          None
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalEdit"
                        >
                          Read
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalEdit"
                        >
                          Unread
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalEdit"
                        >
                          Starred
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalEdit"
                        >
                          Unstarred
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  type="button"
                  className="delete-button d-none text-secondary-light text-xl d-flex"
                >
                  <Icon
                    icon="material-symbols:delete-outline"
                    className="icon line-height-1"
                  />
                </button>
                <button
                  type="button"
                  className="reload-button text-secondary-light text-xl d-flex"
                >
                  <Icon icon="tabler:reload" className="icon" />
                </button>
                <div className="dropdown">
                  <button
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className=" d-flex"
                  >
                    <Icon
                      icon="entypo:dots-three-vertical"
                      className="icon text-secondary-light"
                    />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-lg p-12 border bg-base shadow">
                    <li>
                      <button
                        type="button"
                        className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalView"
                      >
                        <Icon
                          icon="gravity-ui:envelope-open"
                          className="icon text-lg line-height-1"
                        />
                        Mark all as read
                      </button>
                    </li>
                    <li>
                      <p className="ms-40 mt-8 text-secondary-light mb-0">
                        Select messages to see more actions
                      </p>
                    </li>
                  </ul>
                </div>
                <form className="navbar-search d-lg-block d-none">
                  <input
                    type="text"
                    className="bg-base h-40-px w-auto"
                    name="search"
                    placeholder="Search"
                  />
                  <Icon icon="ion:search-outline" className="icon" />
                </form>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className="text-neutral-600 line-height-1">
                  1-12 of 1,253
                </span>
                <nav aria-label="Page navigation ">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link
                        className="page-link btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                        to="#"
                      >
                        <Icon
                          icon="iconamoon:arrow-left-2"
                          className="icon"
                        />{" "}
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                        to="#"
                      >
                        <Icon
                          icon="iconamoon:arrow-right-2"
                          className="icon"
                        />{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <ul className="overflow-x-auto">
              {emails.map((email, index) => (
                <li
                  key={email.id}
                  className="email-item px-24 py-16 d-flex gap-4 align-items-center border-bottom cursor-pointer min-w-max-content"
                >
                  <div className="form-check style-check d-flex align-items-center">
                    <input
                      className="form-check-input radius-4 border border-neutral-400"
                      type="checkbox"
                      name="checkbox"
                      checked={email.selected}
                      onChange={() => handleIndividualSelect(email.id)}
                    />
                  </div>
                  <span className="text-primary-light fw-medium min-w-20-px">
                    {index + 1}
                  </span>
                  <button
                    type="button"
                    className="starred-button icon text-xl line-height-1 d-flex"
                    onClick={() => handleStarToggle(email.id)}
                  >
                    <Icon
                      icon="ph:star"
                      className={`icon-outline line-height-1 text-secondary-light ${email.starred ? 'd-none' : 'd-flex'}`}
                    />
                    <Icon
                      icon="ph:star-fill"
                      className={`icon-fill line-height-1 text-primary-600 ${email.starred ? 'd-flex' : 'd-none'}`}
                    />
                  </button>
                  <Link
                    to="/view-details"
                    className="text-primary-light fw-medium text-md text-line-1 w-190-px"
                  >
                    {email.sender}
                  </Link>
                  <Link
                    to="/view-details"
                    className="text-primary-light fw-medium mb-0 text-line-1 max-w-740-px"
                  >
                    {email.subject}
                  </Link>
                  <span className="text-primary-light fw-medium min-w-max-content ms-auto">
                    {email.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailLayer;