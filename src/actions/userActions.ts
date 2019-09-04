import User from "../models/User";
import * as constants from "./constants";

export interface SaveUser {
	type: constants.SAVE_USER;
	payload: User;
}

export interface DeleteUser {
	type: constants.DELETE_USER;
}

export type UserAction = SaveUser | DeleteUser;

export function saveUser(user: User) {
	return {
		type: constants.SAVE_USER,
		payload: user,
	}
}

export function deleteUser() {
	return {
		type: constants.DELETE_USER
	}
}