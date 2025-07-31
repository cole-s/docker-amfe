import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiLabelComponent } from '@app-workspace/ui';

@Component({
  standalone: true,
  imports: [RouterModule, UiLabelComponent],
  selector: 'app-one-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-one';
}
