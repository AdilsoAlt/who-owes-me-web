import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-detalhes',
  templateUrl: './modal-detalhes.component.html',
  styleUrls: ['./modal-detalhes.component.css']
})
export class ModalDetalhesComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Input() divida: any;
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.onClose.emit(null);
  }

}
