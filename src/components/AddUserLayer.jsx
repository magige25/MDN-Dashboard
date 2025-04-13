import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUserLayer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phone: '',
    role: '',
    userPermissions: [],
  });
  const [errors, setErrors] = useState({});

  const roles = [
    { roleId: 1, roleName: 'Admin' },
    { roleId: 2, roleName: 'Manager' },
    { roleId: 3, roleName: 'Frontend Developer' },
    { roleId: 3, roleName: 'Backend Developer' },
    { roleId: 3, roleName: 'Editor' },
    { roleId: 3, roleName: 'Data Engineer' },
    { roleId: 3, roleName: 'Credit Manager' },
    { roleId: 3, roleName: 'Data Analyst' },
  ];

  const modules = [
    { moduleId: 1, name: 'Employee' },
    { moduleId: 2, name: 'Holidays' },
    { moduleId: 3, name: 'Leaves' },
    { moduleId: 4, name: 'Events' },
  ];

  const allPermissions = [
    { code: 'RD', name: 'Read' },
    { code: 'WRT', name: 'Write' },
    { code: 'CRT', name: 'Create' },
    { code: 'DLT', name: 'Delete' },
    { code: 'IMP', name: 'Import' },
    { code: 'EXP', name: 'Export' },
  ];

  const validateField = (field, value) => {
    if (!value.trim()) {
      switch (field) {
        case 'firstName':
          return 'First Name is required';
        case 'lastName':
          return 'Last Name is required';
        case 'userName':
          return 'User Name is required';
        case 'email':
          return 'Email is required';
        case 'phone':
          return 'Phone is required';
        case 'role':
          return 'Role is required';
        default:
          return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    }
    if (field === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      return 'Please enter a valid email address';
    }
    if (field === 'phone' && value && !/^\+?\d{9,}$/.test(value)) {
      return 'Please enter a valid phone number';
    }
    return '';
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    const error = validateField(field, value);
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const handlePermissionChange = (moduleId, code, checked) => {
    setFormData((prev) => {
      const existingModule = prev.userPermissions.find((p) => p.moduleId === moduleId);
      if (checked) {
        if (existingModule) {
          return {
            ...prev,
            userPermissions: prev.userPermissions.map((p) =>
              p.moduleId === moduleId
                ? { ...p, permissionsCodes: [...p.permissionsCodes, code] }
                : p
            ),
          };
        } else {
          return {
            ...prev,
            userPermissions: [...prev.userPermissions, { moduleId, permissionsCodes: [code] }],
          };
        }
      } else {
        return {
          ...prev,
          userPermissions: prev.userPermissions
            .map((p) =>
              p.moduleId === moduleId
                ? { ...p, permissionsCodes: p.permissionsCodes.filter((c) => c !== code) }
                : p
            )
            .filter((p) => p.permissionsCodes.length > 0),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (field !== 'userPermissions') {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormData({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      phone: '',
      role: '',
      userPermissions: [],
    });
    setErrors({});

    navigate('/users');
  };

  const handleCancel = () => {
    navigate('/users');
  };

  return (
    <div className="card h-100 p-0 radius-4">
      <div className="card-body p-24">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card border">
              <div className="card-body">
                {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="row gx-3">
                    <div className="col-md-6 mb-20">
                      <label
                        htmlFor="firstName"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className={`form-control radius-4 ${errors.firstName ? 'is-invalid' : ''}`}
                        id="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                      />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="col-md-6 mb-20">
                      <label
                        htmlFor="lastName"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className={`form-control radius-4 ${errors.lastName ? 'is-invalid' : ''}`}
                        id="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                  </div>

                  <div className="row gx-3">
                    <div className="col-md-6 mb-20">
                      <label
                        htmlFor="userName"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        className={`form-control radius-4 ${errors.userName ? 'is-invalid' : ''}`}
                        id="userName"
                        placeholder="User Name"
                        value={formData.userName}
                        onChange={(e) => handleInputChange('userName', e.target.value)}
                      />
                      {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                    </div>
                    <div className="col-md-6 mb-20">
                      <label
                        htmlFor="email"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control radius-4 ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="row gx-3">
                    <div className="col-md-6 mb-20">
                      <label
                        htmlFor="phone"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        className={`form-control radius-4 ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                    <div className="col-md-6 mb-20">
                      <label
                        htmlFor="role"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                      >
                        Role
                      </label>
                      <select
                        className={`form-control radius-4 form-select ${errors.role ? 'is-invalid' : ''}`}
                        id="role"
                        value={formData.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                      >
                        <option value="" disabled>Select</option>
                        {roles.map((role) => (
                          <option key={role.roleId} value={role.roleId}>
                            {role.roleName}
                          </option>
                        ))}
                      </select>
                      {errors.role && <div className="invalid-feedback">{errors.role}</div>}
                    </div>
                  </div>

                  {/* Permissions Table */}
                  <div className="mb-20">
                    <h6 className="text-md text-primary-light mb-16">Module Permissions</h6>
                    <div className="table-responsive px-0 py-4 fw-medium">
                      <table className="table table-borderless mb-2 mt-8">
                        <thead>
                          <tr>
                            <th className="text-start">Module</th>
                            {allPermissions.map((perm) => (
                              <th key={perm.code} className="text-center">
                                {perm.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {modules.map((module) => (
                            <tr key={module.moduleId}>
                              <td className="text-start">{module.name}</td>
                              {allPermissions.map((perm) => (
                                <td key={perm.code} className="text-center">
                                  <div className="form-check form-check-md d-flex align-items-center justify-content-center">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      checked={
                                        formData.userPermissions
                                          .find((p) => p.moduleId === module.moduleId)?.permissionsCodes.includes(perm.code) || false
                                      }
                                      onChange={(e) => handlePermissionChange(module.moduleId, perm.code, e.target.checked)}
                                    />
                                  </div>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end gap-3">
                    <button
                      type="button"
                      className="btn btn-secondary text-md px-24 py-12 radius-4"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary text-md px-24 py-12 radius-4"
                    >
                      Add User
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserLayer;