import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, HostListener, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { fromEvent, map, Subscription } from 'rxjs';
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CalculatorButtonComponent
  ],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
  /* styles: `
    .is-command {
      @apply bg-indigo-700 bg-opacity-20
    }
  ` */
})
export class CalculatorComponent {
  
  private calculatorService = inject(CalculatorService)

  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  public resultText = computed(() => this.calculatorService.resultText());
  public subResultText = computed(() => this.calculatorService.subResultText());
  public lastOperator = computed(() => this.calculatorService.lastOperator());

  private subs?: Subscription; 

  ngOnInit(){
    //this.handleKeyboardEvent()
  }

  ngOnDestroy(){
    this.subs?.unsubscribe();
  }

  handleClick(key: string){
    console.log('key', key)
    this.calculatorService.constructorNumber(key)
  }

  handleKeyboardEvent(event: KeyboardEvent){
    const key = event.key;
    console.log('key', key)
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      '*': 'x',
      '/': '÷',
      'Enter': '='
    }
    const keyValue = keyEquivalents[key] ?? key;
    this.handleClick(keyValue)
    this.calculatorButtons().forEach(button => {
      button.keyboardPressedStyle(keyValue);
    })
    
  }

  /* @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    this.handleClick(event.key)
    const keyboardObs$ = fromEvent<KeyboardEvent>(document, 'keyup');
    this.subs = keyboardObs$
    .pipe(
      map(event => event.key)
    )
      .subscribe(key => console.log('key', key))
  
  } */
}
