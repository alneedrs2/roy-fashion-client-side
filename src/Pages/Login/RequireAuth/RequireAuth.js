import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification] = useSendEmailVerification(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">Your email is not verified!</h3>
        <h5 className="text-success"> Please Verify Your Email Address</h5>
        <button
          className="btn btn-danger"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Send Verification Email Again
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
