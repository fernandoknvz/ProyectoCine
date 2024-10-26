import { Component, OnInit } from '@angular/core';
import { CarteleraCineApiService } from '../service/cartelera-cine-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  arrayPeliculas: any;
  constructor( private CarteleraCine: CarteleraCineApiService) {}

  ngOnInit(): void {
    this.CarteleraCine.obtenerCarteleraCine().subscribe({
      next:(Response)=> {
        console.log(Response)
        this.arrayPeliculas = Response;
      },
      error:(err)=> {
        console.log(err)
      },
    })
  }
}
