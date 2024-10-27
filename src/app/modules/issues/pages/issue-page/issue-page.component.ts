import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {toSignal} from "@angular/core/rxjs-interop";
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueCommentComponent } from "../../components/issue-comment/issue-comment.component";
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-issue-page',
  standalone: true,
  imports: [
    CommonModule,
    IssueCommentComponent,
    MarkdownModule
],
  templateUrl: './issue-page.component.html',
})
export default class IssuePageComponent { 
  route = inject(ActivatedRoute)
  issueService = inject(IssueService)

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map(params => params.get('number') ?? ''),
      tap((number) => this.issueService.setIssueNumber(number))
    )
  )

  issueQuery = this.issueService.issueQuery;
  issueCommentsQuery = this.issueService.issueCommentsQuery;



}
