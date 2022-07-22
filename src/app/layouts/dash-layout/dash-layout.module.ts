import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashLayoutRoutes } from './dash-layout.routing';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashLayoutRoutes),
    HttpClientModule
  ],
  declarations: [
  ],
  providers:[]
})

export class DashLayoutModule {}
