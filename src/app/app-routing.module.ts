import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HomeComponent } from './components/home/home.component';
import { HowToComponent } from './components/how-to/how-to.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tasks', component: TaskListComponent},
  {path: 'how-to', component: HowToComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
