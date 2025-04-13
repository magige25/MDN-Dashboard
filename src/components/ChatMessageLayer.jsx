import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import '../chat.css';

const ChatMessageLayer = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [showEmoji2, setShowEmoji2] = useState(false);
  const [showChatSearch, setShowChatSearch] = useState(false);

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="chat-wrapper">
            {/* Chats Sidebar */}
            <div className="sidebar-group">
              <div id="chats" className="sidebar-content active slimscroll">
                <div className="chat-search-header">
                  <div className="header-title d-flex align-items-center justify-content-between">
                    <h6 className="mb-3">Chats</h6>
                  </div>
                  {/* Chat Search */}
                  <div className="search-wrap">
                    <form action="chat.html">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search For Contacts or Messages"
                        />
                        <span className="input-group-text">
                          <Icon icon="bi:search" />
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /Chat Search */}
                </div>
                <div className="sidebar-body chat-body" id="chatsidebar">
                  {/* Left Chat Title */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="chat-title">All Chats</h5>
                  </div>
                  {/* /Left Chat Title */}
                  <div className="chat-users-wrap">
                    <div className="chat-list">
                      <Link to="#" className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <img
                            src="assets/images/chat/1.png"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Anthony Lewis</h6>
                            <p>
                              <span className="animate-typing">
                                is typing
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                              </span>
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">02:40 PM</span>
                            <div className="chat-pin">
                              <Icon icon="bi:pin-angle" className="me-2" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-dropdown">
                        <Link to="#" data-bs-toggle="dropdown">
                          <Icon icon="bi:three-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:archive" className="me-2" />
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:heart" className="me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:check" className="me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:pin-angle" className="me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:trash" className="me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to="#" className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <img
                            src="assets/images/chat/2.png"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Elliot Murray</h6>
                            <p>
                              <Icon icon="bi:file-earmark" className="me-1" />
                              Document
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">06:12 AM</span>
                            <div className="chat-pin">
                              <Icon icon="bi:check2-all" className="text-success" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-dropdown">
                        <Link to="#" data-bs-toggle="dropdown">
                          <Icon icon="bi:three-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:archive" className="me-2" />
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:heart" className="me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:check" className="me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:pin-angle" className="me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:trash" className="me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to="#" className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <img
                            src="assets/images/chat/3.png"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Stephan Peralt</h6>
                            <p className="text-danger">
                              <Icon icon="bi:camera-video-off" className="me-2" />
                              Missed Video Call
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">03:15 AM</span>
                            <div className="chat-pin">
                              <Icon icon="bi:pin-angle" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-dropdown">
                        <Link to="#" data-bs-toggle="dropdown">
                          <Icon icon="bi:three-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:archive" className="me-2" />
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:heart" className="me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:check" className="me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:pin-angle" className="me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:trash" className="me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to="#" className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <img
                            src="assets/images/chat/4.png"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Rebecca Smtih</h6>
                            <p>Hi How are you 🔥</p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">Sunday</span>
                            <div className="chat-pin">
                              <span className="count-message fs-12 fw-semibold">25</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-dropdown">
                        <Link to="#" data-bs-toggle="dropdown">
                          <Icon icon="bi:three-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:archive" className="me-2" />
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:heart" className="me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:check" className="me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:pin-angle" className="me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:trash" className="me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to="#" className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <img
                            src="assets/images/chat/5.png"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Harvey Smith</h6>
                            <p>Haha oh man 🔥</p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">03:15 AM</span>
                            <div className="chat-pin">
                              <Icon icon="bi:pin-angle" className="me-2" />
                              <span className="count-message fs-12 fw-semibold">12</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-dropdown">
                        <Link to="#" data-bs-toggle="dropdown">
                          <Icon icon="bi:three-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:archive" className="me-2" />
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:heart" className="me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:check" className="me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:pin-angle" className="me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:trash" className="me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to="#" className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <img
                            src="assets/images/chat/6.png"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Lori Broaddus</h6>
                            <p>Do you know which...</p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">02:40 PM</span>
                            <div className="chat-pin">
                              <Icon icon="bi:heart-fill" className="text-warning" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-dropdown">
                        <Link to="#" data-bs-toggle="dropdown">
                          <Icon icon="bi:three-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:archive" className="me-2" />
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:heart" className="me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:check" className="me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:pin-angle" className="me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:trash" className="me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to="#" className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <img
                            src="assets/images/chat/7.png"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Brian Villalobos</h6>
                            <p>Do you know which...</p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">06:12 AM</span>
                            <div className="chat-pin">
                              <Icon icon="bi:pin-angle" className="me-2" />
                              <Icon icon="bi:check2-all" className="text-success" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-dropdown">
                        <Link to="#" data-bs-toggle="dropdown">
                          <Icon icon="bi:three-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:archive" className="me-2" />
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:heart" className="me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:check" className="me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:pin-angle" className="me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:trash" className="me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to="#" className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <img
                            src="assets/images/chat/8.png"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Linda Ray</h6>
                            <p>
                              <Icon icon="bi:image" className="me-2" />
                              Photo
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">Wednesday</span>
                            <div className="chat-pin">
                              <span className="count-message fs-12 fw-semibold">12</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-dropdown">
                        <Link to="#" data-bs-toggle="dropdown">
                          <Icon icon="bi:three-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:archive" className="me-2" />
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:heart" className="me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:check" className="me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:pin-angle" className="me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:trash" className="me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-list">
                      <Link to="#" className="chat-user-list">
                        <div className="avatar avatar-lg online me-2">
                          <img
                            src="assets/images/chat/9.png"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-user-info">
                          <div className="chat-user-msg">
                            <h6>Doglas Martini</h6>
                            <p className="text-success">
                              <Icon icon="bi:camera-video" className="text-success me-2" />
                              Incoming Video Call
                            </p>
                          </div>
                          <div className="chat-user-time">
                            <span className="time">02:40 PM</span>
                            <div className="chat-pin">
                              <Icon icon="bi:heart-fill" className="text-warning" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-dropdown">
                        <Link to="#" data-bs-toggle="dropdown">
                          <Icon icon="bi:three-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:archive" className="me-2" />
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:heart" className="me-2" />
                              Mark as Favourite
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:check" className="me-2" />
                              Mark as Unread
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:pin-angle" className="me-2" />
                              Pin Chats
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <Icon icon="bi:trash" className="me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Chats Sidebar */}
            {/* Chat */}
            <div className="chat chat-messages show" id="middle">
              <div>
                <div className="chat-header">
                  <div className="user-details">
                    <div className="d-xl-none">
                      <Link className="text-muted chat-close me-2" to="#">
                        <Icon icon="bi:arrow-left" />
                      </Link>
                    </div>
                    <div className="avatar avatar-lg online flex-shrink-0">
                      <img
                        src="assets/images/chat/1.png"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="ms-2 overflow-hidden">
                      <h6>Anthony Lewis</h6>
                      <span className="last-seen">Online</span>
                    </div>
                  </div>
                  <div className="chat-options">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          className="btn chat-search-btn"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Search"
                          onClick={() => setShowChatSearch(!showChatSearch)}
                        >
                          <Icon icon="bi:search" />
                        </Link>
                      </li>
                      <li>
                        <Link className="btn no-bg" to="#" data-bs-toggle="dropdown">
                          <Icon icon="bi:three-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item">
                              <Icon icon="bi:volume-mute" className="me-2" />
                              Mute Notification
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <Icon icon="bi:clock" className="me-2" />
                              Disappearing Message
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <Icon icon="bi:eraser" className="me-2" />
                              Clear Message
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <Icon icon="bi:trash" className="me-2" />
                              Delete Chat
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <Icon icon="bi:x-circle" className="me-2" />
                              Block
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* Chat Search */}
                  <div className={`chat-search search-wrap contact-search ${showChatSearch ? 'visible-chat' : ''}`}>
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Contacts"
                        />
                        <span className="input-group-text">
                          <Icon icon="bi:search" />
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /Chat Search */}
                </div>

                <div className="chat-body chat-page-group slimscroll">
                  <div className="messages">
                    <div className="chats">
                      <div className="chat-avatar">
                        <img
                          src="assets/images/chat/1.png"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="chat-content">
                        <div className="chat-info">
                          <div className="message-content">
                            Hi John, I wanted to update you on a new company policy regarding remote work.
                            <div className="emoj-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#" onClick={() => setShowEmoji(!showEmoji)}>
                                    <Icon icon="bi:emoji-smile" />
                                  </Link>
                                  <div
                                    className="emoj-group-list"
                                    style={{ display: showEmoji ? "block" : "none" }}
                                  >
                                    <ul>
                                      <li><Link to="#">😊</Link></li>
                                      <li><Link to="#">😂</Link></li>
                                      <li><Link to="#">❤️</Link></li>
                                      <li><Link to="#">😍</Link></li>
                                      <li><Link to="#">🥺</Link></li>
                                      <li><Link to="#">👍</Link></li>
                                      <li><Link to="#">😎</Link></li>
                                      <li><Link to="#">🎉</Link></li>
                                      <li className="add-emoj"><Link to="#"><Icon icon="bi:plus" /></Link></li>
                                    </ul>
                                  </div>
                                </li>
                                <li><Link to="#"><Icon icon="bi:arrow-up-right" /></Link></li>
                              </ul>
                            </div>
                          </div>
                          <div className="chat-actions">
                            <Link to="#" data-bs-toggle="dropdown">
                              <Icon icon="bi:three-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:reply" className="me-2" />Reply</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:forward" className="me-2" />Forward</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:clipboard" className="me-2" />Copy</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:heart" className="me-2" />Mark as Favourite</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:trash" className="me-2" />Delete</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:check" className="me-2" />Mark as Unread</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:archive" className="me-2" />Archive Chat</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:pin-angle" className="me-2" />Pin Chat</Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="chat-profile-name">
                          <h6>
                            Anthony Lewis
                            <Icon icon="tabler:circle-filled" className="circle-icon" />
                            <span className="chat-time">08:00 AM</span>
                          </h6>
                        </div>
                        <div className="chat-info">
                          <div className="message-content">
                            Do you have a moment?
                            <div className="emoj-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#" onClick={() => setShowEmoji(!showEmoji)}>
                                    <Icon icon="bi:emoji-smile" />
                                  </Link>
                                  <div
                                    className="emoj-group-list"
                                    style={{ display: showEmoji ? "block" : "none" }}
                                  >
                                    <ul>
                                      <li><Link to="#">😊</Link></li>
                                      <li><Link to="#">😂</Link></li>
                                      <li><Link to="#">❤️</Link></li>
                                      <li><Link to="#">😍</Link></li>
                                      <li><Link to="#">🥺</Link></li>
                                      <li><Link to="#">👍</Link></li>
                                      <li><Link to="#">😎</Link></li>
                                      <li><Link to="#">🎉</Link></li>
                                      <li className="add-emoj"><Link to="#"><Icon icon="bi:plus" /></Link></li>
                                    </ul>
                                  </div>
                                </li>
                                <li><Link to="#"><Icon icon="bi:arrow-up-right" /></Link></li>
                              </ul>
                            </div>
                          </div>
                          <div className="chat-actions">
                            <Link to="#" data-bs-toggle="dropdown">
                              <Icon icon="bi:three-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:reply" className="me-2" />Reply</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:forward" className="me-2" />Forward</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:clipboard" className="me-2" />Copy</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:heart" className="me-2" />Mark as Favourite</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:trash" className="me-2" />Delete</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:check" className="me-2" />Mark as Unread</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:archive" className="me-2" />Archive Chat</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:pin-angle" className="me-2" />Pin Chat</Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="chat-profile-name">
                          <h6>
                            Anthony Lewis
                            <Icon icon="tabler:circle-filled" className="circle-icon" />
                            <span className="chat-time">08:00 AM</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="chats chats-right">
                      <div className="chat-content">
                        <div className="chat-info">
                          <div className="chat-actions">
                            <Link to="#" data-bs-toggle="dropdown">
                              <Icon icon="bi:three-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:reply" className="me-2" />Reply</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:forward" className="me-2" />Forward</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:clipboard" className="me-2" />Copy</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:heart" className="me-2" />Mark as Favourite</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:trash" className="me-2" />Delete</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:check" className="me-2" />Mark as Unread</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:archive" className="me-2" />Archive Chat</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:pin-angle" className="me-2" />Pin Chat</Link></li>
                            </ul>
                          </div>
                          <div className="message-content">
                            Sure, Sarah. What’s the new policy?
                            <div className="emoj-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#" onClick={() => setShowEmoji(!showEmoji)}>
                                    <Icon icon="bi:emoji-smile" />
                                  </Link>
                                  <div
                                    className="emoj-group-list"
                                    style={{ display: showEmoji ? "block" : "none" }}
                                  >
                                    <ul>
                                      <li><Link to="#">😊</Link></li>
                                      <li><Link to="#">😂</Link></li>
                                      <li><Link to="#">❤️</Link></li>
                                      <li><Link to="#">😍</Link></li>
                                      <li><Link to="#">🥺</Link></li>
                                      <li><Link to="#">👍</Link></li>
                                      <li><Link to="#">😎</Link></li>
                                      <li><Link to="#">🎉</Link></li>
                                      <li className="add-emoj"><Link to="#"><Icon icon="bi:plus" /></Link></li>
                                    </ul>
                                  </div>
                                </li>
                                <li><Link to="#"><Icon icon="bi:arrow-up-right" /></Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="chat-profile-name text-end">
                          <h6>
                            You
                            <Icon icon="tabler:circle-filled" className="circle-icon-2" />
                            <span className="chat-time">08:00 AM</span>
                            <span className="msg-read success">
                              <Icon icon="bi:check2-all" />
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="chat-avatar">
                        <img
                          src="assets/images/chat/2.png"
                          className="rounded-circle dreams_chat"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="chats">
                      <div className="chat-avatar">
                        <img
                          src="assets/images/chat/1.png"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="chat-content">
                        <div className="chat-info">
                          <div className="message-content">
                            Starting next month, we’ll be implementing a hybrid work model. Employees can work from home up to three days a week.
                            <div className="emoj-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#" onClick={() => setShowEmoji(!showEmoji)}>
                                    <Icon icon="bi:emoji-smile" />
                                  </Link>
                                  <div
                                    className="emoj-group-list"
                                    style={{ display: showEmoji ? "block" : "none" }}
                                  >
                                    <ul>
                                      <li><Link to="#">😊</Link></li>
                                      <li><Link to="#">😂</Link></li>
                                      <li><Link to="#">❤️</Link></li>
                                      <li><Link to="#">😍</Link></li>
                                      <li><Link to="#">🥺</Link></li>
                                      <li><Link to="#">👍</Link></li>
                                      <li><Link to="#">😎</Link></li>
                                      <li><Link to="#">🎉</Link></li>
                                      <li className="add-emoj"><Link to="#"><Icon icon="bi:plus" /></Link></li>
                                    </ul>
                                  </div>
                                </li>
                                <li><Link to="#"><Icon icon="bi:arrow-up-right" /></Link></li>
                              </ul>
                            </div>
                          </div>
                          <div className="chat-actions">
                            <Link to="#" data-bs-toggle="dropdown">
                              <Icon icon="bi:three-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:reply" className="me-2" />Reply</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:forward" className="me-2" />Forward</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:clipboard" className="me-2" />Copy</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:heart" className="me-2" />Mark as Favourite</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:trash" className="me-2" />Delete</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:check" className="me-2" />Mark as Unread</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:archive" className="me-2" />Archive Chat</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:pin-angle" className="me-2" />Pin Chat</Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="chat-profile-name">
                          <h6>
                            Anthony Lewis
                            <Icon icon="tabler:circle-filled" className="circle-icon" />
                            <span className="chat-time">08:00 AM</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="chats chats-right">
                      <div className="chat-content">
                        <div className="chat-info">
                          <div className="chat-actions">
                            <Link to="#" data-bs-toggle="dropdown">
                              <Icon icon="bi:three-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:reply" className="me-2" />Reply</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:forward" className="me-2" />Forward</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:clipboard" className="me-2" />Copy</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:heart" className="me-2" />Mark as Favourite</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:trash" className="me-2" />Delete</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:check" className="me-2" />Mark as Unread</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:archive" className="me-2" />Archive Chat</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:pin-angle" className="me-2" />Pin Chat</Link></li>
                            </ul>
                          </div>
                          <div className="message-content">
                            That sounds great! Are there any specific requirements for tracking our hours when working remotely?
                            <div className="emoj-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#" onClick={() => setShowEmoji(!showEmoji)}>
                                    <Icon icon="bi:emoji-smile" />
                                  </Link>
                                  <div
                                    className="emoj-group-list"
                                    style={{ display: showEmoji ? "block" : "none" }}
                                  >
                                    <ul>
                                      <li><Link to="#">😊</Link></li>
                                      <li><Link to="#">😂</Link></li>
                                      <li><Link to="#">❤️</Link></li>
                                      <li><Link to="#">😍</Link></li>
                                      <li><Link to="#">🥺</Link></li>
                                      <li><Link to="#">👍</Link></li>
                                      <li><Link to="#">😎</Link></li>
                                      <li><Link to="#">🎉</Link></li>
                                      <li className="add-emoj"><Link to="#"><Icon icon="bi:plus" /></Link></li>
                                    </ul>
                                  </div>
                                </li>
                                <li><Link to="#"><Icon icon="bi:arrow-up-right" /></Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="chat-profile-name text-end">
                          <h6>
                            You
                            <Icon icon="tabler:circle-filled" className="circle-icon-2" />
                            <span className="chat-time">08:00 AM</span>
                            <span className="msg-read success">
                              <Icon icon="bi:check2-all" />
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="chat-avatar">
                        <img
                          src="assets/images/chat/2.png"
                          className="rounded-circle dreams_chat"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="chat-line">
                      <span className="chat-date">Today, July 24</span>
                    </div>
                    <div className="chats">
                      <div className="chat-avatar">
                        <img
                          src="assets/images/chat/1.png"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="chat-content">
                        <div className="chat-info">
                          <div className="message-content">
                            Yes, we’ll be using a time-tracking tool to log hours. You’ll need to ensure you’re available during your usual working hours and keep your manager updated if anything changes.
                            <div className="emoj-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#" onClick={() => setShowEmoji(!showEmoji)}>
                                    <Icon icon="bi:emoji-smile" />
                                  </Link>
                                  <div
                                    className="emoj-group-list"
                                    style={{ display: showEmoji ? "block" : "none" }}
                                  >
                                    <ul>
                                      <li><Link to="#">😊</Link></li>
                                      <li><Link to="#">😂</Link></li>
                                      <li><Link to="#">❤️</Link></li>
                                      <li><Link to="#">😍</Link></li>
                                      <li><Link to="#">🥺</Link></li>
                                      <li><Link to="#">👍</Link></li>
                                      <li><Link to="#">😎</Link></li>
                                      <li><Link to="#">🎉</Link></li>
                                      <li className="add-emoj"><Link to="#"><Icon icon="bi:plus" /></Link></li>
                                    </ul>
                                  </div>
                                </li>
                                <li><Link to="#"><Icon icon="bi:arrow-up-right" /></Link></li>
                              </ul>
                            </div>
                          </div>
                          <div className="chat-actions">
                            <Link to="#" data-bs-toggle="dropdown">
                              <Icon icon="bi:three-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:reply" className="me-2" />Reply</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:forward" className="me-2" />Forward</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:clipboard" className="me-2" />Copy</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:heart" className="me-2" />Mark as Favourite</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:trash" className="me-2" />Delete</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:check" className="me-2" />Mark as Unread</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:archive" className="me-2" />Archive Chat</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:pin-angle" className="me-2" />Pin Chat</Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="chat-profile-name">
                          <h6>
                            Anthony Lewis
                            <Icon icon="tabler:circle-filled" className="circle-icon" />
                            <span className="chat-time">08:00 AM</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="chats chats-right">
                      <div className="chat-content">
                        <div className="chat-info">
                          <div className="chat-actions">
                            <Link to="#" data-bs-toggle="dropdown">
                              <Icon icon="bi:three-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:reply" className="me-2" />Reply</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:forward" className="me-2" />Forward</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:clipboard" className="me-2" />Copy</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:heart" className="me-2" />Mark as Favourite</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:trash" className="me-2" />Delete</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:check" className="me-2" />Mark as Unread</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:archive" className="me-2" />Archive Chat</Link></li>
                              <li><Link className="dropdown-item" to="#"><Icon icon="bi:pin-angle" className="me-2" />Pin Chat</Link></li>
                            </ul>
                          </div>
                          <div className="message-content">
                            Got it. Do we need to fill out any forms to start working remotely?
                            <div className="emoj-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#" onClick={() => setShowEmoji(!showEmoji)}>
                                    <Icon icon="bi:emoji-smile" />
                                  </Link>
                                  <div
                                    className="emoj-group-list"
                                    style={{ display: showEmoji ? "block" : "none" }}
                                  >
                                    <ul>
                                      <li><Link to="#">😊</Link></li>
                                      <li><Link to="#">😂</Link></li>
                                      <li><Link to="#">❤️</Link></li>
                                      <li><Link to="#">😍</Link></li>
                                      <li><Link to="#">🥺</Link></li>
                                      <li><Link to="#">👍</Link></li>
                                      <li><Link to="#">😎</Link></li>
                                      <li><Link to="#">🎉</Link></li>
                                      <li className="add-emoj"><Link to="#"><Icon icon="bi:plus" /></Link></li>
                                    </ul>
                                  </div>
                                </li>
                                <li><Link to="#"><Icon icon="bi:arrow-up-right" /></Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="chat-profile-name text-end">
                          <h6>
                            You
                            <Icon icon="tabler:circle-filled" className="circle-icon-2" />
                            <span className="chat-time">08:00 AM</span>
                            <span className="msg-read success">
                              <Icon icon="bi:check2-all" />
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="chat-avatar">
                        <img
                          src="assets/images/chat/2.png"
                          className="rounded-circle dreams_chat"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="chats">
                      <div className="chat-avatar">
                        <img
                          src="assets/images/chat/1.png"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="chat-content">
                        <div className="chat-profile-name">
                          <h6>
                            Edward Lietz
                            <Icon icon="tabler:circle-filled" className="circle-icon" />
                            <span className="chat-time">02:39 PM</span>
                            <span className="msg-read success">
                              <Icon icon="bi:check2-all" />
                            </span>
                          </h6>
                        </div>
                        <div className="message-content">
                          <span className="animate-typing">
                            is typing
                            <span className="dot" />
                            <span className="dot" />
                            <span className="dot" />
                          </span>
                          <div className="emoj-group">
                            <ul>
                              <li className="emoj-action">
                                <Link to="#" onClick={() => setShowEmoji(!showEmoji)}>
                                  <Icon icon="bi:emoji-smile" />
                                </Link>
                                <div
                                  className="emoj-group-list"
                                  style={{ display: showEmoji ? "block" : "none" }}
                                >
                                  <ul>
                                    <li><Link to="#">😊</Link></li>
                                    <li><Link to="#">😂</Link></li>
                                    <li><Link to="#">❤️</Link></li>
                                    <li><Link to="#">😍</Link></li>
                                    <li><Link to="#">🥺</Link></li>
                                    <li><Link to="#">👍</Link></li>
                                    <li className="add-emoj"><Link to="#"><Icon icon="bi:plus" /></Link></li>
                                  </ul>
                                </div>
                              </li>
                              <li><Link to="#"><Icon icon="bi:arrow-up-right" /></Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-footer">
                <form className="footer-form">
                  <div className="chat-footer-wrap">
                    <div className="form-item">
                      <Link to="#" className="action-circle">
                        <Icon icon="bi:mic" />
                      </Link>
                    </div>
                    <div className="form-wrap">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type Your Message"
                      />
                    </div>
                    <div className="form-item emoj-action-foot">
                      <Link
                        to="#"
                        className="action-circle"
                        onClick={() => setShowEmoji2(!showEmoji2)}
                      >
                        <Icon icon="bi:emoji-smile" />
                      </Link>
                      <div
                        className="emoj-group-list-foot down-emoji-circle"
                        style={{ display: showEmoji2 ? "block" : "none" }}
                      >
                        <ul>
                          <li><Link to="#">😊</Link></li>
                          <li><Link to="#">😂</Link></li>
                          <li><Link to="#">❤️</Link></li>
                          <li><Link to="#">😍</Link></li>
                          <li><Link to="#">🥺</Link></li>
                          <li><Link to="#">👍</Link></li>
                          <li className="add-emoj"><Link to="#"><Icon icon="bi:plus" /></Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="form-item position-relative d-flex align-items-center justify-content-center">
                      <Link
                        to="#"
                        className="action-circle file-action position-absolute"
                      >
                        <Icon icon="bi:folder" />
                      </Link>
                      <input
                        type="file"
                        className="open-file position-relative"
                        name="files"
                        id="files"
                      />
                    </div>
                    <div className="form-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <Icon icon="bi:three-dots-vertical" />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end p-3">
                        <Link to="#" className="dropdown-item">
                          <Icon icon="bi:camera" className="me-2" />Camera
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <Icon icon="bi:image" className="me-2" />Gallery
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <Icon icon="bi:music-note" className="me-2" />Audio
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <Icon icon="bi:geo-alt" className="me-2" />Location
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <Icon icon="bi:person-check" className="me-2" />Contact
                        </Link>
                      </div>
                    </div>
                    <div className="form-btn">
                      <button className="btn btn-primary" type="submit">
                        <Icon icon="bi:send" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* /Chat */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default ChatMessageLayer;