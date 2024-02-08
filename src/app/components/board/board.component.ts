import {Component, EventEmitter, inject, Output} from "@angular/core";
import {CellInterface} from "../../types/cell.interface";
import {GameProcessService} from "../../services/gameProcess.service";
import {AvailableCellInterface} from "../../types/availableCell.interface";

@Component({
  selector: 'app-board-component',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  private gameProcessService: GameProcessService = inject(GameProcessService);
  public board: CellInterface[][] = [
    [{cell: 't-l', value: ''}, {cell: 't-c', value: ''}, {cell: 't-r', value: ''}],
    [{cell: 'm-l', value: ''}, {cell: 'm-c', value: ''}, {cell: 'm-r', value: ''}],
    [{cell: 'b-l', value: ''}, {cell: 'b-c', value: ''}, {cell: 'b-r', value: ''}]
  ];
  @Output()
  public endGameEvent: EventEmitter<string> = new EventEmitter<string>();
  public locked: boolean = false;

  public cellClickHandler(valueFromCall: string, rowIndex: number, cellIndex: number): void {
    if (this.locked) return;

    this.board[rowIndex][cellIndex].value = valueFromCall;

    if (this.gameProcessService.checkPlayerWin(this.board, 'x')) {
      this.endGameEvent.emit('user');
    } else {
      this.botMove();
    }
  }

  public botMove(): void {
    this.locked = true;
    setTimeout((): void => {
      const botMoving: AvailableCellInterface | null = this.gameProcessService.botMoving(this.board);
      if (botMoving) {
        this.board[botMoving.i][botMoving.j].value = 'o';

        if (this.gameProcessService.checkPlayerWin(this.board, 'o')) {
          this.endGameEvent.emit('computer');
        }
      } else {
        this.endGameEvent.emit('draw');
      }
      this.locked = false;
    }, 300);
  }

  public endGame(): void {
    setTimeout((): void => {
      this.board = [
        [{cell: 't-l', value: ''}, {cell: 't-c', value: ''}, {cell: 't-r', value: ''}],
        [{cell: 'm-l', value: ''}, {cell: 'm-c', value: ''}, {cell: 'm-r', value: ''}],
        [{cell: 'b-l', value: ''}, {cell: 'b-c', value: ''}, {cell: 'b-r', value: ''}]
      ];
    }, 300);
  };
}
