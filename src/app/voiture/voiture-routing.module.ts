import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VoitureComponent } from './voiture.component';
import { VoitureStartComponent } from './voiture-start/voiture-start.component';
import { VoitureDetailComponent } from './voiture-detail/voiture-detail.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';
import { voitureResolver } from './voiture.resolver';


const VoitureRoutes: Routes =[
{
  path:'voiture',
  component:VoitureComponent,
  children:[
    {path:'',component:VoitureStartComponent},
    {path:'new',component:VoitureEditComponent},
    {
      path:':id',
      component:VoitureDetailComponent,
      resolve : voitureResolver
    },
    {
      path:'/edit/:id',
      component:VoitureEditComponent,
      resolve : voitureResolver
    },
  ]
},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(VoitureRoutes)
  ],
  exports: [
    [RouterModule]
  ]
})
export class VoitureRoutingModule { }
