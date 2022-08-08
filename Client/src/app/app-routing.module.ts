import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisaoComponent } from './components/divisao/divisao.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  { path: 'divisao', component: DivisaoComponent },
  { path: '', redirectTo: '/divisao', pathMatch: 'full' },
  { path: 'resultado', component: ResultadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
