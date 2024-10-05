import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { sendToServer } from "../config/functions";

import { Alert, Flex, Spin } from "antd";
import UtilModal from "../components/Global/UtilModal";
import SuccessVerification from "../components/verifyEmail/SuccessVerification";
import ErrorVerification from "../components/verifyEmail/ErrorVerification";
import { AppContext } from "../config/AppContext";

function VerifyEmail() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [value] = useSearchParams();
  const { setModalOpen } = useContext(AppContext);
  const [otpData, setOtpData] = useState("");

  const link = value.get("link");
  const email = value.get("email");

  // check if token is valid
  useEffect(() => {
    (async () => {
      console.log("componenet mounted");
      setOtpData({
        link,
        email,
      });
      try {
        const endpoint = `customers/verify-otp?link=${link}&email=${email}`;
        const { data } = await sendToServer(endpoint, "GET");

        setLoading(false);
        setModalOpen(true);
        if (data.status !== "success") {
          //   token is invalid, show error message
          throw new Error();
        }
      } catch (error) {
        console.error(error.message);
        setLoading(false);
        setModalOpen(true);
        setError(true);
      }
    })();
  }, [email]);

  // validate token with server
  return (
    <div className="page-container">
      <Flex gap="middle" vertical>
        {loading ? (
          <>
            <Spin spinning={true}></Spin>
            <Alert
              type="info"
              message="Verifying your email"
              description="Please wait."
            />
          </>
        ) : (
          <Alert
            type="info"
            message="Thank you"
            description="You can close the window"
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
