import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resultado } from 'src/app/models/resultado.model';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  resultado: Resultado;

  constructor(private router: Router) {
    this.resultado = this.router.getCurrentNavigation()?.extras.state as Resultado;
    if(this.resultado == undefined) {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
  }

  voltar(): void {
    this.router.navigate(['/divisao']);
  }
}
