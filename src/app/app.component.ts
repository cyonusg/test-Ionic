import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor() {}
}
