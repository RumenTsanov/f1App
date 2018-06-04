import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DriversComponent } from './drivers/drivers.component';
import { ConstructorsComponent } from './constructors/constructors.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { HttpClientModule } from '@angular/common/http';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
  { path: 'drivers', component: DriversComponent },
  { path: 'constructors', component: ConstructorsComponent },
  { path: 'circuits', component: CircuitsComponent },
  { path: 'driver/:id', component: DriverComponent},
  { path: '',
    redirectTo: '/drivers',
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    ConstructorsComponent,
    CircuitsComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
