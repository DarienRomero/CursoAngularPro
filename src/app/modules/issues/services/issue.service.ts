import { Injectable, signal } from "@angular/core";
import { injectQuery, injectQueryClient } from "@tanstack/angular-query-experimental";
import { getIssueByNumber, getIssueCommentByNumber } from "../actions";
import { GithubIssue } from "../actions/interfaces";

@Injectable({
    providedIn: 'root'
})
export class IssueService {

    private issueNumber = signal<string | null>(null)
    private queryClient = injectQueryClient();

    public issueQuery = injectQuery(()=>({
        queryKey: ["issue", this.issueNumber()],
        queryFn: () => getIssueByNumber(this.issueNumber()!),
        enabled: this.issueNumber() !== null
    }));

    
    public issueCommentsQuery = injectQuery(()=>({
        queryKey: ["issue", "comments", this.issueNumber()],
        queryFn: () => getIssueCommentByNumber(this.issueNumber()!),
        enabled: this.issueNumber() !== null
    }));
    
    setIssueNumber(issueNumber: string){
        this.issueNumber.set(issueNumber)
    }

    prefetchIssue(issueId: string){
        this.queryClient.prefetchQuery({
            queryKey: ["issue", issueId],//Tipo estricto
            queryFn: () => getIssueByNumber(issueId),
            staleTime: 1000 * 60 * 5
        });
    }

    setIssueData(issue: GithubIssue){
        this.queryClient.setQueryData(
            ["issue", issue.id.toString()],
            issue,
            {
                updatedAt: Date.now() + 1000 * 60
            }
        )
    }
}