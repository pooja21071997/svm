import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Academics } from './pages/academics/academics';
import { Facilities } from './pages/facilities/facilities';
import { CounsellingCenter } from './pages/counselling-center/counselling-center';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'academics', component: Academics },
  { path: 'facilities', component: Facilities },
  { path: 'counselling-center', component: CounsellingCenter },

  { path: '**', redirectTo: '' },
];
