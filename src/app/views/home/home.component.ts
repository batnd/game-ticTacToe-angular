import {Component, inject} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private router: Router = inject(Router);

  public play(): void {
    setTimeout((): void => {
      this.router.navigate(['/play']);
    }, 100)
  }
}
