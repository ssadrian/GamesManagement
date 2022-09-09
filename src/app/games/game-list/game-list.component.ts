import {Component, OnInit} from '@angular/core';
import {GameService} from "../game.service";
import {Subscription} from "rxjs";
import {IGame} from "../IGame";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  getAllSub: Subscription = this.gameService.getAll().subscribe();
  games: IGame[] = [];

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.getAllSub = this.gameService.getAll().subscribe(games => {
      this.games = games;
    });
  }
}
