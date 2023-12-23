import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.scss']
})
export class SalesPageComponent implements OnInit {

  productsWithDiscount: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(data => {
      // Фільтруємо продукти, залишаючи тільки ті, що мають знижку.
      this.productsWithDiscount = data.filter(product => product.discount > 0);
    });
  }

}


