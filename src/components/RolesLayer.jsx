import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable from '../DataTable';

const RolesLayer = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      role: 'Admin',
      dateCreated: '10 Jan 2024',
      status: 'Active',
    },
    {
      key: '2',
      role: 'Manager',
      dateCreated: '15 Jan 2024',
      status: 'Active',
    },
    {
      key: '3',
      role: 'Frontend Developer',
      dateCreated: '20 Feb 2024',
      status: 'Inactive',
    },
    {
      key: '4',
      role: 'Backend Developer',
      dateCreated: '25 Feb 2024',
      status: 'Active',
    },
    {
      key: '5',
      role: 'Editor',
      dateCreated: '05 March 2024',
      status: 'Active',
    },
    {
      key: '6',
      role: 'Data Engineer',
      dateCreated: '10 March 2024',
      status: 'Inactive',
    },
    {
      key: '7',
      role: 'Credit Manager',
      dateCreated: '15 April 2024',
      status: 'Active',
    },
    {
      key: '8',
      role: 'Data Analyst',
      dateCreated: '20 April 2024',
      status: 'Active',
    },
    {
      key: '9',
      role: 'Product Manager',
      dateCreated: '25 May 2024',
      status: 'Inactive',
    },
    {
      key: '10',
      role: 'Marketing Lead',
      dateCreated: '30 May 2024',
      status: 'Active',
    },
  ]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newRole, setNewRole] = useState({ role: '', status: 'Active' });
  const [errors, setErrors] = useState({});

  const addModalRef = useRef(null);
  const deleteModalRef = useRef(null);

  // Handle row selection
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // Handle Add Role Modal
  const handleAddRole = () => {
    const errors = {};
    if (!newRole.role.trim()) {
      errors.role = 'Role name is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const newRoleEntry = {
      key: (dataSource.length + 1).toString(),
      role: newRole.role,
      dateCreated: new Date().toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      status: newRole.status,
    };

    setDataSource([...dataSource, newRoleEntry]);
    setNewRole({ role: '', status: 'Active' });
    setErrors({});
    setShowAddModal(false);
  };

  // Handle Delete Roles
  const handleDeleteRoles = () => {
    const updatedDataSource = dataSource.filter(
      (item) => !selectedRowKeys.includes(item.key)
    );
    setDataSource(updatedDataSource);
    setSelectedRowKeys([]);
    setShowDeleteModal(false);
  };

  // Get the delete confirmation message
  const getDeleteMessage = () => {
    if (selectedRowKeys.length === 1) {
      const roleToDelete = dataSource.find((item) => item.key === selectedRowKeys[0]);
      return `You want to delete the role "${roleToDelete.role}", this can't be undone once you delete.`;
    } else {
      return `You want to delete all the ${selectedRowKeys.length} marked items, this can't be undone once you delete.`;
    }
  };

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addModalRef.current && !addModalRef.current.contains(event.target)) {
        setShowAddModal(false);
        setNewRole({ role: '', status: 'Active' });
        setErrors({});
      }
      if (deleteModalRef.current && !deleteModalRef.current.contains(event.target)) {
        setShowDeleteModal(false);
      }
    };

    if (showAddModal || showDeleteModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAddModal, showDeleteModal]);

  // Clear error message when user starts typing
  const handleRoleInputChange = (e) => {
    setNewRole({ ...newRole, role: e.target.value });
    if (errors.role && e.target.value.trim()) {
      setErrors({});
    }
  };

  const columns = [
    {
      title: '#',
      key: 'index',
      width: '50px',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      sorter: (a, b) => a.role.length - b.role.length,
      render: (text) => <span style={{ fontSize: '14px' }}>{text}</span>,
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      sorter: (a, b) => a.dateCreated.localeCompare(b.dateCreated),
      render: (text) => <span style={{ fontSize: '14px' }}>{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <span
          className={`badge badge-md p-2 fs-10 ${
            text === 'Active'
              ? 'bg-success-focus text-success-600 border border-success-main'
              : 'bg-neutral-200 text-neutral-600 border border-neutral-400'
          } px-24 py-4`}
          style={{ fontSize: '10px' }}
        >
          {text}
        </span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: 'Action',
      key: 'action',
      sorter: (a, b) => a.key.localeCompare(b.key),
      render: (text, record) => (
        <div className="action-icon d-inline-flex">
          <Link
            to="#"
            className="w-28-px h-28-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center"
          >
            <Icon icon="majesticons:eye-line" style={{ fontSize: '14px' }} />
          </Link>
          <Link
            to="#"
            className="w-28-px h-28-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
          >
            <Icon icon="lucide:edit" style={{ fontSize: '14px' }} />
          </Link>
          <Link
            to="#"
            className="w-28-px h-28-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
            onClick={() => {
              setSelectedRowKeys([record.key]);
              setShowDeleteModal(true);
            }}
          >
            <Icon icon="fluent:delete-24-regular" style={{ fontSize: '14px' }} />
          </Link>
        </div>
      ),
    },
  ];

  const headerRightContent = (
    <div className="d-flex gap-2">
      <button
        className="btn btn-primary text-sm btn-sm px-10 py-10 radius-4 d-flex align-items-center gap-2"
        onClick={() => setShowAddModal(true)}
      >
        <Icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
        Add New Role
      </button>
    </div>
  );

  return (
    <div>
      {/* Add Role Modal */}
      <div
        className={`modal fade ${showAddModal ? 'show d-block' : ''}`}
        tabIndex="-1"
        style={{ backgroundColor: showAddModal ? 'rgba(0,0,0,0.5)' : 'transparent' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" ref={addModalRef}>
            <div className="modal-header">
              <h6 className="modal-title">Add Role</h6>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  setShowAddModal(false);
                  setNewRole({ role: '', status: 'Active' });
                  setErrors({});
                }}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="roleName" className="form-label">
                  Role Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.role ? 'is-invalid' : ''}`}
                  id="roleName"
                  value={newRole.role}
                  onChange={handleRoleInputChange}
                  placeholder="Enter role name"
                />
                {errors.role && <div className="invalid-feedback">{errors.role}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="roleStatus" className="form-label">
                  Status
                </label>
                <select
                  className="form-control"
                  id="roleStatus"
                  value={newRole.status}
                  onChange={(e) => setNewRole({ ...newRole, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setShowAddModal(false);
                  setNewRole({ role: '', status: 'Active' });
                  setErrors({});
                }}
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleAddRole}>
                Add Role
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <div
        className={`modal fade ${showDeleteModal ? 'show d-block' : ''}`}
        tabIndex="-1"
        style={{ backgroundColor: showDeleteModal ? 'rgba(0,0,0,0.5)' : 'transparent' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            ref={deleteModalRef}
            style={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            <div
              className="modal-body text-center p-4"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#ffe6e6',
                  borderRadius: '50%',
                  margin: '0 auto',
                }}
              >
                <Icon
                  icon="fluent:delete-24-regular"
                  style={{ fontSize: '30px', color: '#ff4d4f' }}
                />
              </div>
              <h5 className="modal-title mb-2" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Confirm Delete
              </h5>
              <p
                className="text-muted mb-4"
                style={{ fontSize: '14px', lineHeight: '1.5' }}
              >
                {getDeleteMessage()}
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button
                  type="button"
                  className="btn btn-outline-secondary px-4 py-2"
                  style={{
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger px-4 py-2"
                  style={{
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontWeight: '500',
                    backgroundColor: '#ff4d4f',
                    borderColor: '#ff4d4f',
                  }}
                  onClick={handleDeleteRoles}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DataTable
        dataSource={dataSource}
        columns={columns}
        title={false}
        enableRowSelection={true}
        enableSearch={true}
        enableItemsPerPage={true}
        defaultItemsPerPage={10}
        headerRightContent={headerRightContent}
        rowSelection={rowSelection}
      />
    </div>
  );
};

export default RolesLayer;