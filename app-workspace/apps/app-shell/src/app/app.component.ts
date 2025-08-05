import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// Import shared UI components
import { LayoutComponent, NavigationComponent, HeaderComponent } from '@app-workspace/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    // Add shared UI components
    LayoutComponent,
    NavigationComponent, 
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }