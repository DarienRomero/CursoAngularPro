import { sleep } from "@helpers/index";
import { GithubLabel } from "./interfaces/github-label.interface";
import { environment } from "src/environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getLabels = async () : Promise<GithubLabel[]> => {
    try{
        await sleep(1500);
        const resp = await fetch(
            `${environment.baseUrl}/labels`,
            {
                headers: {
                    // Authorization: `Bearer ${GITHUB_TOKEN}`
                }
            }
        )
        if(!resp.ok) throw "Cant load labels"

        const labels = await resp.json() as GithubLabel[];

        return labels;


    }catch(error){
        throw "Cant load labels"
    }
}