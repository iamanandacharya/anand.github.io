import { Component } from '@angular/core';
import { experiencesEn, experiencesEn2, certification} from '../education/experiencesEn';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-education',
    imports: [CommonModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.css'
})
export class EducationComponent {
    experiences:any=experiencesEn;
    certifications: any = certification;
    experiences2:any=experiencesEn2;
    // experiences3:any=experiencesEn3;


    
    constructor() {
        this.experiences=experiencesEn;
        this.experiences2=experiencesEn2;
        this.certifications = certification;
        // this.experiences3 = experiencesEn3;
    }
    detailOnClick(experience: any) {
        experience.detailIsDisplayed=!experience.detailIsDisplayed;
      }
}
