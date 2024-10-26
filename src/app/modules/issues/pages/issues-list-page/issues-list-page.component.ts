import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssueItemComponent } from "../../components/issue-item/issue-item.component";
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-issues-list-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LabelsSelectorComponent,
    IssueItemComponent
],
  templateUrl: './issues-list-page.component.html',
})
export default class IssuesListPageComponent { 
  issuesService = inject(IssuesService)

  get labelsQuery(){
    return this.issuesService.labelsQuery
  }
  get issuesQuery(){
    return this.issuesService.issuesQuery
  }
}
