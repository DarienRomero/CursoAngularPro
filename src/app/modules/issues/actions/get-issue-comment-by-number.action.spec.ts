import { environment } from "src/environments/environment.development";
import { getIssueCommentByNumber } from "./get-issue-comment-by-number.action";

const BASE_URL = environment.baseUrl;
const issueNumber = '123'
const mockComments : any = [
    {
        id: 1,
        body: 'First comment',
        user: {login: 'user1'}
    },
    {
        id: 2,
        body: 'Second comment',
        user: {login: 'user2'}
    },
]

describe('getIssueComments', ()=>{
    it('should fetch issue comments successfully', async ()=>{
        const requestURL = `${BASE_URL}/issues/${issueNumber}/comments`;
        const issueResponse = new Response(JSON.stringify(mockComments),
        {
            status: 200,
            statusText: 'OK'
        });

        spyOn(window, 'fetch').and.resolveTo(issueResponse)

        const issue = await getIssueCommentByNumber(issueNumber)

        expect(window.fetch).toHaveBeenCalledWith(requestURL, {
            headers: {
                // Authorization: `Bearer ${GITHUB_TOKEN}`
            }
        });
    })
    it('should throw and error if the response is not ok', async ()=>{
        const requestURL = `${BASE_URL}/issues/${issueNumber}/comments`;
        const issueResponse = new Response(null,
        {
            status: 404,
            statusText: 'Not Found'
        });

        spyOn(window, 'fetch').and.resolveTo(issueResponse)

        try{
            const issue = await getIssueCommentByNumber(issueNumber)
            expect(true).toBeFalse();
        }catch(error){
            expect(error).toBe(`Cant load issue comments`)
        }
    })
})