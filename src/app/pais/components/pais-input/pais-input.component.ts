import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [

  ]
})
export class PaisInputComponent  implements OnInit {
  

  @Output() onEnter:    EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  @Input() placeholder: string = '';

  termino: string = '';

  debouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor=> {
      console.log('debounce', valor);
      this.onDebounce.emit( valor );
    })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada( event: any ) {
    // const valor = event.target.value;
    // console.log(valor);

    // console.log(this.termino);
    this.debouncer.next(this.termino);

  }

}