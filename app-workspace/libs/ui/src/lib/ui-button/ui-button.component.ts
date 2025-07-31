import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css',
})
export class UiButtonComponent {
  @Input() label = "";
  @Output() clickEvent: EventEmitter<void> = new EventEmitter();

  public onClick(): void {
    this.clickEvent.emit();
  }
}
