import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  historias: any =[0, 1, 2, 3]

}
