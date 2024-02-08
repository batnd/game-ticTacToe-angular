import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Input('result')
  public resultProps: string = 'You won!';
  @Output()
  public closedPopupEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
}
