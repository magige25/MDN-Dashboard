import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OtpVerificationLayer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: ["", "", "", "", ""],
  });
  const [message, setMessage] = useState("We’ve sent a one-time password (OTP) code to your email.");
  const [timer, setTimer] = useState(180);
  const [resendDisabled, setResendDisabled] = useState(true);
  const inputRefs = useRef([]);
  const intervalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state?.email && location.state?.password) {
      setFormData((prevData) => ({
        ...prevData,
        email: location.state.email,
        password: location.state.password,
      }));
    } else {
      navigate("/sign-in");
    }

    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(intervalRef.current);
          setResendDisabled(false);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [location, navigate]);

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      otp: newOtp,
    }));

    if (value && index < formData.otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1].focus();
      const newOtp = [...formData.otp];
      newOtp[index - 1] = "";
      setFormData((prevData) => ({
        ...prevData,
        otp: newOtp,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const otpCode = formData.otp.join("");

    if (otpCode.length !== 5) {
      toast.error("Please enter a valid 5-digit OTP.", {
        position: "top-right",
        autoClose: 2000,
      });
      setLoading(false);
      return;
    }

    if (!navigator.onLine) {
      toast.error("No network connection. Please check your internet.", {
        position: "top-right",
        autoClose: 2000,
      });
      setLoading(false);
      return;
    }

    setTimeout(() => {
      console.log("Simulating OTP verification with:", {
        email: formData.email,
        password: formData.password,
        otp: otpCode,
      });

      toast.success("OTP Verified Successfully", {
        position: "top-right",
        autoClose: 2000,
      });

      const mockToken = "mock-access-token";
      sessionStorage.setItem("userToken", mockToken);

      setTimeout(() => {
        navigate("/dashboard"); 
      }, 1000);

      setLoading(false);
    }, 1000);
  };

  const handleResend = () => {
    if (!formData.email?.trim()) {
      console.log("Error: Email is missing!");
      toast.error("Email is required to resend OTP.", {
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

    setLoading(true);

    setTimeout(() => {
      console.log("Simulating resend OTP with:", {
        email: formData.email,
        password: formData.password,
      });

      toast.success("OTP Resent Successfully", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimer(180);
      setResendDisabled(true);
      setMessage("A new OTP has been sent to your email");

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(intervalRef.current);
            setResendDisabled(false);
            return 0;
          }
        });
      }, 1000);

      setLoading(false);
    }, 1000); // Simulated delay to mimic API response time
  };

  return (
    <section className="auth bg-base d-flex flex-wrap">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="auth-left d-lg-block d-none">
        <div className="d-flex align-items-center flex-column h-100 justify-content-center">
          <img src="assets/images/auth/auth-img.png" alt="Authentication" />
        </div>
      </div>
      <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
        <div className="max-w-464-px mx-auto w-100">
          <div className="text-center">
            <Link to="/" className="mb-40 max-w-290-px">
              <img
                src="assets/images/logo.png"
                alt="otp"
                style={{ width: "100%", maxWidth: "350px", margin: "0 auto" }}
              />
            </Link>
            <p className="mb-32 text-secondary-light" style={{ fontSize: "13px" }}>
              {message}
            </p>
            <p className="mb-24" style={{ fontSize: "13px" }}>
              This code will expire in {`${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}`}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-20" style={{ position: "relative" }}>
              <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                <label 
                  className="mb-8 d-block" 
                  style={{ 
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  Enter OTP Code
                </label>
                <div className="otp-inputs d-flex gap-2" style={{ width: "100%", maxWidth: "350px", margin: "0 auto" }}>
                  {formData.otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      className="form-control bg-neutral-50 radius-4 text-center"
                      value={digit}
                      maxLength="1"
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      ref={(el) => (inputRefs.current[index] = el)}
                      style={{
                        height: "40px",
                        boxSizing: "border-box",
                        width: "20%", 
                        textAlign: "center",
                        padding: "0", 
                        fontSize: "16px",
                        fontWeight: "800",
                      }}
                      autoFocus={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary auth-btn text-sm btn-sm radius-4 mt-32"
              disabled={formData.otp.includes("") || loading}
              style={{ 
                height: "40px",
                maxWidth: "350px", 
                margin: "0 auto", 
                display: "block",
                width: "100%",
                border: "1px solid #ccc",
                boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.1)",
                lineHeight: "1",
              }}
            >
              {loading ? <div className="spinner"></div> : "Confirm OTP"}
            </button>

            <div style={{ maxWidth: "350px", margin: "0 auto" }}>
              <p
                className="text-secondary-light mt-4"
                style={{ fontSize: "13px", textAlign: "right" }}
              >
                Did not receive code?{" "}
                <button
                  className="btn btn-link resend-link text-primary-800 fw-bold"
                  onClick={handleResend}
                  disabled={resendDisabled || loading}
                  style={{ fontSize: "13px" }}
                >
                  Resend
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OtpVerificationLayer;