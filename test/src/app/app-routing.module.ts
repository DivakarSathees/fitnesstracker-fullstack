import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  // { path:'', redirectTo:'home', pathMatch:'full'},
  {path:'', component:HomeComponent},
  {path:'get-details', component:ViewComponent},
  {path:'create', component:CreateComponent},
  {path:'edit/:id', component:EditComponent},
  
  { path: '**', redirectTo: '/', pathMatch:'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
