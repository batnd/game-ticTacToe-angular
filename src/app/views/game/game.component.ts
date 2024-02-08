import {Component, ViewChild} from "@angular/core";
import {ScoresInterface} from "../../types/scores.interface";
import {BoardComponent} from "../../components/board/board.component";

@Component({
  selector: 'app-game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @ViewChild('board', {static: true})
  private boardProps: BoardComponent | null = null;
  public scores: ScoresInterface = {
    user: 0,
    computer: 0,
    draw: 0
  };
  public isPopupVisible: boolean = false;
  public gameResult: string = '';

  public endGameChangeScores(winner: string): void {
    if (winner === 'user') {
      this.scores.user = this.scores.user + 1;
      this.gameResult = 'You win!';
    }
    if (winner === 'computer') {
      this.scores.computer = this.scores.computer + 1;
      this.gameResult = 'Computer win!';
    }
    if (winner === 'draw') {
      this.scores.draw = this.scores.draw + 1;
      this.gameResult = 'Draw game!';
    }
    this.isPopupVisible = true;
  }

  public closePopupAndStartNewGame(): void {
    this.isPopupVisible = false;
    this.boardProps?.endGame();
  }
}
