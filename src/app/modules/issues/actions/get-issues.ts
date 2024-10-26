import { sleep } from "@helpers/index";
import { environment } from "src/environments/environment.development";
import { GithubIssue } from "./interfaces";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssues = async () : Promise<GithubIssue[]> => {
    try{
        await sleep(1500);
        const resp = await fetch(
            `${environment.baseUrl}/issues`,
            {
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`
                }
            }
        )
        if(!resp.ok) throw "Cant load issues"

        const labels = await resp.json() as GithubIssue[];

        return labels;


    }catch(error){
        throw "Cant load labels"
    }
}