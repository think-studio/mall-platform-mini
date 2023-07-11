import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '/@/type/userInfo';

export interface UserState {
	token: string;
	userInfo: UserInfo;
}

const initState: UserState = {
	token: '',
	userInfo: {}
};

const userSlice = createSlice({
	name: 'user',
	initialState: initState,
	reducers: {
		saveToken: (state: UserState, action: PayloadAction<string>) => {
			return {
				...state,
				token: action.payload
			};
		},
		saveUserInfo: (state: UserState, action: PayloadAction<UserInfo>) => {
			return {
				...state,
				userInfo: action.payload
			};
		}
	}
});

export const { saveToken, saveUserInfo } = userSlice.actions;
export default userSlice.reducer;
