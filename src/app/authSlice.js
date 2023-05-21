import { createSlice } from "@reduxjs/toolkit"

//import { useCookies } from "react-cookie"
import { Cookies } from "react-cookie"

//const [cookies, removeCookie] = useCookies(['token']);
const cookies = new Cookies()
const token = cookies.get("token")
const type = cookies.get("type")

console.log(type)

const initialState = {
  isAuthenticated: token ? true : false,
  //type: "student",

  token: token,
  //type:type == 0?'student': type==1?'hod': type==2?'supervisor':type==3?'admin':null
  type: type ? type : null,
}

//console.log('type',initialState.type)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true
      state.token = token
      state.type = type
    },
    logout: (state) => {
      state.isAuthenticated = false
      //state.token = null
      //removeCookie('token')
      state.token = null
      state.type = null

      // cookies.remove('token')
      // cookies.remove('role')
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
