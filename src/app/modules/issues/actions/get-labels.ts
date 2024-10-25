import { sleep } from "@helpers/index";
import { GithubLabel } from "./interfaces/github-label.interface";

export const getLabels = async () : Promise<GithubLabel[]> => {
    try{
        await sleep(1500);
        const resp = await fetch(`https://api.github.com/repos/angular/angular/issues`)
        if(!resp.ok) throw "Cant load labels"

        const labels = await resp.json() as GithubLabel[];

        return labels;


    }catch(error){
        throw "Cant load labels"
    }
}