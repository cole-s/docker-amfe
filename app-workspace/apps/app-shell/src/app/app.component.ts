import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiButtonComponent } from '@app-workspace/ui';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, UiButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-shell';
  constructor(private router: Router) {

  }

  public navigateToPage(): void {
    console.log('clicked');
    this.router.navigate(['/app-one']);
  }

}
