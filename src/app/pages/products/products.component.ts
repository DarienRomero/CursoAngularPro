import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule, LanguageSelectorComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent {

}
