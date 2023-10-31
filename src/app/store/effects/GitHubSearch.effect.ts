
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GithubUsersService } from '../../services/github-users.service';
import { searchUsers, searchUsersFailure, searchUsersSuccess } from '../actions/githubSearch.actions';
import { catchError, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';


@Injectable()

export class githubSearchEffect{
    constructor(private actions: Actions,private service : GithubUsersService) {}

    searchUsers$ = createEffect(() =>
    this.actions.pipe(
      ofType(searchUsers),   
      switchMap((action) =>
        this.service.getUsers(action.username).pipe(
          map((data : any) => searchUsersSuccess({ users: data })),
          catchError((error) => of(searchUsersFailure({ error })))
        )
      )
    )
  );


}