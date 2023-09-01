import axios, { params } from "../../../baseUrl/axios";

export const registerUser = async (
  data,
  setSuccess,
  setError,
  setRegistering
) => {
  setRegistering(true);

  try {
    const response = await axios.post(`auth/sign-up${params}`, data, {
      headers: { Accept: "application/json" },
    });

    console.log(response.data);
    setSuccess(response.data);
  } catch (err) {
    if (!err?.response) {
      setError("No Response from Server");
    } else {
      console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  }

  setRegistering(false);
};

export const resendCode = async (data, setSuccess, setError, setResending) => {
  setResending(true);

  try {
    const response = await axios.post(`auth/forgot-password`, data, {
      headers: { Accept: "application/json" },
    });

    console.log(response.data);
    setSuccess(response.data);
  } catch (err) {
    if (!err?.response) {
      setError("No Response from Server");
    } else {
      console.log(err);
      setError(err);
    }
  }

  setResending(false);
};

export const loginUser = async (data, setSuccess, setError, setLoggingin) => {
  setLoggingin(true);

  try {
    const response = await axios.post(`auth/login${params}`, data, {
      headers: { Accept: "application/json" },
    });

    console.log(response.data);
    setSuccess(response.data);
  } catch (err) {
    if (!err?.response) {
      setError("No Response from Server");
    } else {
      console.log(err.response.data.message.message);
      setError(err.response.data.message.message);
    }
  }

  setLoggingin(false);
};
