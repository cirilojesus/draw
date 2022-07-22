import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthLayoutRoutes } from './auth-layout.routing';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    HttpClientModule
  ],
  declarations: [
  ],
  providers:[]
})

export class AuthLayoutModule {}
