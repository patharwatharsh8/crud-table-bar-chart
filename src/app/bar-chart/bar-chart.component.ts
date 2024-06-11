import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Color } from '@swimlane/ngx-charts/public-api';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  data: any[] = [];
  view: [number, number] = [700, 400];

 
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Category';
  showYAxisLabel = true;
  yAxisLabel = 'Price';
  colorScheme!: string | Color;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.products$.subscribe(products => this.updateChartData(products));
  }

  updateChartData(products: Product[]) {
    const groupedData = products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += product.price;
      return acc;
    }, {} as Record<string, number>);

    this.data = Object.keys(groupedData).map(key => ({
      name: key,
      value: groupedData[key]
    }));
  }
}

