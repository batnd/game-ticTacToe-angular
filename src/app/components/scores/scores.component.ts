import {Component, Input} from "@angular/core";
import {ScoresInterface} from "../../types/scores.interface";

@Component({
  selector: 'app-scores-component',
  templateUrl: './scores.component.html',
  styleUrls: ['scores.component.scss']
})
export class ScoresComponent {
  @Input('scores')
  public scoresProps:ScoresInterface | null  = null;
}
