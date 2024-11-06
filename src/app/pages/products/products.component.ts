import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule, LanguageSelectorComponent, TranslateModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent {

  fullName = signal("Darien")

}
