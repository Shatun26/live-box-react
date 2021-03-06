import API from "./api";

export const SignInService = async (email, password) => {
  try {
    const response = await API.post("/user/signin", { email, password });
    return response;
  } catch (error) {
    return error.response
  }
};

export const SignUpService = async (body) => {
  try {
    const response = await API.post("/user/signup", body);
    return response;
  } catch (error) {
    return error.response
  }
};
