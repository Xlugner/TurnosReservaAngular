import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiDividerComponent } from '../../atoms/ui-divider.component';

@Component({
  selector: 'about-preferimos',
  imports: [RouterLink, UiDividerComponent],
  templateUrl: './about-preferimos.component.html',
})
export class AboutPreferimosComponent {}
