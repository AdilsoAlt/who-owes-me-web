import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from '../database.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  isDetailsModalVisible= false;
  dividas: Observable<any[]>;
  dividaMostar:any;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.dividas = this.database.getAll();
  }

  showDetalheModal(divida: any){
    this.isDetailsModalVisible = true;
    this.dividaMostar = divida;
  }

  refresh(){
    this.ngOnInit();
  }

  recebimentoDaDivida(key:string, divida:any){
    divida.status = 2;
    this.database.updateRecebido(key, divida);
    alert('Dívida recebida com sucesso!');
    this.refresh()
  }

  cancelamentoDaDivida(key:string, divida:any){
    divida.status = 0;
    this.database.updateRecebido(key, divida);
    alert('Dívida excluída com sucesso!');
    this.refresh()
  }

}
