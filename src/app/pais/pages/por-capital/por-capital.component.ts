import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Country, Name } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {


  
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
    
  constructor( private PaisService: PaisService ) { }
 
   buscar( terminO: string) {
    this.termino = terminO;
    // this.PaisService.buscarPais( this.termino )
    // .subscribe( (resp)=> {
    //   console.log(resp);
    // }, (err) => {
    //   console.log('Error');
    //   console.info(err);
    // });
    
    const observable=this.PaisService.buscarCapital( this.termino );
    from(observable).subscribe({
      next: (resp)=> {
        console.log('next', resp);
        this.hayError=false;
        this.paises=resp;                  
      },
      error: (err)=> {
        console.error('Error', err);
        this.hayError=true;
        this.paises=[];
      },
      complete: ()=> console.info('complete')
    });
    
  }

  sugerencias( termino: string ){
    this.hayError = false;
    // TODO: crear sugerencias
  }

}
