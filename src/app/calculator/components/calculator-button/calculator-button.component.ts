import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, input, OnInit, output, Output, signal, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "border-r border-b border-indigo-400",
    '[class.w-2/4]' : 'isDoubleSize()',
    '[class.w-1/4]' : '!isDoubleSize()'
  },
  //Quiero que los estilos sean globales
  //encapsulation: ViewEncapsulation.None
})
export class CalculatorButtonComponent {

  public isPressed = signal(false);

  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');
  
  public onClick = output<string>();
  
  public isCommand = input(false , {
    //Se ejecuta antes de su asignación
    transform: (value: boolean | string) =>
      typeof value === "string" ? value === "" : value
  });

  public isDoubleSize = input(false , {
    //Se ejecuta antes de su asignación
    transform: (value: boolean | string) =>
      typeof value === "string" ? value === "" : value
  });

  /* @HostBinding('class.is-command') get commandStyle(){
    return this.isCommand()
  } */

  /* @HostBinding('class.w-2/4') get commandStyle(){
    return this.isDoubleSize()
  } */

  handleClick(){
    console.log("Handle click")
    if(!this.contentValue()?.nativeElement){
      return
    }
    const value = this.contentValue()?.nativeElement.innerText!;
    console.log()
    this.onClick.emit(value.trim())
  }

  public keyboardPressedStyle(key: string){
    if(!this.contentValue()) return;
    const value = this.contentValue()?.nativeElement.innerText;
    if(value !== key) return;
    this.isPressed.set(true);
    setTimeout(() => {
      this.isPressed.set(false);
    }, 100);
  }


}
