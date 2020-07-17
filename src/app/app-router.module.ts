
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes =[
    {path: '', component:AboutComponent   },
    {path: 'about', component:AboutComponent    },
    {path: 'contact', component:ContactComponent },
    {path: 'gallery', component:GalleryComponent }

    

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
