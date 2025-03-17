import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  times = [
    { pos: 1, nome: "Sport", pts: 12, jogos: 5, vitorias: 4, empates: 0, derrotas: 1, golsPro: 8, golsContra: 3, saldo: 5 },
    { pos: 2, nome: "Fortaleza", pts: 10, jogos: 5, vitorias: 3, empates: 1, derrotas: 1, golsPro: 7, golsContra: 4, saldo: 3 },
    { pos: 3, nome: "Bahia", pts: 8, jogos: 5, vitorias: 2, empates: 2, derrotas: 1, golsPro: 6, golsContra: 5, saldo: 1 },
    { pos: 4, nome: "Ceará", pts: 5, jogos: 5, vitorias: 1, empates: 2, derrotas: 2, golsPro: 5, golsContra: 7, saldo: -2 },
    { pos: 5, nome: "Vitória", pts: 4, jogos: 5, vitorias: 1, empates: 1, derrotas: 3, golsPro: 4, golsContra: 6, saldo: -2 },
  ];
}
