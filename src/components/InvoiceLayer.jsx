import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable from '../DataTable';

const InvoiceLayer = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      invoice: 'INV-001',
      name: 'Kathryn Murphy',
      createdOn: '25 Jan 2024',
      dueDate: '01 Feb 2024',
      total: '$1,200.00',
      amountDue: '$0.00',
      status: 'Paid',
    },
    {
      key: '2',
      invoice: 'INV-002',
      name: 'Annette Black',
      createdOn: '25 Jan 2024',
      dueDate: '05 Feb 2024',
      total: '$850.00',
      amountDue: '$850.00',
      status: 'Pending',
    },
    {
      key: '3',
      invoice: 'INV-003',
      name: 'Ronald Richards',
      createdOn: '10 Feb 2024',
      dueDate: '15 Feb 2024',
      total: '$2,500.00',
      amountDue: '$2,500.00',
      status: 'Draft',
    },
    {
      key: '4',
      invoice: 'INV-004',
      name: 'Eleanor Pena',
      createdOn: '10 Feb 2024',
      dueDate: '20 Feb 2024',
      total: '$1,750.00',
      amountDue: '$1,750.00',
      status: 'Pending',
    },
    {
      key: '5',
      invoice: 'INV-005',
      name: 'Leslie Alexander',
      createdOn: '15 Mar 2024',
      dueDate: '25 Mar 2024',
      total: '$900.00',
      amountDue: '$0.00',
      status: 'Paid',
    },
    {
      key: '6',
      invoice: 'INV-006',
      name: 'Albert Flores',
      createdOn: '15 Mar 2024',
      dueDate: '30 Mar 2024',
      total: '$3,000.00',
      amountDue: '$3,000.00',
      status: 'Overdue',
    },
    {
      key: '7',
      invoice: 'INV-007',
      name: 'Jacob Jones',
      createdOn: '27 Apr 2024',
      dueDate: '05 May 2024',
      total: '$1,400.00',
      amountDue: '$0.00',
      status: 'Paid',
    },
    {
      key: '8',
      invoice: 'INV-008',
      name: 'Jerome Bell',
      createdOn: '25 Jan 2024',
      dueDate: '10 Feb 2024',
      total: '$2,200.00',
      amountDue: '$2,200.00',
      status: 'Draft',
    },
    {
      key: '9',
      invoice: 'INV-009',
      name: 'Marvin McKinney',
      createdOn: '30 Apr 2024',
      dueDate: '10 May 2024',
      total: '$1,100.00',
      amountDue: '$0.00',
      status: 'Paid',
    },
    {
      key: '10',
      invoice: 'INV-010',
      name: 'Cameron Williamson',
      createdOn: '30 Apr 2024',
      dueDate: '15 May 2024',
      total: '$950.00',
      amountDue: '$950.00',
      status: 'Pending',
    },
    {
      key: '11',
      invoice: 'INV-011',
      name: 'Jane Doe',
      createdOn: '05 May 2024',
      dueDate: '20 May 2024',
      total: '$1,800.00',
      amountDue: '$1,800.00',
      status: 'Overdue',
    },
    {
      key: '12',
      invoice: 'INV-012',
      name: 'John Smith',
      createdOn: '12 Jun 2024',
      dueDate: '25 Jun 2024',
      total: '$2,300.00',
      amountDue: '$0.00',
      status: 'Paid',
    },
  ]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const deleteModalRef = useRef(null);

  // Handle row selection
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // Handle Delete Invoices
  const handleDeleteInvoices = () => {
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
      const invoiceToDelete = dataSource.find((item) => item.key === selectedRowKeys[0]);
      return `You want to delete the invoice "${invoiceToDelete.invoice}" for "${invoiceToDelete.name}", this can't be undone once you delete.`;
    } else {
      return `You want to delete all the ${selectedRowKeys.length} marked items, this can't be undone once you delete.`;
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (deleteModalRef.current && !deleteModalRef.current.contains(event.target)) {
        setShowDeleteModal(false);
      }
    };

    if (showDeleteModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDeleteModal]);

  const columns = [
    {
      title: '#',
      key: 'index',
      width: '50px',
    },
    {
      title: 'Invoice',
      dataIndex: 'invoice',
      key: 'invoice',
      sorter: (a, b) => a.invoice.length - b.invoice.length,
      render: (text) => <span style={{ fontSize: '14px' }}>{text}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (text) => <span style={{ fontSize: '14px' }}>{text}</span>,
    },
    {
      title: 'Created On',
      dataIndex: 'createdOn',
      key: 'createdOn',
      sorter: (a, b) => a.createdOn.localeCompare(b.createdOn),
      render: (text) => <span style={{ fontSize: '14px' }}>{text}</span>,
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      sorter: (a, b) => a.dueDate.localeCompare(b.dueDate),
      render: (text) => <span style={{ fontSize: '14px' }}>{text}</span>,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      sorter: (a, b) => a.total.localeCompare(b.total),
      render: (text) => <span style={{ fontSize: '14px' }}>{text}</span>,
    },
    {
      title: 'Amount Due',
      dataIndex: 'amountDue',
      key: 'amountDue',
      sorter: (a, b) => a.amountDue.localeCompare(b.amountDue),
      render: (text) => <span style={{ fontSize: '14px' }}>{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <span
          className={`badge badge-md p-2 fs-10 ${
            text === 'Paid'
              ? 'bg-success-focus text-success-600 border border-success-main'
              : text === 'Pending'
              ? 'bg-neutral-200 text-neutral-600 border border-neutral-400'
              : text === 'Draft'
              ? 'bg-warning-focus text-warning-600 border border-warning-main'
              : 'bg-danger-focus text-danger-600 border border-danger-main'
          } px-24 py-4`}
          style={{ fontSize: '12px', borderRadius: '4px' }}
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
      render: (record) => (
        <div className="action-icon d-inline-flex">
          <Link
            to="/invoice/invoice-preview"
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
            onClick={(e) => {
              e.preventDefault();
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
    <Link
      to="/invoice/add-invoice"
      className="btn btn-primary text-sm btn-sm px-10 py-10 radius-4 d-flex align-items-center gap-2"
    >
      <Icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
      Add New Invoice
    </Link>
  );

  return (
    <div>
      {/* Invoice Stats with CSS Classes */}
      <div className="row stats-row">
        <div className="col-xl-3 col-sm-6">
          <div className="stats-card">
            <div className="stats-card-body">
              <div className="d-flex align-items-center overflow-hidden">
                <div>
                  <p className="stats-card-title">Total Invoice</p>
                  <h5 className="stats-card-value">$3,237.94</h5>
                </div>
              </div>
              <div className="attendance-report-bar">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar bg-pink" style={{ width: '85%' }} />
                </div>
              </div>
              <div>
                <p className="stats-card-change">
                  <span className="text-success">
                    <Icon icon="tabler:arrow-wave-right-up" className="stats-arrow" />
                    +32.40%
                  </span>
                  from last month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="stats-card">
            <div className="stats-card-body">
              <div className="d-flex align-items-center overflow-hidden">
                <div>
                  <p className="stats-card-title">Outstanding</p>
                  <h5 className="stats-card-value">$3,237.94</h5>
                </div>
              </div>
              <div className="attendance-report-bar">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar bg-purple" style={{ width: '50%' }} />
                </div>
              </div>
              <div>
                <p className="stats-card-change">
                  <span className="text-danger">
                    <Icon icon="tabler:arrow-wave-right-up" className="stats-arrow" />
                    -4.40%
                  </span>
                  from last month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="stats-card">
            <div className="stats-card-body">
              <div className="d-flex align-items-center overflow-hidden">
                <div>
                  <p className="stats-card-title">Draft</p>
                  <h5 className="stats-card-value">$3,237.94</h5>
                </div>
              </div>
              <div className="attendance-report-bar">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar bg-warning" style={{ width: '30%' }} />
                </div>
              </div>
              <div>
                <p className="stats-card-change">
                  <span className="text-success">
                    <Icon icon="tabler:arrow-wave-right-up" className="stats-arrow" />
                    12%
                  </span>
                  from last month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="stats-card">
            <div className="stats-card-body">
              <div className="d-flex align-items-center overflow-hidden">
                <div>
                  <p className="stats-card-title">Total Overdue</p>
                  <h5 className="stats-card-value">$3,237.94</h5>
                </div>
              </div>
              <div className="attendance-report-bar">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar bg-danger" style={{ width: '20%' }} />
                </div>
              </div>
              <div>
                <p className="stats-card-change">
                  <span className="text-danger">
                    <Icon icon="tabler:arrow-wave-right-up" className="stats-arrow" />
                    -15.40%
                  </span>
                  from last month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Invoice DataTable */}
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
                  onClick={handleDeleteInvoices}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceLayer;