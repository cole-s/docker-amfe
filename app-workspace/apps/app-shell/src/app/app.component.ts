import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// Import your UI library components
import { HeaderComponent, NavigationComponent, LayoutComponent } from '@app-workspace/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    // Add your UI library components here
    HeaderComponent,
    NavigationComponent, 
    LayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }