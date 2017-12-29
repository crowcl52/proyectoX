import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
// import {CatalogoComponent} from "./components/catalogo/catalogo.component";

const app_routes: Routes = [
    {path:'inicio',component:HomeComponent},
    // {path:'catalogo',component:CatalogoComponent},
    {path:'contacto',component:ContactComponent},
    {path:'**', pathMatch:'full', redirectTo:'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes );