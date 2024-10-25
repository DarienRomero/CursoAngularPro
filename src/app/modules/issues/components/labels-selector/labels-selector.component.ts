import { Component, input } from '@angular/core';
import { GithubLabel } from '../../actions/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'issues-label-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  styleUrl: './labels-selector.component.css'
})
export class LabelsSelectorComponent {
  labels = input.required<GithubLabel[]>();
}
