import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';


@NgModule({
  imports:      [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,

    ],
  declarations: [
    SpinnerComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent,
    TranslateModule,

  ],
  providers: [
    TranslatePipe

  ]
})
export class SharedModule { }
