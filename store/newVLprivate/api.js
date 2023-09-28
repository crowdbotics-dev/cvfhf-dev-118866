import axios from "axios"
import {
  NEW_VL_PRIVATE_USERNAME,
  NEW_VL_PRIVATE_PASSWORD
} from "react-native-dotenv"
const newVLprivate = axios.create({
  baseURL: "https://crowdbotics.com",
  auth: {
    username: NEW_VL_PRIVATE_USERNAME,
    password: NEW_VL_PRIVATE_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
