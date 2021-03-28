import axios from "axios";

const USER_REST_API_URL = "http://localhost:8090/users";

class UserService {
  getUsersList() {
    return axios.get(USER_REST_API_URL + "/list");
  }

  addUsersInfo(user) {
    return axios.post(USER_REST_API_URL + "/register", user);
  }

  deleteUsersInfo(userId) {
    return axios.delete(USER_REST_API_URL + "/list/delete/" + userId);
  }

  updateUsersInfo(userId, user) {
    return axios.put(USER_REST_API_URL + "/update/" + userId, user);
  }

  getUserById(userId) {
    return axios.get(USER_REST_API_URL + "/" + userId);
    //http://localhost:8090/users/list/1
  }
}

export default new UserService();
