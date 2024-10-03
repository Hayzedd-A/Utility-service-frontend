import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { sendToServer } from "../config/functions";

import { Alert, Flex, Spin, Switch } from "antd";
import UtilModal from "../components/Global/UtilModal";
import SuccessVerification from "../components/verifyEmail/SuccessVerification";
import ErrorVerification from "../components/verifyEmail/ErrorVerification";
import { AppContext } from "../config/AppContext";

function VerifyEmail() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [value] = useSearchParams();
  const { setModalOpen } = useContext(AppContext);
  const effectRan = useRef(false);
  const [otpData, setOtpData] = useState("");

  const link = value.get("link");
  const email = value.get("email");

  // check if token is valid
  useEffect(() => {
    (async () => {
      if (effectRan.current === false) {
        console.log("componenet mounted");
        setOtpData({
          link,
          email,
        });
        try {
          const endpoint = `customers/verify-otp?link=${link}&email=${email}`;
          const response = await sendToServer(endpoint, "GET");
          setLoading(false);
          if (response.status !== "success") {
            // token is valid, show success message
            throw new Error();
          } else {
            setModalOpen(true);
            console.log(response);
            setError(false);
            // token is invalid, show error message
          }
        } catch (error) {
          console.error(error.message);
          setError(true);
          setModalOpen(true);
        }
      }
      effectRan.current = true;
    })();
  }, []);

  // validate token with server
  return (
    <div>
      <Flex gap="middle" vertical>
        <Spin spinning={loading}></Spin>
        {loading && (
          <Alert
            type="info"
            message="Verifying your email"
            description="Please wait."
          />
        )}
      </Flex>
      <UtilModal>
        {error ? <ErrorVerification data={otpData} /> : <SuccessVerification />}
      </UtilModal>
    </div>
  );
}

export default VerifyEmail;
