import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { GithubIssue } from '../../actions/interfaces';
import { RouterLink } from '@angular/router';
import { State } from '../../actions/interfaces/github-issue.interface';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'issue-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.css'
})
export class IssueItemComponent {
  issue = input.required<GithubIssue>()
  issueService = inject(IssueService);

  get isOpen(){
    return this.issue().state === State.Open
  }

  prefetchData(){
    this.issueService.setIssueData(this.issue())
    // this.issueService.prefetchIssue(this.issue().number.toString())
  }
}
