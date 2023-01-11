import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  salePersonList: SalesPerson[] = [
    new SalesPerson('raouf', 'tchekioun', 'raouf@gmail.com', 1111),
    new SalesPerson('djaafar', 'tchekioun', 'djaafar@gmail.com', 2222),
    new SalesPerson('yasser', 'tchekioun', 'yasser@gmail.com', 2222),
    new SalesPerson('another', 'tchekioun', 'another@gmail.com', 2222),
  ];

  constructor() {}
  ngOnInit(): void {}
}
