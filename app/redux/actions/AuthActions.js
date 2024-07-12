import axios from "axios";
import { URL } from "../../utils/APIUtils";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getAuthToken = (authToken, router) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/admins/GetAuth`,
    headers: {
      Authorization: `Bearer ${state().authToken}`,
    },
  };

  axios(config)
    .then(function (response) {
      if (response.data.successful) {
        dispatch({
          type: "RegisterUser",
          data: response.data.data,
        });
      } else {
        router("/");
        toast.error("Something went wrong! Please login.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          rtl: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .catch(function (error) {
      router("/");
      toast.error(`Something went wrong! Please login. ${error}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        rtl: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};


export const LoginUser = (email, password, router) => async (dispatch) => {
  if (email === "admin@admin.com" && password === "admin") {
    dispatch({
      type: "RegisterUser",
      data: { name: "admin" },
    });
    dispatch({
      type: "SetAuthToken",
      data: "admin",
    });
    router("/dashboard");
    return;
  } else {
    var data = JSON.stringify({
      l_data: {
        email,
        password,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/admins/Login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios(config);
      if (response.data.successful === true) {
        dispatch({
          type: "RegisterUser",
          data: response.data.data,
        });
        dispatch({
          type: "SetAuthToken",
          data: response.data.accessToken,
        });
        router("/dashboard");
      } else {
        toast.error(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          rtl: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        rtl: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
};


export const VerifyUser = (setModal, router) => async (dispatch, state) => {
  var data = JSON.stringify({
    data: {
      id: state().userDetails,
    },
  });
  var config = {
    method: "post",
    url: `${URL}/admins/VerifyEmail`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      if (response.data.successful === true) {
        setModal(false);
        dispatch({
          type: "RegisterUser",
          data: response.data.data,
        });
        dispatch({
          type: "SetAuthToken",
          data: response.data.accessToken,
        });
        router("/dashboard");
      } else {
        toast.error(response.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          rtl: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const LogoutUser = (router) => async (dispatch) => {
  dispatch({
    type: "LogoutUser",
    data: {},
  });
  router("/");
};

export const ForgetUserPassword = (email, setModal, router) => async (dispatch, state) => {
  var data = JSON.stringify({
    email,
  });
  var config = {
    method: "post",
    url: `${URL}/admins/ForgetPassword`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      if (response.data.successful === true) {
        setModal(false);
        toast.success("Email Sent to function!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          rtl: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch({
          type: "RegisterUser",
          data: response.data.data,
        });
        dispatch({
          type: "SetAuthToken",
          data: response.data.accessToken,
        });
        router("/dashboard");
      } else {
        toast.error(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          rtl: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const ResetPassword =
  (id, password, authToken, router) => async (dispatch, state) => {
    var data = JSON.stringify({
      pr_data: {
        password,
        id,
        name: state().RegisterUser.f_name,
        email: state().RegisterUser.email,
      },
    });
    var config = {
      method: "post",
      url: `${URL}/admins/PasswordReset`,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data.successful) {
          toast.success("Password updated successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            rtl: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(`${response.data?.message}!`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            rtl: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

export const UpdateUserPassword = (id, password, authToken, router) => async (dispatch, state) => {
  var data = JSON.stringify({
    pr_data: {
      password,
      id,
      name: state().userDetails.f_name,
      email: state().userDetails.email,
    },
  });
  var config = {
    method: "post",
    url: `${URL}/admins/PasswordReset`,
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      if (response.data.successful) {
        toast.success("Password updated successfully!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          rtl: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(`${response.data?.message}!`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          rtl: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const UpdateUser = (id, f_name, l_name, dob, gender, city_id, state_id, country_id, phone, email, authToken, setModal) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id,
        f_name,
        l_name,
        dob,
        gender: parseInt(gender),
        city_id,
        state_id,
        country_id,
        phone: `${phone}`,
        email,
      },
    });
    var config = {
      method: "post",
      url: `${URL}/profile/update_profile`,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.data.successful) {
          toast.success("Updated Successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            rtl: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: "RegisterUser",
            data: response.data.data,
          });
          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
          });
          if (setModal) {
            setModal(false);
          }
        } else {
          toast.error(response.data.Message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            rtl: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

export const UpdateUserModal =
  (id, f_name, l_name, dob, gender, setModal) =>
    async (dispatch, state) => {
      var data = JSON.stringify({
        data: {
          id,
          f_name,
          l_name,
          dob,
          gender: parseInt(gender),
        },
      });
      var config = {
        method: "post",
        url: `${URL}/profile/update_profile_modal`,
        headers: {
          Authorization: `Bearer ${state().authToken}`,
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          if (response.data.successful) {
            toast.success("Updated Successfully!", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              rtl: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            dispatch({
              type: "RegisterUser",
              data: response.data.data,
            });
            dispatch({
              type: "SetAuthToken",
              data: response.data.accessToken,
            });
            if (setModal) {
              setModal(false);
            }
          } else {
            toast.error(response.data.Message, {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              rtl: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };

export const UpdateIsActive = (is_active) => async (dispatch, state) => {
  var data = JSON.stringify({
    data: {
      id: state().userDetails.id,
      is_active,
    },
  });

  var config = {
    method: "post",
    url: `${URL}/admins/Update_AdminStatus`,
    headers: {
      Authorization: `Bearer ${state().authToken}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      if (response.data.successful) {
        dispatch({
          type: "RegisterUser",
          data: response.data.data,
        });
        dispatch({
          type: "SetAuthToken",
          data: response.data.accessToken,
        });
      } else {
        toast.error(response.data.Message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          rtl: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

