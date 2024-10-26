import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GithubIssue } from '../../actions/interfaces';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'issue-comment',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './issue-comment.component.html',
  styleUrl: './issue-comment.component.css'
})
export class IssueCommentComponent {
  issue = input.required<GithubIssue>();
}
