const LOGIN_PATH = "/login";
const HOME_PATH = "/Home";

export const PATHS = {
  LOGIN: {
    INDEX: LOGIN_PATH,
    SIGNUP: LOGIN_PATH + "/sign-up",
    FPASSWORD: LOGIN_PATH + "/forgot-password",
    FPVERIFI: LOGIN_PATH + "/forgot-password/verify",
    CHANGE: LOGIN_PATH + "/forgot-password/verify/change",
  },

  MORE: HOME_PATH + "/More",
  PRODUCT: HOME_PATH + "/Product",
  CART: HOME_PATH + "/Cart",
  PAYMENT: HOME_PATH + "/Cart/Payment",
  SEARCH: HOME_PATH + "/Search",
  ORDERED: HOME_PATH + "/Payment",
  ORDER: HOME_PATH + "/InfoOder",
  USERINFO: HOME_PATH + "/InfoUser",
};
