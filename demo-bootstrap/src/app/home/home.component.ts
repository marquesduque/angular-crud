import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { comprarComponent } from '../comprar/comprar.component';
import { appService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: appService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.service.cotacao(new Date())
      .subscribe(ent => {
        this.entity.cotacao = ent.value[0].cotacaoCompra;
        this.calcular('real');
      },
        err => {
          alert('Oops ocorreu um erro')
        }
      );
  }
  calcular(tipo: String) {
    if (tipo == 'dolar') {
      this.entity.real = this.entity.dolar / this.entity.cotacao;
    }
    else {
      this.entity.dolar = this.entity.real * this.entity.cotacao;
    }
  }
  comprar() {
    this.dialog.open(comprarComponent);
  }

  public entity = {
    real: 1,
    dolar: 1,
    cotacao: 0
  }

}
