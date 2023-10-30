import { createAction, props } from "@ngrx/store";
import { GitHubUser } from "../store";

export const searchUsers = createAction('[GitHub Search] Search Users', props<{ username: string }>());
export const searchUsersSuccess = createAction('[GitHub Search] Search Users Success', props<{ users: GitHubUser[] }>());
export const searchUsersFailure = createAction('[GitHub Search] Search Users Failure', props<{ error: any }>());
