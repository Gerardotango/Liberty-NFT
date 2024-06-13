import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Section1Component } from "../section1/section1.component";
import { Section2Component } from "../section2/section2.component";
import { Section3Component } from "../section3/section3.component";
import { Section4Component } from "../section4/section4.component";
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Section1Component, Section2Component, Section3Component, Section4Component, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-projet';
}
