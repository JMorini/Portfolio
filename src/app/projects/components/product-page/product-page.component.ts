import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  displayNav: boolean

  constructor() {}

  ngOnInit(): void {}

  showNav() {
    this.displayNav = !this.displayNav
  }
}
