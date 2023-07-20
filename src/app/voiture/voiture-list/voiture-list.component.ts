import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/model/voiture.model';
import { VoituresService } from 'src/app/voitures.service';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {
  voitures? :Voiture[]
  constructor (private voitureServices : VoituresService){}
  ngOnInit(): void {
    this.voitureServices.getVoitures().subscribe(v => {
      this.voitures=v;
    })
  }
  

}
