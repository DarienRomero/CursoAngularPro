import { sleep } from "@helpers/index";
import { environment } from "src/environments/environment.development";
import { GithubIssue } from "./interfaces";
import { State } from "./interfaces/github-issue.interface";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssues = async (
    state: State = State.All,
    selectedLabels: string[]
) : Promise<GithubIssue[]> => {
    try{
        await sleep(1500);
        const params = new URLSearchParams();
        params.append('state', state)
        if(selectedLabels.length > 0){
            params.append('labels', selectedLabels.join(','))
        }
        const resp = await fetch(
            `${environment.baseUrl}/issues?${params}`,
            {
                headers: {
                    // Authorization: `Bearer ${GITHUB_TOKEN}`
                },
            }
        )
        if(!resp.ok) throw "Cant load issues"

        const labels = await resp.json() as GithubIssue[];

        return labels;


    }catch(error){
        throw "Cant load labels"
    }
}