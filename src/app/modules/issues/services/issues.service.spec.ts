import { provideAngularQuery, QueryClient } from "@tanstack/angular-query-experimental"
import { IssuesService } from "./issues.service"
import {TestBed} from "@angular/core/testing"

describe("IssuesService", ()=>{
    let service: IssuesService
    const queryClient = new QueryClient()

    beforeEach(()=>{
        TestBed.configureTestingModule({
            teardown: {
                destroyAfterEach: false
            },
            providers: [
                provideAngularQuery(queryClient)
            ]
        });
        service = TestBed.inject(IssuesService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})