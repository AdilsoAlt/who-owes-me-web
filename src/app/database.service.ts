import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('listaTarefas').snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ 
        key: c.payload.key,
        dados: c.payload.val()
      }));
    })
    )
  }

  updateRecebido(key: string, divida:any) {
    this.db.list('listaTarefas').update(key, divida)
      .catch((error: any) => {
        console.error(error);
      });
  }

  updateExcluir(key: string, divida:any) {
    this.db.list('listaTarefas').update(key, divida)
      .catch((error: any) => {
        console.error(error);
      });
  }


}

