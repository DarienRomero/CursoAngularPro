import { Component, inject, input } from '@angular/core';
import { GithubLabel } from '../../actions/interfaces';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'issues-label-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  styleUrl: './labels-selector.component.css'
})
export class LabelsSelectorComponent {
  labels = input.required<GithubLabel[]>();
  issuesService = inject(IssuesService)

  isSelected(labelName: string){
    return this.issuesService.selectedLabels().has(labelName);
  }

  onToggleLabel(label: string){
    this.issuesService.toggleLabel(label)
  }
}
