import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { gitHubSearchReducer } from "./reducers/githubSearch.reducer";

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

  export const reducers : ActionReducerMap<any> = {usersStore : gitHubSearchReducer}

  let searchFS = createFeatureSelector<GitHubSearchState>('usersStore')
  export let userSelector = createSelector(searchFS , (state : any) => state.users.items )
  export let loadingSelector = createSelector(searchFS , state => state.loading )
  export let errorSelector = createSelector(searchFS , state => state.error )