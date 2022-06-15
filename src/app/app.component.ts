import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-eCommerce';
  public name = 'Ejemplo';
  public edad = 15;
  private framework = 'Angular';
  public img = 'https://source.unsplash.com/random';
  public btnEstado = true;

  public personObj = {
    name : 'Alan',
    age : 34,
    avatar : 'https://source.unsplash.com/random'
  }
}
