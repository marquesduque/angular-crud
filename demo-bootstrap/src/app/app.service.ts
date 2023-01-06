
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class appService {

  constructor(private http: HttpClient) {
  }

  cotacao(id: Date): Observable<any> {
    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2711-07-2022%27&$top=100&$format=json`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<any>(url, { headers });
  }
  endereco(cep: String): Observable<any> {
    const url = `https://api.postmon.com.br/v1/cep/03410000`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<any>(url, { headers });
  }
  frete(id: Date): Observable<any> {
    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2711-07-2022%27&$top=100&$format=json`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<any>(url, { headers });
  }
}

