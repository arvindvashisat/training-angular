import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule

  ],
  providers: [

  ]
})
export class PostModule { }
