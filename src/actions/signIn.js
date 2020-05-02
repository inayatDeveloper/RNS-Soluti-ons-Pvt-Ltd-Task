import axios from "axios";
import { ReqLogin, SuccessLogin, FailedLogin } from "../constant";

export const mapStateToProps = (state) => {
  return { User: state.SignIn };
};

let reqLogin = () => {
  return {
    type: ReqLogin,
  };
};

let loginSuccess = (Response) => {
  return {
    type: SuccessLogin,
    data: Response,
  };
};

let logInFailed = (err) => {
  return {
    type: FailedLogin,
    error: err,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    logIn: async (device, password, email) => {
      // I have taken ip and location static..
      try {
        dispatch(reqLogin());
        const response = await axios.post(
          "https://stable.trade/api/users/accessToken",
          {
            email,
            password,
            Device: device,
            IP: "1222222",
            Location: "pk",
          }
        );
        dispatch(loginSuccess({ email, device }));
        //due to Cors policy issue tempory return Ok otherwise need response.data
        return "ok.";
      } catch (err) {
        dispatch(logInFailed(err));
      }
    },
  };
};
