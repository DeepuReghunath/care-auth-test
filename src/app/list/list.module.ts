import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';

import { ListComponent } from './list.component';
import { listRoutes } from './list.routes';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(listRoutes),
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule
  ]
})
export class ListModule {}
