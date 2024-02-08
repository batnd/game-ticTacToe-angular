import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./views/home/home.component";
import {GameComponent} from "./views/game/game.component";
import {BoardComponent} from "./components/board/board.component";
import {CellComponent} from "./components/cell/cell.component";
import {ScoresComponent} from "./components/scores/scores.component";
import {PopupComponent} from "./components/popup/popup.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    BoardComponent,
    CellComponent,
    ScoresComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
