import { createReducer, on } from "@ngrx/store";
import { GitHubSearchState } from "../store";
import { searchUsers, searchUsersFailure, searchUsersSuccess } from "../actions/githubSearch.actions";


const initialState: GitHubSearchState = {
    users: [],
    loading: false,
    error: null,
  };
  
export const gitHubSearchReducer = createReducer(
    initialState,
    on(searchUsers, (state) => ({ ...state, loading: true, error: null })),
    on(searchUsersSuccess, (state,users ) => ({ ...state, ...users, loading: false })),
    on(searchUsersFailure, (state,error ) => ({ ...state, ...error , loading: false})),
  );