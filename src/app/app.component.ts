import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderButtonComponent } from './order-button/order-button.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { TextSectionComponent } from './text-section/text-section.component';
import { ContainerImageComponent } from './container-image/container-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderButtonComponent,LinkButtonComponent, TextSectionComponent, ContainerImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'order-page';
}
