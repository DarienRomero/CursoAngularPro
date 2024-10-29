import { environment } from "src/environments/environment.development";
import { GithubIssue } from "./interfaces";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssueCommentByNumber = async (issueNumber: string) : Promise<GithubIssue[]> => {
    try{
        const resp = await fetch(
            `${BASE_URL}/issues/${issueNumber}/comments`,
            {
                headers: {
                    // Authorization: `Bearer ${GITHUB_TOKEN}`
                }
            }
        )
        if(!resp.ok) throw "Cant load issue"

        const comments = await resp.json() as GithubIssue[];

        return comments;


    }catch(error){
        throw "Cant load issue comments"
    }
}