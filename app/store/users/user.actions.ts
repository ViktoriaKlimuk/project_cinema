import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IEmailPassword } from "./user.interface";
import { toastr } from "react-redux-toastr";
import { AuthService } from "../../services/auth/auth.service";
import { toastError } from "../../utils/toastError";
import { errorCatch } from "../../api/api.helpers";

// register
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
  "auth/register",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.register(email, password);
      toastr.success("Registration", "Complited!");
      return response.data;
    } catch (error) {
      toastError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

//login
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
  "auth/login",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.login(email, password);
      toastr.success("Login", "Complited!");
      return response.data;
    } catch (error) {
      toastError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);
//logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});
//checkAuth
export const checkAuth = createAsyncThunk<IAuthResponse>(
  "auth/check-auth",
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens();
      return response.data;
    } catch (error) {
      if (errorCatch(error) === "jwt expired") {
        toastr.error("Logout", "Your auth is finish");
        thunkApi.dispatch(logout());
      }
      return thunkApi.rejectWithValue(error);
    }
  }
);
