import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import TableDataLayer from '../TableDataLayer';

const BorderlessTable = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Anthony Lewis',
      image: 'assets/images/user-list/user-list1.png',
      email: 'anthony@example.com',
      amount: '$200.00',
      status: 'Paid',
      createdDate: '12/09/2024',
    },
    {
      key: '2',
      name: 'Brian Villalobos',
      image: 'assets/images/user-list/user-list2.png',
      email: 'brian@example.com',
      amount: '$200.00',
      status: 'Paid',
      createdDate: '24/10/2024',
    },
    {
      key: '3',
      name: 'Sophie Headrick',
      image: 'assets/images/user-list/user-list3.png',
      email: 'sophie@example.com',
      amount: '$200.00',
      status: 'Paid',
      createdDate: '18/02/2024',
    },
    {
      key: '4',
      name: 'Stephen Peralt',
      image: 'assets/images/user-list/user-list4.png',
      email: 'peralt@example.com',
      amount: '$150.00',
      status: 'Paid',
      createdDate: '17/10/2024',
    },
    {
      key: '5',
      name: 'Thomas Bordelon',
      image: 'assets/images/user-list/user-list5.png',
      email: 'thomas@example.com',
      amount: '$150.00',
      status: 'Pending',
      createdDate: '20/07/2024',
    },
    {
      key: '6',
      name: 'Doglas Martini',
      image: 'assets/images/user-list/user-list6.png',
      email: 'martinwr@example.com',
      amount: '$150.00',
      status: 'Paid',
      createdDate: '10/04/2024',
    },
    {
      key: '7',
      name: 'Cameron Drake',
      image: 'assets/images/user-list/user-list7.png',
      email: 'cameron@example.com',
      amount: '$250.00',
      status: 'Paid',
      createdDate: '29/08/2024',
    },
    {
      key: '8',
      name: 'Harvey Smith',
      image: 'assets/images/user-list/user-list8.png',
      email: 'harvey@example.com',
      amount: '$250.00',
      status: 'Pending',
      createdDate: '22/02/2024',
    },
    {
      key: '9',
      name: 'Michael Walker',
      image: 'assets/images/user-list/user-list9.png',
      email: 'michael@example.com',
      amount: '$250.00',
      status: 'Paid',
      createdDate: '03/11/2024',
    },
    {
      key: '10',
      name: 'Doris Crowley',
      image: 'assets/images/user-list/user-list10.png',
      email: 'doris@example.com',
      amount: '$250.00',
      status: 'Paid',
      createdDate: '17/12/2024',
    },
  ];

  const columns = [
    {
      title: '#',
      key: 'index',
      width: '50px',
      render: (text, record, index, currentPage, itemsPerPage) => (
        <span>{(currentPage - 1) * itemsPerPage + index + 1}</span>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (text, record) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link to="#" className="avatar avatar-md avatar-rounded">
            <img src={record.image} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <Link to="#">{text}</Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: (a, b) => parseFloat(a.amount.replace('$', '')) - parseFloat(b.amount.replace('$', '')),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <span
          className={`badge badge-md p-2 fs-10 ${
            text === 'Paid' ? 'bg-success-focus text-success-main' : 'bg-warning-focus text-warning-main'
          } px-24 py-4 rounded-pill fw-medium text-sm`}
        >
          {text}
        </span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      sorter: (a, b) => a.createdDate.length - b.createdDate.length,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <div className="action-icon d-inline-flex">
          <Link
            to="#"
            className="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center"
          >
            <Icon icon="iconamoon:eye-light" style={{ fontSize: '16px' }} />
          </Link>
          <Link
            to="#"
            className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
          >
            <Icon icon="lucide:edit" style={{ fontSize: '16px' }} />
          </Link>
          <Link
            to="#"
            className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
          >
            <Icon icon="mingcute:delete-2-line" style={{ fontSize: '16px' }} />
          </Link>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
  ];

  return (
    <div>
      <TableDataLayer
        dataSource={dataSource}
        columns={columns}
        title="User Data Table"
        enableRowSelection={true}
        enableSearch={true}
        enableItemsPerPage={true}
        defaultItemsPerPage={10}
      />
    </div>
  );
};

export default BorderlessTable;