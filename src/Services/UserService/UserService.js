import axios from "axios";
import Cookies from "universal-cookie";

const USER_REST_API_URL = "http://localhost:8090/users";
const USER_AUTHENTICATION = "http://localhost:8090/authenticate";

class UserService {
  getToken(user) {
    return axios.post(USER_AUTHENTICATION, user);
  }

  getUsersList() {
    return axios.get(USER_REST_API_URL + "/list");
  }
  //after token
  getUsersListAfterToken(token) {
    return axios.get(USER_REST_API_URL + "/list", {
      headers: {
        authorization: "Bearer " + token,
        "content-type": "application/json",
      },
    });
  }

  addUsersInfo(user) {
    return axios.post(USER_REST_API_URL + "/register", user);
  }

  deleteUsersInfo(userId) {
    return axios.delete(USER_REST_API_URL + "/list/delete/" + userId);
  }

  deleteUserInfoWithToken(userId, token) {
    return axios.delete(USER_REST_API_URL + "/list/delete/" + userId, {
      headers: {
        authorization: "Bearer " + token,
        "content-type": "application/json",
      },
    });
  }

  updateUsersInfo(userId, user) {
    return axios.put(USER_REST_API_URL + "/update/" + userId, user);
  }

  updateUserInfoWithToken(userId, user, token) {
    return axios.put(USER_REST_API_URL + "/update/" + userId, user, {
      headers: {
        authorization: "Bearer " + token,
        "content-type": "application/json",
      },
    });
  }

  getUserById(userId) {
    return axios.get(USER_REST_API_URL + "/" + userId);
    //http://localhost:8090/users/list/1
  }

  getUserByIdWithToken(userId, token) {
    return axios.get(USER_REST_API_URL + "/" + userId, {
      headers: {
        authorization: "Bearer " + token,
        "content-type": "application/json",
      },
    });
  }

  removeTokenFromCookies(token) {
    const cookies = new Cookies();
    cookies.remove(token);
  }
}

export default new UserService();
