import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import * as GitHubSearchActions from "./actions/GitHubSearch.actions"

export interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
  }

export interface GitHubSearchState {
    users: GitHubUser[];
    loading: boolean;
    error: any;
  }
  
  const initialState: GitHubSearchState = {
    users: [],
    loading: false,
    error: null,
  };


  
export const gitHubSearchReducer = createReducer(
    initialState,
    on(GitHubSearchActions.searchUsers, (state) => ({ ...state, loading: true, error: null })),
    on(GitHubSearchActions.searchUsersSuccess, (state,users ) => ({ ...state, ...users, loading: false })),
    on(GitHubSearchActions.searchUsersFailure, (state,error ) => ({ ...state, ...error , loading: false})),
  );

  let searchFS = createFeatureSelector<GitHubSearchState>('usersStore')
  export let userSelector = createSelector(searchFS , (state : any) => state.users.items )
  export let loadingSelector = createSelector(searchFS , state => state.loading )
  export let errorSelector = createSelector(searchFS , state => state.error )