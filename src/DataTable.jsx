import React, { useState } from 'react';
import { Table, Input, Select } from 'antd';
import { Icon } from '@iconify/react/dist/iconify.js';

const { Option } = Select;

const DataTable = ({
  dataSource = [],
  columns = [],
  title = 'Default Data Tables',
  enableRowSelection = true,
  enableSearch = true,
  enableItemsPerPage = true,
  defaultItemsPerPage = 10,
  className = 'table datanew dataTable no-footer bordered-table',
  headerRightContent = null,
}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = dataSource.filter((record) =>
      Object.values(record).some(
        (field) =>
          field &&
          field
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1); 
  };

  const totalItems = (filteredData || dataSource).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = (filteredData || dataSource).slice(startIndex, endIndex);

  const rowSelection = enableRowSelection
    ? {
        selectedRowKeys,
        onChange: (newSelectedRowKeys) => {
          setSelectedRowKeys(newSelectedRowKeys);
        },
        columnWidth: '50px',
        renderCell: (checked, record, index, originNode) => (
          <div className="form-check style-check d-flex align-items-center">
            {originNode}
          </div>
        ),
      }
    : null;

  const columnsWithIndex = columns.map((col) => {
    if (col.key === 'index') {
      return {
        ...col,
        render: (text, record, index) => (
          <span>{(currentPage - 1) * itemsPerPage + index + 1}</span>
        ),
      };
    }
    return col;
  });

  return (
    <div className="card basic-data-table">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">{title}</h5>
        {headerRightContent}
      </div>
      <div className="card-body">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {enableItemsPerPage && (
              <>
                <span style={{ marginRight: '8px', fontSize: '14px' }}>Show</span>
                <Select
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  style={{ width: 80 }}
                >
                  <Option value={10}>10</Option>
                  <Option value={20}>20</Option>
                  <Option value={50}>50</Option>
                  <Option value={100}>100</Option>
                </Select>
                <span style={{ marginLeft: '8px', fontSize: '14px' }}>entries</span>
              </>
            )}
          </div>
          {enableSearch && (
            <Input
              placeholder="Search"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              style={{ width: 200 }}
            />
          )}
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columnsWithIndex}
          dataSource={paginatedData}
          pagination={false}
          rowKey="key"
          className={className}
        />
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="text-muted" style={{ fontSize: '13px' }}>
            <span>
              Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
              {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
            </span>
          </div>
          <nav aria-label="Page navigation">
            <ul className="pagination mb-0" style={{ gap: '6px' }}>
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '24px', height: '24px', padding: '0', transition: 'all 0.2s' }}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <Icon icon="ri-arrow-drop-left-line" style={{ fontSize: '12px' }} />
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
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
                  style={{ width: '24px', height: '24px', padding: '0', transition: 'all 0.2s' }}
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
  );
};

export default DataTable;