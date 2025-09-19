import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from '../Pages/components/about/about.component';
import { ServicesComponent } from '../Pages/components/services/services.component';
import { EducationComponent } from '../Pages/components/education/education.component';
import { WorkComponent } from '../Pages/components/work/work.component';
import { ClientComponent } from '../Pages/components/client/client.component';
import { BlogComponent } from '../Pages/components/blog/blog.component';
import { ContactUsComponent } from '../Pages/components/contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-layout',
    imports: [
        RouterOutlet,
        NavbarComponent,
        AboutComponent,
        ServicesComponent,
        EducationComponent,
        WorkComponent,
        ClientComponent,
        BlogComponent,
        ContactUsComponent,
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css'
})
export class LayoutComponent {}
