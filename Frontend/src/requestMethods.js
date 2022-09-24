import axios from "axios";

const BASE_URL = "http://localhost:5000/";
 const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjA2YzZiY2FmMTVlMWRiZjIwNWY0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzQ5MDU1MywiZXhwIjoxNjYzNzQ5NzUzfQ.a3y6W5ZuetSQ7UPYuRcUp0wSzEHa3CRlJrhyOLOIugU"
//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
