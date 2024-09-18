import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { DisplayhelloworldComponent } from "./components/displayhelloworld/displayhelloworld.component";
import { DisplaynameComponent } from "./components/displayname/displayname.component";
import { PrimeNumberCheckerComponent } from "./components/prime-number-checker/prime-number-checker.component";
import { ShowhellobuttonComponent } from "./components/showhellobutton/showhellobutton.component";
import { SortNumbersComponent } from "./components/sort-numbers/sort-numbers.component";
import { UserageComponent } from "./components/userage/userage.component";
import { UsergreetingComponent } from "./components/usergreeting/usergreeting.component";




const routes: Routes = [
  //{path: '', component: AppComponent},
  {path: 'displayhelloworld', component: DisplayhelloworldComponent},
  {path: 'displayname', component: DisplaynameComponent},
  {path: 'prime-number-checker', component: PrimeNumberCheckerComponent},
  {path: 'showhellobutton', component: ShowhellobuttonComponent},
  {path: 'sort-numbers', component: SortNumbersComponent},
  {path: 'userage', component: UserageComponent},
  {path: 'usergreeting', component: UsergreetingComponent},

]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    DisplaynameComponent,
    PrimeNumberCheckerComponent,
    ShowhellobuttonComponent,
    SortNumbersComponent,
    UserageComponent,
    UsergreetingComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent]
})

export class AppModule {}