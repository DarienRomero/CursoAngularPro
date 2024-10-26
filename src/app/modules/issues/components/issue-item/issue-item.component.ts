import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GithubIssue } from '../../actions/interfaces';
import { RouterLink } from '@angular/router';
import { State } from '../../actions/interfaces/github-issue.interface';

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

  get isOpen(){
    return this.issue().state === State.Open
  }
}
