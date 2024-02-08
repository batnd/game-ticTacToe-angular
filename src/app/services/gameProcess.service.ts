import {Injectable} from "@angular/core";
import {CellInterface} from "../types/cell.interface";
import {AvailableCellInterface} from "../types/availableCell.interface";

@Injectable(
  {providedIn: 'root'}
)
export class GameProcessService {
  public botMoving(board: CellInterface[][]): AvailableCellInterface | null {
    const availableCells: AvailableCellInterface[] | [] = this.checkAvailableCells(board);
    if (availableCells.length > 0) {
      const botMoveNumber: number = this.getRandomMove(availableCells.length - 1);

      return {
        i: availableCells[botMoveNumber].i,
        j: availableCells[botMoveNumber].j
      }
    }
    return null;
  };

  private checkAvailableCells(board: CellInterface[][]): AvailableCellInterface[] | [] {
    let cells: AvailableCellInterface[] = [];
    for (let i: number = 0; i < board.length; i++) {
      for (let j: number = 0; j < board[i].length; j++) {
        if (board[i][j].value === '') {
          cells.push({i, j});
        }
      }
    }
    return cells;
  };

  private getRandomMove(max: number): number {
    return Math.floor(Math.random() * max);
  }

  public checkPlayerWin(board: CellInterface[][], sign: string): boolean {
    for (let i: number = 0; i < 3; i++) {
      if ((board[0][i].value === sign) && (board[1][i].value === sign) && (board[2][i].value === sign)) {
        return true;
      }
    }

    for (let i: number = 0; i < 3; i++) {
      if ((board[i][0].value === sign) && (board[i][1].value === sign) && (board[i][2].value === sign)) {
        return true;
      }
    }

    if ((board[0][0].value === sign) && (board[1][1].value === sign) && (board[2][2].value === sign)) {
      return true;
    }
    if ((board[2][0].value === sign) && (board[1][1].value === sign) && (board[0][2].value === sign)) {
      return true;
    }

    return false;
  }
}
