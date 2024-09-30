import { TestBed } from "@angular/core/testing"
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {
    let service: CalculatorService
    
    beforeEach(()=>{
        TestBed.configureTestingModule({})
        service = TestBed.inject(CalculatorService)
    });

    beforeAll(()=>{

    })

    afterEach(()=>{
        
    })

    afterAll(()=>{
        
    })

    it('should be created', ()=>{
        expect(service).toBeTruthy()
    })

    it('should be created with default values', ()=>{
       expect(service.resultText()).toBe("0")
       expect(service.subResultText()).toBe("0")
       expect(service.lastOperator()).toBe("+")
    })

    it('should set resultText, subresultText to "0" when C is pressed', () => {
        service.resultText.set('123')
        service.subResultText.set('123')
        service.lastOperator.set('*')
        service.constructorNumber("C")

        expect(service.resultText()).toBe("0")
        expect(service.subResultText()).toBe("0")
        expect(service.lastOperator()).toBe("+")
    })

    it('sould update resultText with number input', () => {
        service.constructorNumber('1')
        expect(service.resultText()).toBe("1")

        service.constructorNumber('2')
        expect(service.resultText()).toBe("12")
    })

    it('should handle operator correctly', () => {
        service.constructorNumber('1')
        service.constructorNumber('+')

        expect(service.lastOperator()).toBe('+')
        expect(service.subResultText()).toBe('1')
        expect(service.resultText()).toBe('0')
    })

    it('should calculate result correctly for addition', () => {
        service.constructorNumber('1')
        service.constructorNumber('+')
        service.constructorNumber('2')
        service.constructorNumber('=')

        expect(service.resultText()).toBe('3')
    })

    it('should calculate result correctly for substraction', () => {
        service.constructorNumber('5')
        service.constructorNumber('-')
        service.constructorNumber('2')
        service.constructorNumber('=')

        expect(service.resultText()).toBe('3')
    })

    it('should calculate result correctly for division', () => {
        service.constructorNumber('1')
        service.constructorNumber('0')
        service.constructorNumber('/')
        service.constructorNumber('2')
        service.constructorNumber('=')

        expect(service.resultText()).toBe('5')
    })

    it('should calculate result correctly for multiplication', () => {
        service.constructorNumber('6')
        service.constructorNumber('*')
        service.constructorNumber('3')
        service.constructorNumber('=')

        expect(service.resultText()).toBe('18')
    })

    it('should handle decimal point correctly', () => {
        service.constructorNumber('1')
        service.constructorNumber('.')
        service.constructorNumber('5')

        expect(service.resultText()).toBe('1.5')
        service.constructorNumber('.')
        expect(service.resultText()).toBe('1.5')
    })

    it('should handle decimal point correctly starting with zero', () => {
        service.constructorNumber('0')
        service.constructorNumber('0')
        service.constructorNumber('0')
        service.constructorNumber('.')
        service.constructorNumber('0')

        expect(service.resultText()).toBe('0.0')
    })

    it('should handle sign change correctly', () => {
        service.constructorNumber('1')
        service.constructorNumber('+/-')
        
        expect(service.resultText()).toBe('-1')
        service.constructorNumber('+/-')
        expect(service.resultText()).toBe('1')
    })

    it('should handle backspace correctly', () => {
        service.resultText.set('123')
        service.constructorNumber('Backspace')
        expect(service.resultText()).toBe('12')
        service.constructorNumber('Backspace')
        expect(service.resultText()).toBe('1')
        service.constructorNumber('Backspace')
        expect(service.resultText()).toBe('0')
        service.constructorNumber('Backspace')
        expect(service.resultText()).toBe('0')
        service.constructorNumber('-')
        service.constructorNumber('1')
        service.constructorNumber('Backspace')
        expect(service.resultText()).toBe('0')
    })

    it('should handle backspace from negative correctly', () => {
        service.constructorNumber('1')
        service.constructorNumber('+/-')
        expect(service.resultText()).toBe('-1')
        service.constructorNumber('Backspace')
        expect(service.resultText()).toBe('0')
    })

    it('should handle number from negative correctly', () => {
        service.constructorNumber('+/-')
        expect(service.resultText()).toBe('-0')
        service.constructorNumber('1')
        expect(service.resultText()).toBe('-1')
    })

    it('should handle max length correctly', () => {
        for(let i = 0; i < 10; i++){
            service.constructorNumber('1')
        }
        expect(service.resultText().length).toBe(10)
        service.constructorNumber('1')
        expect(service.resultText().length).toBe(10)
    })

    it('should handle invalid input', () => {
        service.constructorNumber('?')
        expect(service.resultText()).toBe('0')
    })
})