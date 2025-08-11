import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'app-one',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201',
        exposedModule: './Routes'
      })
      .then(m => m.routes)
      .catch(err => {
        console.error('Error loading app-one:', err);
        // Redirect to dashboard if microfrontend fails to load
        return [{
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        }];
      })
  },
  {
    path: 'app-two',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202',
        exposedModule: './Routes'
      })
      .then(m => m.routes)
      .catch(err => {
        console.error('Error loading app-two:', err);
        // Redirect to dashboard if microfrontend fails to load
        return [{
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        }];
      })
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];