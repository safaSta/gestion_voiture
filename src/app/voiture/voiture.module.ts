import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VoitureComponent } from './voiture.component';
import { VoitureItemComponent } from './voiture-list/voiture-item/voiture-item.component';
import { VoitureDetailComponent } from './voiture-detail/voiture-detail.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';
import { VoitureStartComponent } from './voiture-start/voiture-start.component';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureRoutingModule } from './voiture-routing.module';



@NgModule({
  declarations: [
    VoitureComponent,
    VoitureListComponent,
    VoitureItemComponent,
     VoitureDetailComponent,
     VoitureEditComponent,
     VoitureStartComponent
  ],
  imports: [
    SharedModule,
    VoitureRoutingModule

  ]
})
export class VoitureModule { }
