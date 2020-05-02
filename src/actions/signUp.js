import axios from "axios";
export const mapStateToProps = (state) => {
  return {};
};

export const mapDispatchToProps = (dispatch) => {
  return {
    signUp: async (device, password, email) => {
      try {
        //take ip and location static..
        const response = await axios.post("https://stable.trade/api/users", {
          email,
          password,
          Device: device,
          confirmPassword: "12",
          IP: "1222222",
          Location: "pk",
        });
        //due to Cors policy issue tempory return Ok otherwise need response.data
        return "ok";
      } catch (err) {
        alert("Error occur try again...");
        return err;
      }
    },
  };
};
