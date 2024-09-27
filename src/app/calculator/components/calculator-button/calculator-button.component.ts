import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, input, OnInit, ViewEncapsulation } from '@angular/core';

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
    class: "w-1/4 border-r border-b border-indigo-400"
  },
  //Quiero que los estilos sean globales
  //encapsulation: ViewEncapsulation.None
})
export class CalculatorButtonComponent{
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

    @HostBinding('class.w-2/4') get commandStyle(){
    return this.isDoubleSize()
  }


}
