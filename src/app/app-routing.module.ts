import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDashComponent } from './contact-dash/contact-dash.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {path:'',redirectTo:'contact/admin',pathMatch:'full'},
  {path:'contacts/admin',component:ContactDashComponent},
  {path:'contacts/add',component:AddContactComponent},
  {path:'contacts/edit/:contactId',component:EditContactComponent},
  {path:'contacts/view/:contactId',component:ViewContactComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
