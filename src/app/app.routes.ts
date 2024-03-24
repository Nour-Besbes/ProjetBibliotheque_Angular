import { Routes } from '@angular/router';
import { GestionComponent } from './gestion/gestion.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { SuivieComponent } from './suivie/suivie.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path:'' , redirectTo:'login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'', component:NavComponent,children:[{path:'gestion', component:GestionComponent},
    {path:'suivie',component:SuivieComponent}]},
    {path:'user',component:UserComponent}
    
];
