import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CurrenciesLayer = () => {
    // Initial table data
    const initialData = [
        { id: 1, name: 'Dollars(Default)', symbol: '$', code: 'USD', status: true, selected: false },
        { id: 2, name: 'Taka', symbol: '৳', code: 'BDT', status: false, selected: false },
        { id: 3, name: 'Rupee', symbol: '₹', code: 'INR', status: false, selected: false },
        { id: 4, name: 'Dollars', symbol: '$', code: 'USD', status: false, selected: false },
        { id: 5, name: 'Taka', symbol: '৳', code: 'BDT', status: false, selected: false },
        { id: 6, name: 'Rupee', symbol: '₹', code: 'INR', status: false, selected: false },
        { id: 7, name: 'Dollars', symbol: '$', code: 'USD', status: false, selected: false },
        { id: 8, name: 'Taka', symbol: '৳', code: 'BDT', status: false, selected: false },
        { id: 9, name: 'Rupee', symbol: '₹', code: 'INR', status: false, selected: false },
    ];

    // State for table data, sorting, filtering, pagination, entries per page, and selection
    const [tableData, setTableData] = useState(initialData);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [selectAll, setSelectAll] = useState(false);

    // Handle sorting
    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });

        const sortedData = [...tableData].sort((a, b) => {
            let aValue = a[key];
            let bValue = b[key];

            // Handle boolean status for sorting
            if (key === 'status') {
                aValue = aValue ? 1 : 0;
                bValue = bValue ? 1 : 0;
            }

            if (aValue < bValue) return direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setTableData(sortedData);
    };

    // Handle search/filter
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setCurrentPage(1); // Reset to first page on search

        const filteredData = initialData.filter(
            (item) =>
                item.name.toLowerCase().includes(term) ||
                item.symbol.toLowerCase().includes(term) ||
                item.code.toLowerCase().includes(term)
        );
        setTableData(filteredData);
    };

    // Handle entries per page
    const handleEntriesChange = (e) => {
        setEntriesPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page when entries per page changes
    };

    // Handle pagination
    const totalEntries = tableData.length;
    const totalPages = Math.ceil(totalEntries / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const currentData = tableData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Handle status toggle
    const handleStatusToggle = (id) => {
        const updatedData = tableData.map((item) =>
            item.id === id ? { ...item, status: !item.status } : item
        );
        setTableData(updatedData);
    };

    // Handle delete
    const handleDelete = (id) => {
        const updatedData = tableData.filter((item) => item.id !== id);
        setTableData(updatedData);
    };

    // Handle select all
    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setTableData(tableData.map((item) => ({ ...item, selected: newSelectAll })));
    };

    // Handle individual selection
    const handleIndividualSelect = (id) => {
        const updatedData = tableData.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
        );
        setTableData(updatedData);

        const allSelected = updatedData.every((item) => item.selected);
        setSelectAll(allSelected);
    };

    return (
        <>
            <div className="card h-100 p-0 radius-12">
                <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
                    <div className="d-flex align-items-center flex-wrap gap-3">
                        <select
                            className="form-select form-select-sm w-auto py-2 px-3 radius-4 border border-gray-300"
                            style={{ fontSize: '14px', height: '32px' }}
                            defaultValue=""
                        >
                            <option value="" disabled>
                                09/22/2025 - 09/28/2025
                            </option>
                            <option value="1">Last 7 Days</option>
                            <option value="2">Last 30 Days</option>
                        </select>
                        <select
                            className="form-select form-select-sm w-auto py-2 px-3 radius-4 border border-gray-300"
                            style={{ fontSize: '14px', height: '32px' }}
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Role
                            </option>
                            <option value="1">Default</option>
                            <option value="2">Active</option>
                            <option value="3">Inactive</option>
                        </select>
                        <select
                            className="form-select form-select-sm w-auto py-2 px-3 radius-4 border border-gray-300"
                            style={{ fontSize: '14px', height: '32px' }}
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Status
                            </option>
                            <option value="1">Default</option>
                            <option value="2">Active</option>
                            <option value="3">Inactive</option>
                        </select>
                        <select
                            className="form-select form-select-sm w-auto py-2 px-3 radius-4 border border-gray-300"
                            style={{ fontSize: '14px', height: '32px' }}
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Sort By: Last 7 Days
                            </option>
                            <option value="1">Last 7 Days</option>
                            <option value="2">Last 30 Days</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <form className="navbar-search" style={{ position: 'relative' }}>
                            <input
                                type="text"
                                className="form-control h-32-px w-200-px border border-gray-300 radius-4"
                                style={{ fontSize: '14px', paddingRight: '30px' }}
                                name="search"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <Icon
                                icon="ion:search-outline"
                                className="icon"
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    fontSize: '16px',
                                    color: '#6b7280',
                                }}
                            />
                        </form>
                        <button
                            type="button"
                            className="btn btn-primary text-sm btn-sm px-12 py-6 radius-4 d-flex align-items-center gap-2"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            <Icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
                            Add Currency
                        </button>
                    </div>
                </div>
                <div className="card-body p-24">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center gap-2">
                            <span className="text-sm text-secondary-light">Row Per Page</span>
                            <select
                                className="form-select form-select-sm w-auto py-2 px-3 radius-4 border border-gray-300"
                                style={{ fontSize: '14px', height: '32px' }}
                                value={entriesPerPage}
                                onChange={handleEntriesChange}
                            >
                                {[5, 10, 15, 20].map((num) => (
                                    <option key={num} value={num}>
                                        {num} Entries
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="table-responsive scroll-sm">
                        <table className="table table-borderless sm-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-center py-3 px-2">
                                        <div className="form-check style-check d-flex align-items-center justify-content-center">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={selectAll}
                                                onChange={handleSelectAll}
                                            />
                                        </div>
                                    </th>
                                    <th scope="col" className="text-center py-3 px-2">
                                        #
                                        <button
                                            className="btn btn-link p-0 m-0 ms-1"
                                            onClick={() => handleSort('id')}
                                        >
                                            <Icon
                                                icon="mdi:arrow-up-down"
                                                className={`sort-icon ${
                                                    sortConfig.key === 'id'
                                                        ? sortConfig.direction === 'asc'
                                                            ? 'text-primary-600'
                                                            : 'text-primary-600 rotate-180'
                                                        : 'text-secondary-light'
                                                }`}
                                                style={{ fontSize: '14px' }}
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" className="text-center py-3 px-4">
                                        Name
                                        <button
                                            className="btn btn-link p-0 m-0 ms-1"
                                            onClick={() => handleSort('name')}
                                        >
                                            <Icon
                                                icon="mdi:arrow-up-down"
                                                className={`sort-icon ${
                                                    sortConfig.key === 'name'
                                                        ? sortConfig.direction === 'asc'
                                                            ? 'text-primary-600'
                                                            : 'text-primary-600 rotate-180'
                                                        : 'text-secondary-light'
                                                }`}
                                                style={{ fontSize: '14px' }}
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" className="text-center py-3 px-4">
                                        Symbol
                                        <button
                                            className="btn btn-link p-0 m-0 ms-1"
                                            onClick={() => handleSort('symbol')}
                                        >
                                            <Icon
                                                icon="mdi:arrow-up-down"
                                                className={`sort-icon ${
                                                    sortConfig.key === 'symbol'
                                                        ? sortConfig.direction === 'asc'
                                                            ? 'text-primary-600'
                                                            : 'text-primary-600 rotate-180'
                                                        : 'text-secondary-light'
                                                }`}
                                                style={{ fontSize: '14px' }}
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" className="text-center py-3 px-4">
                                        Code
                                        <button
                                            className="btn btn-link p-0 m-0 ms-1"
                                            onClick={() => handleSort('code')}
                                        >
                                            <Icon
                                                icon="mdi:arrow-up-down"
                                                className={`sort-icon ${
                                                    sortConfig.key === 'code'
                                                        ? sortConfig.direction === 'asc'
                                                            ? 'text-primary-600'
                                                            : 'text-primary-600 rotate-180'
                                                        : 'text-secondary-light'
                                                }`}
                                                style={{ fontSize: '14px' }}
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" className="text-center py-3 px-4">
                                        Status
                                        <button
                                            className="btn btn-link p-0 m-0 ms-1"
                                            onClick={() => handleSort('status')}
                                        >
                                            <Icon
                                                icon="mdi:arrow-up-down"
                                                className={`sort-icon ${
                                                    sortConfig.key === 'status'
                                                        ? sortConfig.direction === 'asc'
                                                            ? 'text-primary-600'
                                                            : 'text-primary-600 rotate-180'
                                                        : 'text-secondary-light'
                                                }`}
                                                style={{ fontSize: '14px' }}
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" className="text-center py-3 px-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((item, index) => (
                                    <tr key={item.id} style={{ transition: 'background-color 0.2s' }}>
                                        <td className="text-center small-text py-3 px-2">
                                            <div className="form-check style-check d-flex align-items-center justify-content-center">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={item.selected}
                                                    onChange={() => handleIndividualSelect(item.id)}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-center small-text py-3 px-2">
                                            {startIndex + index + 1}
                                        </td>
                                        <td className="text-center small-text py-3 px-4">{item.name}</td>
                                        <td className="text-center small-text py-3 px-4">{item.symbol}</td>
                                        <td className="text-center small-text py-3 px-4">{item.code}</td>
                                        <td className="text-center small-text py-3 px-4">
                                            <div className="form-switch switch-primary d-flex align-items-center justify-content-center">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    checked={item.status}
                                                    onChange={() => handleStatusToggle(item.id)}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-center small-text py-3 px-4">
                                            <div className="d-flex align-items-center gap-10 justify-content-center">
                                                <button
                                                    type="button"
                                                    className="bg-success-100 text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModalEdit"
                                                >
                                                    <Icon icon="lucide:edit" className="menu-icon" />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="remove-item-button bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                                    onClick={() => handleDelete(item.id)}
                                                >
                                                    <Icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="text-muted" style={{ fontSize: '13px' }}>
                            <span>
                                Showing {(currentPage - 1) * entriesPerPage + 1} to{' '}
                                {Math.min(currentPage * entriesPerPage, totalEntries)} of {totalEntries} entries
                            </span>
                        </div>
                        <nav aria-label="Page navigation">
                            <ul className="pagination mb-0" style={{ gap: '6px' }}>
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            padding: '0',
                                            transition: 'all 0.2s',
                                        }}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        <Icon icon="ri-arrow-drop-left-line" style={{ fontSize: '12px' }} />
                                    </button>
                                </li>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li
                                        key={i}
                                        className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                                    >
                                        <button
                                            className={`page-link btn ${
                                                currentPage === i + 1 ? 'btn-primary' : 'btn-outline-primary'
                                            } rounded-circle d-flex align-items-center justify-content-center`}
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                                padding: '0',
                                                transition: 'all 0.2s',
                                                fontSize: '10px',
                                                color: currentPage === i + 1 ? '#fff' : '',
                                            }}
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            padding: '0',
                                            transition: 'all 0.2s',
                                        }}
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        <Icon icon="ri-arrow-drop-right-line" style={{ fontSize: '12px' }} />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Modal Add Currency */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Add New Currency
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body p-24">
                            <form action="#">
                                <div className="row">
                                    <div className="col-6 mb-20">
                                        <label
                                            htmlFor="name"
                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control radius-8"
                                            id="name"
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                    <div className="col-6 mb-20">
                                        <label
                                            htmlFor="country"
                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                        >
                                            Country
                                        </label>
                                        <select
                                            className="form-control radius-8 form-select"
                                            id="country"
                                            defaultValue="Select symbol"
                                        >
                                            <option value="Select symbol">Select symbol</option>
                                            <option value="$">$</option>
                                            <option value="৳">৳</option>
                                            <option value="₹">₹</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label
                                            htmlFor="code"
                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                        >
                                            Code
                                        </label>
                                        <select
                                            className="form-control radius-8 form-select"
                                            id="code"
                                            defaultValue="Select Code"
                                        >
                                            <option value="Select Code">Select Code</option>
                                            <option value="15">15</option>
                                            <option value="26">26</option>
                                            <option value="64">64</option>
                                            <option value="25">25</option>
                                            <option value="92">92</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                                        <button
                                            type="reset"
                                            className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8"
                                        >
                                            Reset
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary border border-primary-600 text-md px-24 py-12 radius-8"
                                        >
                                            Save Change
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Edit Currency */}
            <div
                className="modal fade"
                id="exampleModalEdit"
                tabIndex={-1}
                aria-labelledby="exampleModalEditLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="exampleModalEditLabel">
                                Edit Currency
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body p-24">
                            <form action="#">
                                <div className="row">
                                    <div className="col-6 mb-20">
                                        <label
                                            htmlFor="editname"
                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control radius-8"
                                            id="editname"
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                    <div className="col-6 mb-20">
                                        <label
                                            htmlFor="editcountry"
                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                        >
                                            Country
                                        </label>
                                        <select
                                            className="form-control radius-8 form-select"
                                            id="editcountry"
                                            defaultValue="Select symbol"
                                        >
                                            <option value="Select symbol" disabled>
                                                Select symbol
                                            </option>
                                            <option value="$">$</option>
                                            <option value="৳">৳</option>
                                            <option value="₹">₹</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label
                                            htmlFor="editcode"
                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                        >
                                            Code
                                        </label>
                                        <select
                                            className="form-control radius-8 form-select"
                                            id="editcode"
                                            defaultValue="Select Code"
                                        >
                                            <option value="Select Code" disabled>
                                                Select Code
                                            </option>
                                            <option value="15">15</option>
                                            <option value="26">26</option>
                                            <option value="64">64</option>
                                            <option value="25">25</option>
                                            <option value="92">92</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                                        <button
                                            type="reset"
                                            className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary border border-primary-600 text-md px-50 py-12 radius-8"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CurrenciesLayer;