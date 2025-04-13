import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';

const AddInvoiceLayer = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body;
  };

  const paymentTypeOptions = [
    { value: 'Select', label: 'Select' },
    { value: 'Credit', label: 'Credit' },
    { value: 'Debit', label: 'Debit' },
  ];

  const bankOptions = [
    { value: 'Select', label: 'Select' },
    { value: 'Bank of America', label: 'Bank of America' },
    { value: 'U.S. Bank', label: 'U.S. Bank' },
  ];

  const statusOptions = [
    { value: 'Paid', label: 'Paid' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Draft', label: 'Draft' },
    { value: 'Overdue', label: 'Overdue' },
  ];

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="row align-items-center">
          <div className="col-md-10 mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <Link
                    to="/invoices" // Adjust this route as needed
                    className="back-icon align-items-center fs-14 d-inline-flex fw-medium"
                  >
                    <span className="d-flex justify-content-center align-items-center rounded-circle me-2">
                      <i className="ti ti-arrow-left fs-12" />
                    </span>
                    Back to List
                  </Link>
                  <Link
                    to="#"
                    className="text-primary text-decoration-underline"
                    data-bs-toggle="modal"
                    data-bs-target="#invoice_preview"
                  >
                    Preview
                  </Link>
                </div>

                {/* My Details */}
                <div className="bg-light p-3 rounded mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6  className="mb-1 fs-6 fw-bold">From</h6>
                    <Link to="#" className="text-dark fw-medium text-decoration-underline">
                      <span className="text-gray me-2">
                        <i className="ti ti-edit" />
                      </span>
                      Edit Details
                    </Link>
                  </div>
                  <div>
                    <h6 className="mb-1 fs-6 fw-bold">Thomas Lawler</h6>
                    <p className="mb-1">2077 Chicago Avenue Orosi, CA 93647</p>
                    <p className="mb-1">
                      Email: <span className="text-dark">Tarala2445@example.com</span>
                    </p>
                    <p>
                      Phone: <span className="text-dark">+1 987 654 3210</span>
                    </p>
                  </div>
                </div>
                {/* /My Details */}

                {/* Invoice Details */}
                <div className="border-bottom mb-3">
                  <h6 className="mb-2 fs-6 fw-bold">Invoice Details</h6>
                  <div className="mb-2">
                    <label className="form-label">Invoice</label>
                    <input type="text" className="form-control" placeholder="e.g., INV-001" />
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="e.g., John Smith" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">Created On</label>
                        <div className="input-icon position-relative w-100 me-2">
                          <span className="input-icon-addon">
                            <i className="ti ti-calendar" />
                          </span>
                          <DatePicker
                            className="form-control datetimepicker"
                            format={{ format: 'DD-MM-YYYY', type: 'mask' }}
                            getPopupContainer={getModalContainer}
                            placeholder="DD-MM-YYYY"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">Due Date</label>
                        <div className="input-icon position-relative w-100 me-2">
                          <span className="input-icon-addon">
                            <i className="ti ti-calendar" />
                          </span>
                          <DatePicker
                            className="form-control datetimepicker"
                            format={{ format: 'DD-MM-YYYY', type: 'mask' }}
                            getPopupContainer={getModalContainer}
                            placeholder="DD-MM-YYYY"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">Total</label>
                        <input type="text" className="form-control" placeholder="e.g., $1,200.00" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">Amount Due</label>
                        <input type="text" className="form-control" placeholder="e.g., $0.00" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select className="form-control" defaultValue="Draft">
                          {statusOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Details */}

                {/* Payment Details */}
                <div className="border-bottom mb-3">
                  <h6 className="mb-2 fs-6 fw-bold">Payment Details</h6>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="form-label">Customer</label>
                          <Link
                            to="#"
                            className="text-primary fw-medium d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#add_customer"
                          >
                            <i className="ti ti-plus me-2" />
                            Add New
                          </Link>
                        </div>
                        <input type="text" className="form-control" placeholder="e.g., John Smith" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">Reference Number</label>
                        <input type="text" className="form-control" placeholder="e.g., REF-123" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">Payment Type</label>
                        <select className="form-control" defaultValue="Select">
                          {paymentTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">Bank Details</label>
                        <select className="form-control" defaultValue="Select">
                          {bankOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Payment Details */}

                {/* Add Items */}
                <div className="border-bottom mb-3">
                  <h6 className="mb-2 fs-6 fs-bold">Add Items</h6>
                  <div className="border rounded p-3 mb-3">
                    <div className="add-description-info">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-control" placeholder="e.g., Design Work" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="form-label">Qty</label>
                                <input type="text" className="form-control" placeholder="e.g., 1" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="form-label">Discount</label>
                                <input type="text" className="form-control" placeholder="e.g., $10" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="form-label">Rate</label>
                                <input type="text" className="form-control" placeholder="e.g., $500" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="text-primary add-more-description fw-medium d-flex align-items-center"
                    >
                      <i className="ti ti-plus me-2" />
                      Add New
                    </Link>
                  </div>
                </div>
                {/* /Add Items */}

                {/* Additional Details */}
                <div>
                  <h6 className="mb-2 fs-6 fw-bold">Additional Details</h6>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} placeholder="Add a description..." />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Notes</label>
                    <textarea className="form-control" rows={3} placeholder="Add notes..." />
                  </div>
                </div>
                {/* /Additional Details */}

                {/* Action Buttons */}
                <div className="d-flex justify-content-end align-items-center flex-wrap row-gap-3">
                  <Link
                    to="#"
                    className="btn btn-dark d-flex justify-content-center align-items-center"
                  >
                    <i className="ti ti-printer me-2" />
                    Save as Draft
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary d-flex justify-content-center align-items-center ms-2"
                  >
                    <i className="ti ti-copy me-2" />
                    Save & Send
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Preview Modal */}
      <div className="modal fade" id="invoice_preview">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body p-4">
              <div className="invoice-content">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="flex-fill">
                    <div className="row justify-content-between align-items-center border-bottom mb-3">
                      <div className="col-md-6">
                        <div className="mb-2">
                          <img src="assets/img/logo.svg" className="img-fluid" alt="logo" />
                        </div>
                        <p>3099 Kennedy Court Framingham, MA 01702</p>
                      </div>
                      <div className="col-md-6">
                        <div className="text-end mb-3">
                          <h5 className="text-gray mb-1">
                            Invoice No <span className="text-primary">#INV0001</span>
                          </h5>
                          <p className="mb-1 fw-medium">
                            Created Date: <span className="text-dark">Sep 24, 2023</span>
                          </p>
                          <p className="fw-medium">
                            Due Date: <span className="text-dark">Sep 30, 2023</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row border-bottom mb-3">
                      <div className="col-md-5">
                        <p className="text-dark mb-2 fs-7 fw-bold">From</p>
                        <div>
                          <h6 className="mb-1">Thomas Lawler</h6>
                          <p className="mb-1">2077 Chicago Avenue Orosi, CA 93647</p>
                          <p className="mb-1">
                            Email: <span className="text-dark">Tarala2445@example.com</span>
                          </p>
                          <p>
                            Phone: <span className="text-dark">+1 987 654 3210</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <p className="text-dark mb-2 fw-semibold">To</p>
                        <div>
                          <h4 className="mb-1">Sara Inc.</h4>
                          <p className="mb-1">3103 Trainer Avenue Peoria, IL 61602</p>
                          <p className="mb-1">
                            Email: <span className="text-dark">Sara_inc34@example.com</span>
                          </p>
                          <p>
                            Phone: <span className="text-dark">+1 987 471 6589</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <p className="text-title mb-2 fw-medium">Payment Status</p>
                          <span className="badge badge-danger align-items-center mb-3">
                            <i className="ti ti-point-filled" /> Due in 10 Days
                          </span>
                          <div>
                            <img src="assets/img/qr.svg" className="img-fluid" alt="QR" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="fw-medium">
                        Invoice For:{' '}
                        <span className="text-dark fw-medium">Design & Development of Website</span>
                      </p>
                      <div className="table-responsive mb-3">
                        <table className="table">
                          <thead className="thead-light">
                            <tr>
                              <th>Job Description</th>
                              <th className="text-end">Qty</th>
                              <th className="text-end">Cost</th>
                              <th className="text-end">Discount</th>
                              <th className="text-end">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><h6>UX Strategy</h6></td>
                              <td className="text-gray-9 fw-medium text-end">1</td>
                              <td className="text-gray-9 fw-medium text-end">$500</td>
                              <td className="text-gray-9 fw-medium text-end">$100</td>
                              <td className="text-gray-9 fw-medium text-end">$500</td>
                            </tr>
                            {/* Add more rows as needed */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* Add more preview content as needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Invoice Preview Modal */}

      {/* Add Customer Modal */}
      <div className="modal fade" id="add_customer">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Customer</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="/add-invoice">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex align-items-center justify-content-end m-0">
                  <button
                    className="btn btn-outline border me-2"
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Customer Modal */}
    </div>
  );
};

export default AddInvoiceLayer;