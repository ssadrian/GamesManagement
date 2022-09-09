import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IGame} from "./IGame";
import {catchError, map, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private developersUrl: string = "assets/api/developers.json";
  private gamesUrl: string = "assets/api/games.json";
  private publishersUrl: string = "assets/api/publishers.json";
  private reviewsUrl: string = "assets/api/reviews.json";
  private tagsUrl: string = "assets/api/tags.json";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IGame[]> {
    return this.httpClient
      .get<IGame[]>(this.gamesUrl)
      .pipe(
        tap(data => console.log("All: " + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getGame(id: number): Observable<IGame | undefined> {
    return this.getAll().pipe(
      map((games: IGame[]) => games.find((game: IGame) => game.id === id))
    );
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    let errorMsg: string =
      err.error instanceof ErrorEvent
        ? `An error occurred: ${err.error.message}`
        : `An unknown error occurred: ${err.statusText} with status ${err.status}`;

    console.error(errorMsg);
    return throwError(() => new Error(errorMsg));
  }
}
