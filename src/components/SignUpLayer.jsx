import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpLayer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === "username") {
      if (!value) {
        setUsernameError("Username is required");
      } else if (value.length < 3) {
        setUsernameError("Username must be at least 3 characters");
      } else {
        setUsernameError("");
      }
    }

    if (name === "email") {
      if (!value) {
        setEmailError("Email is required");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setEmailError("Please enter a valid email");
      } else {
        setEmailError("");
      }
    }

    if (name === "password") {
      if (!value) {
        setPasswordError("Password is required");
      } else if (value.length < 5) {
        setPasswordError("Password must be at least 5 characters");
      } else {
        setPasswordError("");
      }
    }

    if (name === "agreeToTerms" && !checked) {
      setTermsError("You must agree to the Terms & Conditions");
    } else if (name === "agreeToTerms" && checked) {
      setTermsError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password || !formData.agreeToTerms) {
      toast.error("Please fill in all fields and agree to the terms", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    if (usernameError || emailError || passwordError || termsError) {
      console.log("Validation failed:", { usernameError, emailError, passwordError, termsError });
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

    console.log("Simulating sign-up with:", formData);
    setLoading(true);

    setTimeout(() => {
      toast.success("Sign Up Successful! Redirecting to Sign In...", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/sign-in");
      }, 2000);

      setLoading(false);
    }, 1000);
  };

  return (
    <section className="auth bg-base d-flex flex-wrap">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="auth-left d-lg-block d-none">
        <div className="d-flex align-items-center flex-column h-100 justify-content-center">
          <img src="/assets/images/auth/auth-img.png" alt="Authentication" />
        </div>
      </div>
      <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
        <div className="max-w-464-px mx-auto w-100">
          <div className="text-center">
            <Link to="/" className="mb-40 max-w-290-px">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                style={{ width: "100%", maxWidth: "350px", margin: "0 auto" }}
              />
            </Link>
            <h6 className="mb-12 gw-bold">Sign Up to your Account</h6>
            <p
              className="mb-24 text-secondary-light"
              style={{ fontSize: "13px", maxWidth: "350px", margin: "0 auto", fontWeight: 600 }}
            >
              Enter your details to create an account.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-16">
              <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                <label
                  className="mb-8 d-block"
                  style={{ fontSize: "13px", textAlign: "left" }}
                >
                  Enter your username
                </label>
                <div style={{ position: "relative", height: "40px" }}>
                  <input
                    type="text"
                    name="username"
                    className="form-control bg-neutral-50 radius-4"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      height: "100%",
                      boxSizing: "border-box",
                      width: "100%",
                    }}
                  />
                </div>
                {usernameError && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "2px",
                      textAlign: "left",
                    }}
                  >
                    {usernameError}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-16">
              <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                <label
                  className="mb-8 d-block"
                  style={{ fontSize: "13px", textAlign: "left" }}
                >
                  Enter your email address
                </label>
                <div style={{ position: "relative", height: "40px" }}>
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-neutral-50 radius-4"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      height: "100%",
                      boxSizing: "border-box",
                      width: "100%",
                    }}
                  />
                </div>
                {emailError && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "2px",
                      textAlign: "left",
                    }}
                  >
                    {emailError}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-16" style={{ position: "relative" }}>
              <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                <label
                  className="mb-8 d-block"
                  style={{ fontSize: "13px", textAlign: "left" }}
                >
                  Enter your password
                </label>
                <div style={{ position: "relative", height: "40px" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control bg-neutral-50 radius-4"
                    value={formData.password}
                    onChange={handleChange}
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
                      showPassword ? "ri-eye-off-line" : "ri-eye-line"
                    }`}
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    title={showPassword ? "Hide password" : "Show password"}
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
                  ></span>
                </div>
                {passwordError && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "2px",
                      textAlign: "left",
                    }}
                  >
                    {passwordError}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-16">
              <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                <div className="form-check style-check d-flex align-items-start">
                  <input
                    className="form-check-input border border-neutral-300 mt-4"
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    id="condition"
                  />
                  <label
                    className="form-check-label text-sm"
                    htmlFor="condition"
                    style={{ textAlign: "left" }}
                  >
                    By creating an account, you agree to the{" "}
                    <Link to="#" className="forgot-password-link text-primary-800 fw-bold" style={{ fontSize: "12px" }}>
                      Terms & Conditions
                    </Link>{" "}
                    and our{" "}
                    <Link to="#" className="forgot-password-link text-primary-800 fw-bold" style={{ fontSize: "12px" }}>
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {termsError && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "2px",
                      textAlign: "left",
                    }}
                  >
                    {termsError}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary auth-btn text-sm btn-sm radius-4"
              disabled={
                loading ||
                !formData.username ||
                !formData.email ||
                !formData.password ||
                !formData.agreeToTerms ||
                usernameError ||
                emailError ||
                passwordError ||
                termsError
              }
              style={{
                height: "40px",
                maxWidth: "350px",
                margin: "0 auto",
                display: "block",
                width: "100%",
                lineHeight: "1",
              }}
            >
              {loading ? <div className="spinner"></div> : "Sign Up"}
            </button>
            <div className="mt-16 center-border-horizontal text-center">
              <span className="bg-base z-1 px-4" style={{ fontSize: "13px" }}>Or sign up with</span>
            </div>
            <div className="mt-16 d-flex align-items-center gap-3" style={{ maxWidth: "350px", margin: "16px auto 0" }}>
              <button
                type="button"
                className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50"
              >
                <Icon
                  icon="ic:baseline-facebook"
                  className="text-primary-600 text-xl line-height-1"
                />
                Facebook
              </button>
              <button
                type="button"
                className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50"
              >
                <Icon
                  icon="logos:google-icon"
                  className="text-primary-600 text-xl line-height-1"
                />
                Google
              </button>
            </div>
            <div style={{ maxWidth: "350px", margin: "12px auto 0", textAlign: "right" }}>
              <p className="mb-0" style={{ fontSize: "12px" }}>
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  className="forgot-password-link text-primary-800 fw-bold"
                  style={{ fontSize: "12px" }}
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpLayer;