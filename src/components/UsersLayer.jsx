import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable from '../DataTable'; 

const UsersLayer = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Kathryn Murphy',
      email: 'osgoodwy@gmail.com',
      role: 'Manager',
      dateCreated: '25 Jan 2024',
      status: 'Active',
      image: 'assets/images/user-list/user-list1.png',
    },
    {
      key: '2',
      name: 'Annette Black',
      email: 'redaniel@gmail.com',
      role: 'Admin',
      dateCreated: '25 Jan 2024',
      status: 'Inactive',
      image: 'assets/images/user-list/user-list2.png',
    },
    {
      key: '3',
      name: 'Ronald Richards',
      email: 'seannand@mail.ru',
      role: 'Manager',
      dateCreated: '10 Feb 2024',
      status: 'Active',
      image: 'assets/images/user-list/user-list3.png',
    },
    {
      key: '4',
      name: 'Eleanor Pena',
      email: 'miyokoto@mail.ru',
      role: 'Editor',
      dateCreated: '10 Feb 2024',
      status: 'Active',
      image: 'assets/images/user-list/user-list4.png',
    },
    {
      key: '5',
      name: 'Leslie Alexander',
      email: 'icadahli@gmail.com',
      role: 'Editor',
      dateCreated: '15 March 2024',
      status: 'Inactive',
      image: 'assets/images/user-list/user-list5.png',
    },
    {
      key: '6',
      name: 'Albert Flores',
      email: 'warn@mail.ru',
      role: 'Admin',
      dateCreated: '15 March 2024',
      status: 'Active',
      image: 'assets/images/user-list/user-list6.png',
    },
    {
      key: '7',
      name: 'Jacob Jones',
      email: 'zitka@mail.ru',
      role: 'Frontend Developer',
      dateCreated: '27 April 2024',
      status: 'Active',
      image: 'assets/images/user-list/user-list7.png',
    },
    {
      key: '8',
      name: 'Jerome Bell',
      email: 'igerrin@gmail.com',
      role: 'Frontend Developer',
      dateCreated: '25 Jan 2024',
      status: 'Inactive',
      image: 'assets/images/user-list/user-list8.png',
    },
    {
      key: '9',
      name: 'Marvin McKinney',
      email: 'maka@yandex.ru',
      role: 'Frontend Developer',
      dateCreated: '30 April 2024',
      status: 'Active',
      image: 'assets/images/user-list/user-list2.png',
    },
    {
      key: '10',
      name: 'Cameron Williamson',
      email: 'danten@mail.ru',
      role: 'Credit Manager',
      dateCreated: '30 April 2024',
      status: 'Active',
      image: 'assets/images/user-list/user-list10.png',
    },
    {
      key: '11',
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      role: 'Backend Developer',
      dateCreated: '05 May 2024',
      status: 'Active',
      image: 'assets/images/user-list/user-list1.png',
    },
    {
      key: '12',
      name: 'John Smith',
      email: 'johnsmith@example.com',
      role: 'Product Manager',
      dateCreated: '12 June 2024',
      status: 'Inactive',
      image: 'assets/images/user-list/user-list2.png',
    },
    {
      key: '13',
      name: 'Emily Johnson',
      email: 'emilyj@example.com',
      role: 'Credit Manager',
      dateCreated: '20 July 2024',
      status: 'Active',
      image: 'assets/images/user-list/user-list3.png',
    },
    {
      key: '14',
      name: 'Michael Brown',
      email: 'michaelb@example.com',
      role: 'Data Engineer',
      dateCreated: '15 August 2024',
      status: 'Active',
      image: 'assets/images/user-list/user-list4.png',
    },
    {
      key: '15',
      name: 'Sarah Davis',
      email: 'sarahd@example.com',
      role: 'Data Analyst',
      dateCreated: '10 September 2024',
      status: 'Inactive',
      image: 'assets/images/user-list/user-list5.png',
    },
  ];

  const columns = [
    {
      title: '#',
      key: 'index',
      width: '50px',
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
            <Link to="#" style={{ fontSize: '14px' }}>{text}</Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
      render: (text) => (
        <span style={{ fontSize: '14px' }}>{text}</span>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      sorter: (a, b) => a.role.length - b.role.length,
      render: (text) => (
        <span style={{ fontSize: '14px' }}>{text}</span>
      ),
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      sorter: (a, b) => a.dateCreated.localeCompare(b.dateCreated),
      render: (text) => (
        <span style={{ fontSize: '14px' }}>{text}</span>
      ),
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
      render: () => (
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
          >
            <Icon icon="fluent:delete-24-regular" style={{ fontSize: '14px' }} />
          </Link>
        </div>
      )
    } 
  ];

  const headerRightContent = (
    <Link
      to="/users/add-user"
      className="btn btn-primary text-sm btn-sm px-10 py-10 radius-4 d-flex align-items-center gap-2"
    >
      <Icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
      Add New User
    </Link>
  );

  return (
    <div>
      <DataTable
        dataSource={dataSource}
        columns={columns}
        title={false}
        enableRowSelection={true}
        enableSearch={true}
        enableItemsPerPage={true}
        defaultItemsPerPage={10}
        headerRightContent={headerRightContent}
      />
    </div>
  );
};

export default UsersLayer;