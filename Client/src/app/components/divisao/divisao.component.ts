import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Divisao } from 'src/app/models/divisao.model';
import { DivisaoService } from 'src/app/services/divisao.service';

@Component({
  selector: 'app-divisao',
  templateUrl: './divisao.component.html',
  styleUrls: ['./divisao.component.css']
})
export class DivisaoComponent implements OnInit {

  divisaoForm = this.formBuilder.group({
    dividendo: [undefined, [Validators.required]],
    divisor: [undefined, [Validators.required, this.divisorZeroValidator]]
  })

  constructor(
    private divisaoService: DivisaoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get dividendo() { return this.divisaoForm.controls.dividendo; }
  get divisor() { return this.divisaoForm.controls.divisor; }

  calcular(): void {
    if(this.divisaoForm.valid) {
      let divisao: Divisao = this.divisaoForm.value as Divisao;
      // this.divisaoService.getDivisao(divisao).subscribe({
      this.divisaoService.postDivisao(divisao).subscribe({
        next: (v) => {
          this.divisaoForm.reset();
          this.router.navigate(['/resultado'], { state: v });
        },
        error: (e) => {
          this.divisaoForm.reset();
          this.router.navigate(['/resultado'], { state: e.error });
        }
      });
    }
  }

  divisorZeroValidator(control: FormControl): ValidationErrors | null {
    const value: number = control.value;
    return (value == 0) ? { zero: true } : null;
  }
}
