import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { EMPTY } from 'rxjs';
import { Voiture } from '../model/voiture.model';
import { VoituresService } from '../voitures.service';

export const voitureResolver: ResolveFn<Voiture> = (route, state) => {
  let id=route.paramMap.get('id');
  if(id!=null){
    return inject(VoituresService).getVoiture(+id);
  }
  else{
    return EMPTY;
  }
 //empty donne vide
};
