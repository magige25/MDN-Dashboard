import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const InvoicePreviewLayer = () => {
  const invoiceRef = useRef(null); // Reference to the invoice content for PDF generation

  // Download PDF functionality
  const handleDownload = () => {
    const input = invoiceRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const width = imgWidth * ratio;
      const height = imgHeight * ratio;
      const x = (pdfWidth - width) / 2; // Center horizontally
      const y = (pdfHeight - height) / 2; // Center vertically

      pdf.addImage(imgData, 'PNG', x, y, width, height);
      pdf.save('invoice_INV-001.pdf');
    });
  };

  // Print functionality
  const handlePrint = () => {
    const input = invoiceRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const width = imgWidth * ratio;
      const height = imgHeight * ratio;
      const x = (pdfWidth - width) / 2; // Center horizontally
      const y = (pdfHeight - height) / 2; // Center vertically

      pdf.addImage(imgData, 'PNG', x, y, width, height);
      const pdfBlob = pdf.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      const printWindow = window.open(url);
      printWindow.onload = () => {
        printWindow.print();
        URL.revokeObjectURL(url);
      };
    });
  };

  // Clone functionality (simulated by logging to console; adjust as needed)
  const handleClone = () => {
    // Simulate cloning by logging or redirecting to an edit page with pre-filled data
    console.log('Cloning Invoice #INV-001');
    alert('Invoice cloned! This would typically redirect to an edit page with pre-filled data.');
    // You could redirect to an edit route like: history.push('/edit-invoice/INV-001');
  };

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div>
            <div className="row">
              <div className="col-sm-10 mx-auto">
                <div className="card" style={{ borderRadius: 0 }}>
                  <div className="card-body d-flex justify-content-between align-items-center">
                    {/* Back to List - Aligned Left with Hover Effect */}
                    <Link
                      to="/invoice"
                      className="bi-arrow-left d-flex align-items-center fs-12 fw-medium d-inline-flex hover:text-primary"
                      style={{ transition: 'color 0.3s' }}
                    >
                      <span className="d-flex justify-content-center align-items-center rounded-circle me-2">
                      <Icon icon="tabler:arrow-left" />
                      </span>
                      Back to List
                    </Link>

                    {/* Download - Aligned Right */}
                    <div className="d-flex my-xl-auto right-content align-items-center">
                      <Link
                        to="#"
                        className="btn btn-dark d-flex align-items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDownload();
                        }}
                      >
                        <Icon icon="tabler:download" />
                        Download
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ borderRadius: 0 }} ref={invoiceRef}>
                  <div className="card-body">
                    <div className="row justify-content-between align-items-center border-bottom mb-3">
                      <div className="col-md-6">
                        <div className="mb-2">
                          <img src="/assets/images/logo.png" className="img-fluid" alt="logo" />
                        </div>
                        <p>3099 Kennedy Court Framingham, MA 01702</p>
                      </div>
                      <div className="col-md-6">
                        <div className="text-end mb-3">
                          <h6 className="text-gray mb-1 fs-5">
                            Invoice No <span className="text-primary">#INV-001</span>
                          </h6>
                          <p className="mb-1 fw-medium">
                            Created Date: <span className="text-dark">25 Jan 2024</span>
                          </p>
                          <p className="fw-medium">
                            Due Date: <span className="text-dark">05 Feb 2024</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row border-bottom mb-3">
                      <div className="col-md-5">
                        <p className="text-dark mb-2 fw-semibold">From</p>
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
                      <div className="col-md-5">
                        <p className="text-dark mb-2 fw-semibold">To</p>
                        <div>
                          <h6 className="mb-1 fs-6 fw-bold">Kathryn Murphy</h6>
                          <p className="mb-1">3103 Trainer Avenue Peoria, IL 61602</p>
                          <p className="mb-1">
                            Email: <span className="text-dark">kathryn@example.com</span>
                          </p>
                          <p>
                            Phone: <span className="text-dark">+1 987 471 6589</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <p className="text-title mb-2 fw-medium">Payment Status</p>
                          <span className="badge badge-success align-items-center mb-3">
                            <Icon icon="tabler:point-filled" />
                            Paid
                          </span>
                          <div>
                            <img src="/assets/images/qr.svg" className="img-fluid" alt="QR" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="fw-medium">
                        Invoice For:{' '}
                        <span className="text-dark fw-medium">Design & Development Services</span>
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
                              <td><h6 className="fs-6">Design Services</h6></td>
                              <td className="text-gray-9 fw-medium text-end">1</td>
                              <td className="text-gray-9 fw-medium text-end">$1,200.00</td>
                              <td className="text-gray-9 fw-medium text-end">$0.00</td>
                              <td className="text-gray-9 fw-medium text-end">$1,200.00</td>
                            </tr>
                            <tr>
                              <td><h6 className="fs-6">Development Consulting</h6></td>
                              <td className="text-gray-9 fw-medium text-end">2</td>
                              <td className="text-gray-9 fw-medium text-end">$500.00</td>
                              <td className="text-gray-9 fw-medium text-end">$50.00</td>
                              <td className="text-gray-9 fw-medium text-end">$950.00</td>
                            </tr>
                            <tr>
                              <td><h6 className="fs-6">UI/UX Strategy</h6></td>
                              <td className="text-gray-9 fw-medium text-end">1</td>
                              <td className="text-gray-9 fw-medium text-end">$800.00</td>
                              <td className="text-gray-9 fw-medium text-end">$0.00</td>
                              <td className="text-gray-9 fw-medium text-end">$800.00</td>
                            </tr>
                            <tr>
                              <td><h6 className="fs-6">Testing Services</h6></td>
                              <td className="text-gray-9 fw-medium text-end">3</td>
                              <td className="text-gray-9 fw-medium text-end">$300.00</td>
                              <td className="text-gray-9 fw-medium text-end">$30.00</td>
                              <td className="text-gray-9 fw-medium text-end">$870.00</td>
                            </tr>
                            <tr>
                              <td><h6 className="fs-6">Maintenance Support</h6></td>
                              <td className="text-gray-9 fw-medium text-end">1</td>
                              <td className="text-gray-9 fw-medium text-end">$400.00</td>
                              <td className="text-gray-9 fw-medium text-end">$0.00</td>
                              <td className="text-gray-9 fw-medium text-end">$400.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row border-bottom mb-3">
                      <div className="col-md-7">
                        <div className="py-4">
                          <div className="mb-3">
                            <h6 className="mb-1 fs-6">Terms and Conditions</h6>
                            <p>
                              Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.
                            </p>
                          </div>
                          <div className="mb-3">
                            <h6 className="mb-1 fs-6">Notes</h6>
                            <p>Please quote invoice number when remitting funds.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
                          <p className="mb-0">Sub Total</p>
                          <p className="text-dark fw-medium mb-2">$4,220.00</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
                          <p className="mb-0">Discount</p>
                          <p className="text-dark fw-medium mb-2">$80.00</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                          <p className="mb-0">VAT(0%)</p>
                          <p className="text-dark fw-medium mb-2">$0.00</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                          <h6 className="fs-6">Total Amount</h6>
                          <h6 className="fs-6">$4,140.00</h6>
                        </div>
                        <p className="fs-12">
                          Amount in Words: Dollar Four Thousand One Hundred Forty
                        </p>
                      </div>
                    </div>
                    <div className="row justify-content-end align-items-end text-end border-bottom mb-3">
                      <div className="col-md-3">
                        <div className="text-end">
                          <img src="/assets/images/sign.svg" className="img-fluid" alt="sign" />
                        </div>
                        <div className="text-end mb-3">
                          <h6 className="fs-5 fw-medium pe-3">Ted M. Davis</h6>
                          <p>Assistant Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="mb-3">
                        <img src="/assets/images/logo.png" className="img-fluid" alt="logo" />
                      </div>
                      <p className="text-dark mb-1">
                        Payment Made Via bank transfer / Cheque in the name of Thomas Lawler
                      </p>
                      <div className="d-flex justify-content-center align-items-center">
                        <p className="fs-12 mb-0 me-3">
                          Bank Name: <span className="text-dark">HDFC Bank</span>
                        </p>
                        <p className="fs-12 mb-0 me-3">
                          Account Number: <span className="text-dark">45366287987</span>
                        </p>
                        <p className="fs-12">
                          IFSC: <span className="text-dark">HDFC0018159</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="d-flex justify-content-center align-items-center m-4 gap-3">
            <Link
              to="#"
              className="btn btn-primary d-flex justify-content-center align-items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                handlePrint();
              }}
            >
              <Icon icon="tabler:printer" />
              Print Invoice
            </Link>
            <Link
              to="#"
              className="btn btn-white d-flex justify-content-center align-items-center border gap-2"
              onClick={(e) => {
                e.preventDefault();
                handleClone();
              }}
            >
              <Icon icon="tabler:copy" />
              Clone Invoice
            </Link>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default InvoicePreviewLayer;