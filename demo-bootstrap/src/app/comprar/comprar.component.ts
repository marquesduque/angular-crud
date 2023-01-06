import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';
import { appService } from '../app.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class comprarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private service: appService) {
  }
  ngOnInit() {

  }
  continuar() {
    if (this.entity.nome == '') {
      this.alert("Oops", "O campo nome é obrigatório");
    }
    else if (this.entity.cep == '') {
      this.alert("Oops", "O campo cep é obrigatório");
    }
    else {
      this.service.endereco(this.entity.cep)
        .subscribe(ent => {
          this.entity.endereco = ent.logradouro + ' - '+ent.cidade +'/'+ent.estado
        },
          err => {
            alert('Oops ocorreu um erro')
          }
        );
    }
  }
  alert(titulo: string, descricao: string) {
    swal.fire({
      title: titulo,
      text: descricao,
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-primary"
      }
    });
  }

  public entity = {
    cep: '',
    nome: '',
    endereco: ''
  }
}
