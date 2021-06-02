import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Root routes
 */
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    /**
     * Lazy loads HomeModule
     */
    loadChildren: async () => {
      const modulo = await import('./home/home.module');
      return modulo.HomeModule;
    },
  },
  {
    path: 'animais',
    /**
     * Lazy loads AnimaisModule
     */
    loadChildren: async () => {
      const modulo = await import('./animais/animais.module');
      return modulo.AnimaisModule;
    },
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
