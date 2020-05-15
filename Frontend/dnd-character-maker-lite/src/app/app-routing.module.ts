import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './welcome/login/login.component';
import { RegistrationComponent } from './welcome/registration/registration.component';
import { AllCharactersComponent } from './Dashboard/all-characters/all-characters.component';
import { ViewCharacterComponent } from './Character/view-character/view-character.component';
import { CreateCharacterComponent } from './Character/create-character/create-character.component';
import { EditCharacterComponent } from './Character/edit-character/edit-character.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'dashboard', component: AllCharactersComponent},
  {path:'character/view/:charid', component: ViewCharacterComponent},
  {path:'character/create', component: CreateCharacterComponent},
  {path:'character/edit/:charid', component: EditCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
