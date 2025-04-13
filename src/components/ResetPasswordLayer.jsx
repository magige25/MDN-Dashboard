import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPasswordLayer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "password") {
      if (!value) {
        setPasswordError("Password is required");
      } else if (value.length < 5) {
        setPasswordError("Password must be at least 5 characters");
      } else {
        setPasswordError("");
      }
    }

    if (name === "confirmPassword") {
      if (!value) {
        setConfirmPasswordError("Confirm password is required");
      } else if (value !== formData.password) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.password || !formData.confirmPassword) {
      toast.error("Please fill in both password fields", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    if (passwordError || confirmPasswordError) {
      console.log("Validation failed:", { passwordError, confirmPasswordError });
      toast.error("Please fix the errors before submitting", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    if (!navigator.onLine) {
      toast.error("No network connection. Please check your internet.", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    console.log("Simulating password reset with:", formData);
    setLoading(true);

    // Simulate password reset without API call
    setTimeout(() => {
      toast.success("Password reset successful!", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/sign-in");
      }, 2000);

      setLoading(false);
    }, 1000); // Simulated delay to mimic API response time
  };

  return (
    <section className="auth bg-base d-flex flex-wrap">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="auth-left d-lg-block d-none">
        <div className="d-flex align-items-center flex-column h-100 justify-content-center">
          <img src="assets/images/auth/auth-img.png" alt="Reset Password" />
        </div>
      </div>
      <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
        <div className="max-w-464-px mx-auto w-100">
          <div className="text-center">
            <Link to="/sign-in" className="mb-40 max-w-290-px">
              <img
                src="assets/images/logo.png"
                alt="Logo"
                style={{ width: "100%", maxWidth: "350px", margin: "0 auto" }}
              />
            </Link>
            <h6 className="mb-12">Set New Password</h6>
            <p
              className="mb-32 text-secondary-light"
              style={{ fontSize: "13px", maxWidth: "350px", margin: "0 auto", fontWeight: 600 }}
            >
              Enter and confirm your new password.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {["password", "confirmPassword"].map((field) => (
              <div className="mb-20" key={field} style={{ position: "relative" }}>
                <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                  <label 
                    className="mb-8 d-block" 
                    style={{ 
                      fontSize: "13px",
                      textAlign: "left",
                    }}
                  >
                    {field === "password" ? "Enter New Password" : "Confirm New Password"}
                  </label>
                  <div style={{ position: "relative", height: "40px" }}>
                    <input
                      type={passwordVisibility[field] ? "text" : "password"}
                      className="form-control bg-neutral-50 radius-4"
                      value={formData[field]}
                      onChange={handlePasswordChange}
                      name={field}
                      required
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "52px",
                        height: "100%",
                        boxSizing: "border-box",
                        width: "100%",
                      }}
                    />
                    <span
                      className={`cursor-pointer text-secondary-light ${
                        passwordVisibility[field] ? "ri-eye-off-line" : "ri-eye-line"
                      }`}
                      onClick={() => togglePasswordVisibility(field)}
                      aria-label={passwordVisibility[field] ? "Hide password" : "Show password"}
                      title={passwordVisibility[field] ? "Hide password" : "Show password"}
                      style={{
                        position: "absolute",
                        right: "12px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 1,
                        width: "24px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    />
                  </div>
                  {(field === "password" && passwordError) || (field === "confirmPassword" && confirmPasswordError) ? (
                    <p 
                      style={{ 
                        color: "red", 
                        fontSize: "12px", 
                        marginTop: "2px", 
                        textAlign: "left",
                      }}
                    >
                      {field === "password" ? passwordError : confirmPasswordError}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="btn btn-primary auth-btn text-sm btn-sm radius-4 mt-32"
              disabled={
                loading ||
                !formData.password ||
                !formData.confirmPassword ||
                passwordError ||
                confirmPasswordError
              }
              style={{ 
                height: "40px",
                maxWidth: "350px", 
                margin: "32px auto 0", 
                display: "block",
                width: "100%",
                lineHeight: "1",
              }}
            >
              {loading ? <div className="spinner"></div> : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordLayer;