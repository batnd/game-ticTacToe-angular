import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-cell-component',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input('cell')
  public cellProps: {cell: string, value: string} | null = null;
  @Output()
  public cellClickEvent: EventEmitter<string> = new EventEmitter<string>();

  public cellClick(): void {
    if (!this.cellProps?.value) {
      this.cellClickEvent.emit('x');
    }
  }
}
