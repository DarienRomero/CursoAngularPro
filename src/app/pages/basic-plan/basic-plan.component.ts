import { Component } from '@angular/core';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-plan',
  standalone: true,
  imports: [LanguageSelectorComponent, RouterLink, CommonModule],
  templateUrl: './basic-plan.component.html',
  styleUrl: './basic-plan.component.css'
})
export default class BasicPlanComponent {

}
