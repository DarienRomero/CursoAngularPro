import { environment } from "src/environments/environment.development";
import { GithubIssue } from "./interfaces";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssueByNumber = async (issueNumber: string) : Promise<GithubIssue> => {
    try{
        const resp = await fetch(
            `${BASE_URL}/issues/${issueNumber}`,
            {
                headers: {
                    // Authorization: `Bearer ${GITHUB_TOKEN}`
                }
            }
        )
        if(!resp.ok) throw "Cant load issue"

        const labels = await resp.json() as GithubIssue;

        return labels;


    }catch(error){
        throw `Cant load issue ${issueNumber}`
    }
}