import React, { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggleButton from "./helper/ThemeToggleButton.jsx";

const MasterLayout = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();

  const sidebarControl = () => setSidebarActive((prev) => !prev);
  const mobileMenuControl = () => setMobileMenu((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenu &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".sidebar-mobile-toggle")
      ) {
        setMobileMenu(false);
      }
    };

    if (mobileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);

  useEffect(() => {
    const handleDropdownClick = (event) => {
      event.preventDefault();
      const dropdown = event.currentTarget.closest(".dropdown");
      if (!dropdown) return;

      const isOpen = dropdown.classList.contains("open");
      const allDropdowns = document.querySelectorAll(".sidebar-menu .dropdown");

      allDropdowns.forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove("open");
          const submenu = d.querySelector(".sidebar-submenu");
          if (submenu) submenu.style.maxHeight = "0px";
        }
      });

      dropdown.classList.toggle("open", !isOpen);
      const submenu = dropdown.querySelector(".sidebar-submenu");
      if (submenu) {
        submenu.style.maxHeight = isOpen ? "0px" : `${submenu.scrollHeight}px`;
      }
    };

    const openActiveDropdown = () => {
      const allDropdowns = document.querySelectorAll(".sidebar-menu .dropdown");
      allDropdowns.forEach((dropdown) => {
        const submenuLinks = dropdown.querySelectorAll(".sidebar-submenu a");
        let isActive = false;
        submenuLinks.forEach((link) => {
          if (link.getAttribute("to") === location.pathname) {
            isActive = true;
          }
        });
        if (isActive) {
          dropdown.classList.add("open");
          const submenu = dropdown.querySelector(".sidebar-submenu");
          if (submenu) submenu.style.maxHeight = `${submenu.scrollHeight}px`;
        } else {
          dropdown.classList.remove("open");
          const submenu = dropdown.querySelector(".sidebar-submenu");
          if (submenu) submenu.style.maxHeight = "0px";
        }
      });
    };

    const dropdownTriggers = document.querySelectorAll(".sidebar-menu .dropdown > a");
    dropdownTriggers.forEach((trigger) => {
      trigger.removeEventListener("click", handleDropdownClick); // Clean up previous listeners
      trigger.addEventListener("click", handleDropdownClick);
    });

    openActiveDropdown();

    return () => {
      dropdownTriggers.forEach((trigger) => {
        trigger.removeEventListener("click", handleDropdownClick);
      });
    };
  }, [location.pathname]);

  useEffect(() => {
    if (sidebarRef.current) {
      const activeElement = sidebarRef.current.querySelector(".active-page");
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location.pathname]);

  return (
    <div className="app-wrapper">
      <section className={mobileMenu ? "overlay active" : "overlay"}>
        <aside
          ref={sidebarRef}
          className={
            sidebarActive
              ? "sidebar active"
              : mobileMenu
              ? "sidebar sidebar-open"
              : "sidebar"
          }
        >
          <button
            onClick={mobileMenuControl}
            type="button"
            className="sidebar-close-btn"
          >
            <Icon icon="radix-icons:cross-2" />
          </button>
          <div>
            <Link to="/" className="sidebar-logo">
              <img src="/assets/images/logo.png" alt="site logo" className="light-logo" />
              <img src="/assets/images/logo-light.png" alt="site logo" className="dark-logo" />
              <img src="/assets/images/logo-icon.png" alt="site logo" className="logo-icon" />
            </Link>
          </div>
          <div className="sidebar-menu-area">
            <ul className="sidebar-menu" id="sidebar-menu">
            <li>
                <NavLink
                  to="/dashboard"
                  className={(navData) =>
                    navData.isActive ? "active-page" : ""
                  }
                >
                  <Icon icon="ri:home-4-line" className="menu-icon" />
                  <span>Dashboard</span>
                </NavLink>
              </li>

              <li className="sidebar-menu-group-title">Application</li>
              <li>
                <NavLink
                  to="/email"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <Icon icon="mage:email" className="menu-icon" />
                  <span>Email</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/chat"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <Icon icon="bi:chat-dots" className="menu-icon" />
                  <span>Chat</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calendar-main"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <Icon icon="solar:calendar-outline" className="menu-icon" />
                  <span>Calendar</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kanban"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <Icon icon="material-symbols:map-outline" className="menu-icon" />
                  <span>Kanban</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <Icon icon="hugeicons:invoice-03" className="menu-icon" />
                  <span>Invoice</span>
                </Link>
                <ul className="sidebar-submenu">
                  <li>
                    <NavLink
                      to="/invoice"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Invoices
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/invoice/invoice-preview"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Preview
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/invoice/add-invoice"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Add Invoice
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/invoice-edit"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Edit
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-group-title">UI Elements</li>
              <li className="dropdown">
                <Link to="#">
                  <Icon icon="solar:document-text-outline" className="menu-icon" />
                  <span>Components</span>
                </Link>
                <ul className="sidebar-submenu">
                  <li>
                    <NavLink
                      to="/colors"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Colors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/button"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Button
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dropdown"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Dropdown
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/alert"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Alerts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/avatar"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Avatars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/progress"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Progress bar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tabs"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Tab & Accordion
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pagination"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Pagination
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/badges"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Badges
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tooltip"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Tooltip & Popover
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/star-rating"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Star Ratings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tags"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Tags
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/list"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/calendar"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Calendar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/switch"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Switch
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/image-upload"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Upload
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="#">
                  <Icon icon="heroicons:document" className="menu-icon" />
                  <span>Forms</span>
                </Link>
                <ul className="sidebar-submenu">
                  <li>
                    <NavLink
                      to="/form"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Input Forms
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/form-layout"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Input Layout
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/form-validation"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Form Validation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/wizard"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Form Wizard
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="#">
                  <Icon icon="mingcute:storage-line" className="menu-icon" />
                  <span>Table</span>
                </Link>
                <ul className="sidebar-submenu">
                  <li>
                    <NavLink
                      to="/table-basic"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Basic Table
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/table-data"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Data Table
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="#">
                  <Icon icon="solar:pie-chart-outline" className="menu-icon" />
                  <span>Chart</span>
                </Link>
                <ul className="sidebar-submenu">
                  <li>
                    <NavLink
                      to="/line-chart"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Line Chart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/column-chart"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pie-chart"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Pie Chart
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/widgets"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <Icon icon="fe:vector" className="menu-icon" />
                  <span>Widgets</span>
                </NavLink>
              </li>

              <li className="dropdown">
                <Link to="#">
                  <Icon icon="flowbite:users-group-outline" className="menu-icon" />
                  <span>User Management</span>
                </Link>
                <ul className="sidebar-submenu">
                  <li>
                    <NavLink
                      to="/users"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/view-profile"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      View Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/users-grid"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Users Grid
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/roles"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Roles & Permissions
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="#">
                  <Icon icon="ri:user-settings-line" className="menu-icon" />
                  <span>Role & Access</span>
                </Link>
                <ul className="sidebar-submenu">
                  <li>
                    <NavLink
                      to="/role-access"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Role & Access
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assign-role"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Assign Role
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="#">
                  <Icon icon="simple-line-icons:vector" className="menu-icon" />
                  <span>Authentication</span>
                </Link>
                <ul className="sidebar-submenu">
                  <li>
                    <NavLink
                      to="/sign-in"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/otp"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      OTP
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/sign-up"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Sign Up
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/forgot-password"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Forgot Password
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/reset-password"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Reset Password
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="#">
                  <Icon icon="flowbite:users-group-outline" className="menu-icon" />
                  <span>Gallery</span>
                </Link>
                <ul className="sidebar-submenu">
                  <li>
                    <NavLink
                      to="/gallery-grid"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Gallery Grid
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/gallery"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Gallery Grid Desc
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/gallery-masonry"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Gallery Grid
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/gallery-hover"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Gallery Hover Effect
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/pricing"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <Icon icon="hugeicons:money-send-square" className="menu-icon" />
                  <span>Pricing</span>
                </NavLink>
              </li>

              <li className="dropdown">
                <Link to="#">
                  <Icon icon="flowbite:users-group-outline" className="menu-icon" />
                  <span>Blog</span>
                </Link>
                <ul className="sidebar-submenu">
                  <li>
                    <NavLink
                      to="/blog"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog-details"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Blog Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/add-blog"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Add Blog
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/testimonials"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <Icon icon="mage:message-question-mark-round" className="menu-icon" />
                  <span>Testimonials</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <Icon icon="mage:message-question-mark-round" className="menu-icon" />
                  <span>FAQs</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/error"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <Icon icon="streamline:straight-face" className="menu-icon" />
                  <span>404</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms-condition"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <Icon icon="octicon:info-24" className="menu-icon" />
                  <span>Terms & Conditions</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/coming-soon"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <i className="ri-rocket-line menu-icon" />
                  <span>Coming Soon</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/access-denied"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <i className="ri-folder-lock-line menu-icon" />
                  <span>Access Denied</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/maintenance"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <i className="ri-hammer-line menu-icon" />
                  <span>Maintenance</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blank-page"
                  className={(navData) => (navData.isActive ? "active-page" : "")}
                >
                  <i className="ri-checkbox-multiple-blank-line menu-icon" />
                  <span>Blank Page</span>
                </NavLink>
              </li>

              <li className="dropdown">
                <Link to="#">
                  <Icon icon="icon-park-outline:setting-two" className="menu-icon" />
                  <span>Settings</span>
                </Link>
                <ul className="sidebar-submenu">
                  <li>
                    <NavLink
                      to="/company"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Company
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/notification-alert"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Notification Alert
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/theme"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Theme
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/currencies"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Currencies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/language"
                      className={(navData) => (navData.isActive ? "active-page" : "")}
                    >
                      Languages
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>

        <main
          className={sidebarActive ? "dashboard-main active" : "dashboard-main"}
        >
          <div className="navbar-header">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex flex-wrap align-items-center gap-4">
                  <button
                    type="button"
                    className="sidebar-toggle"
                    onClick={sidebarControl}
                  >
                    <Icon
                      icon="heroicons:bars-3-solid"
                      className="icon text-2xl non-active"
                    />
                  </button>
                  <button
                    onClick={mobileMenuControl}
                    type="button"
                    className="sidebar-mobile-toggle"
                  >
                    <Icon icon="heroicons:bars-3-solid" className="icon" />
                  </button>
                  <form className="navbar-search">
                    <input type="text" name="search" placeholder="Search" />
                    <Icon icon="ion:search-outline" className="icon" />
                  </form>
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex flex-wrap align-items-center gap-2">
                  <ThemeToggleButton />
                  <div className="dropdown d-none d-sm-inline-block">
                    <button
                      className="positioning position-relative border-0 bg-transparent p-0 d-flex justify-content-center align-items-center gap-1"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      <img
                        src="/assets/images/lang-flag.png"
                        alt="Language"
                        className="w-24 h-24 object-fit-cover rounded-circle"
                      />
                    </button>
                    <div className="dropdown-menu to-top dropdown-menu-sm">
                      <div className="py-12 px-16 radius-4 bg-primary-50 mb-16">
                        <h6 className="text-lg text-primary-light fw-semibold mb-0">
                          Choose Your Language
                        </h6>
                      </div>
                      <div className="max-h-400-px overflow-y-auto scroll-sm pe-8">
                        {[
                          { id: "english", flag: "/assets/images/flags/flag1.png", name: "English" },
                          { id: "japan", flag: "/assets/images/flags/flag2.png", name: "Japan" },
                          { id: "france", flag: "/assets/images/flags/flag3.png", name: "France" },
                          { id: "germany", flag: "/assets/images/flags/flag4.png", name: "Germany" },
                          { id: "korea", flag: "/assets/images/flags/flag5.png", name: "South Korea" },
                          { id: "bangladesh", flag: "/assets/images/flags/flag6.png", name: "Bangladesh" },
                          { id: "india", flag: "/assets/images/flags/flag7.png", name: "India" },
                          { id: "canada", flag: "/assets/images/flags/flag8.png", name: "Canada" },
                        ].map((lang) => (
                          <div
                            key={lang.id}
                            className="form-check style-check d-flex align-items-center justify-content-between mb-16"
                          >
                            <label className="form-check-label" htmlFor={lang.id}>
                              <span className="text-black d-flex align-items-center gap-3">
                                <img
                                  src={lang.flag}
                                  alt={lang.name}
                                  className="w-36-px h-36-px rounded-circle"
                                />
                                <span className="text-md fw-semibold">{lang.name}</span>
                              </span>
                            </label>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="language"
                              id={lang.id}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link to="/chat">
                      <button
                        className="positioning position-relative border-0 bg-transparent p-0 d-flex justify-content-center align-items-center gap-1"
                        type="button"
                      >
                        <Icon
                          icon="tabler:message-circle"
                          className="text-primary-light text-xl"
                        />
                      </button>
                    </Link>
                  </div>
                  <div className>
                    <Link to="/email">
                      <button
                        className="positioning position-relative border-0 bg-transparent p-0 d-flex justify-content-center align-items-center gap-1"
                        type="button"
                      >
                        <Icon
                          icon="mage:email"
                          className="text-primary-light text-xl"
                        />
                      </button>
                    </Link>
                  </div>
                  <div className="dropdown">
                    <button
                      className="positioning position-relative border-0 bg-transparent p-0 d-flex justify-content-center align-items-center gap-1"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      <Icon
                        icon="iconoir:bell"
                        className="text-primary-light text-xl"
                      />
                    </button>
                    <div className="dropdown-menu to-top dropdown-menu-md p-2">
                      <div className="m-16 py-12 px-16 radius-4 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                        <h6 className="text-lg text-primary-light fw-semibold mb-0">
                          Notifications
                        </h6>
                        <span className="text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center">
                          05
                        </span>
                      </div>
                      <div className="max-h-400-px overflow-y-auto scroll-sm pe-4">
                        {[
                          {
                            title: "Congratulations",
                            icon: "bitcoin-icons:verify-outline",
                            color: "success",
                            text: "Your profile has been Verified. Your profile has been Verified",
                            time: "23 Mins ago",
                          },
                          {
                            title: "Ronald Richards",
                            img: "/assets/images/notification/profile-1.png",
                            color: "success",
                            text: "You can stitch between artboards",
                            time: "23 Mins ago",
                            bg: "bg-neutral-50",
                          },
                          {
                            title: "Arlene McCoy",
                            initial: "AM",
                            color: "info",
                            text: "Invite you to prototyping",
                            time: "23 Mins ago",
                          },
                          {
                            title: "Annette Black",
                            img: "/assets/images/notification/profile-2.png",
                            color: "success",
                            text: "Invite you to prototyping",
                            time: "23 Mins ago",
                            bg: "bg-neutral-50",
                          },
                          {
                            title: "Darlene Robertson",
                            initial: "DR",
                            color: "info",
                            text: "Invite you to prototyping",
                            time: "23 Mins ago",
                          },
                        ].map((notif, index) => (
                          <Link
                            key={index}
                            to="#"
                            className={`px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between ${notif.bg || ""}`}
                          >
                            <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                              <span
                                className={`w-44-px h-44-px bg-${notif.color}-subtle text-${notif.color}-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0`}
                              >
                                {notif.icon ? (
                                  <Icon icon={notif.icon} className="icon text-xxl" />
                                ) : notif.img ? (
                                  <img src={notif.img} alt={notif.title} />
                                ) : (
                                  notif.initial
                                )}
                              </span>
                              <div>
                                <h6 className="text-md fw-semibold mb-4">{notif.title}</h6>
                                <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                                  {notif.text}
                                </p>
                              </div>
                            </div>
                            <span className="text-sm text-secondary-light flex-shrink-0">{notif.time}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="text-center py-12 px-16">
                        <Link to="#" className="text-primary-600 fw-semibold text-md">
                          See All Notification
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      className="user-image d-flex justify-content-center align-items-center rounded-circle positioning position-relative gap-2"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      <img
                        src="/assets/images/user.png"
                        alt="image_user"
                        className="object-fit-cover rounded-circle"
                      />
                      <span className="position-absolute bottom-0 end-0 background-success-main w-8-px h-8-px rounded-circle"></span>
                    </button>
                    <div className="dropdown-menu to-top dropdown-menu-sm">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="/assets/images/user.png"
                          alt="image_user"
                          className="profile-image object-fit-cover"
                        />
                        <div className="headers bg-primary-50">
                          <h6 className="text-lg text-primary-light fw-semibold mb-2">
                            MDN Dashboard
                          </h6>
                          <span className="text-secondary-light fw-sm text-sm mb-4">
                            mdnsystems@gmail.com
                          </span>
                          <span className="text-secondary-light fw-sm text-sm mb-4">
                            Admin
                          </span>
                        </div>
                      </div>
                      <ul className="to-top-list">
                        <li>
                          <Link
                            className="dropdown-item text-black px-0 py-8 hover-text-primary d-flex align-items-center gap-3"
                            to="/view-profile"
                          >
                            <Icon
                              icon="ri-account-circle-line"
                              className="icon text-md"
                            />
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-black px-0 py-8 hover-text-primary d-flex align-items-center gap-3"
                            to="/company"
                          >
                            <Icon
                              icon="icon-park-outline:setting-two"
                              className="icon text-md"
                            />
                            Setting
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-black px-0 py-8 hover-text-danger d-flex align-items-center gap-3 w-100 mt-32"
                            to="#"
                          >
                            <Icon icon="lucide:power" className="icon text-md" />
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-main-body">
            {children ? (
              children
            ) : (
              <div className="card shadow-sm mt-3 full-width-card" style={{ width: "100%" }}>
                <div className="card-body">
                  <p>No content available. Please check the URL or refresh.</p>
                </div>
              </div>
            )}
          </div>
          <footer className="d-footer">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <p className="mb-0" style={{ fontSize: "13px" }}>
                  © 2025 MDN-Dash. All Rights Reserved.
                </p>
              </div>
              <div className="col-auto">
                <p className="mb-0" style={{ fontSize: "13px" }}>
                  Made by <span className="text-primary-600">MDN-Systems</span>
                </p>
              </div>
            </div>
          </footer>
        </main>
      </section>
    </div>
  );
};

export default MasterLayout;