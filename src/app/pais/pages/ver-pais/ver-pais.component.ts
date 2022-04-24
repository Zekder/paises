import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

   pais!: Country;

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
     ) {}

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ( { id } ) => this.paisService.getPaisPorCodigo( id ) ), //el switch map se suscribe a un observable y al recibirlo te manda otro observable en este caso el param['id']
        tap() // el tap realiza una accion secundaria 
      )
      .subscribe( pais => {
        this.pais = pais ; 
        console.log(this.pais);
        
      });

    // this.activateRoute.params
    // .subscribe( params => {
    //   console.log(params['id']);

    //   this.paisService.getPaisPorCodigo( params['id'] )
    //   .subscribe( pais => {
    //     console.log(pais);
    //     this.pais=pais;
    //   });

    // });

  }

}
