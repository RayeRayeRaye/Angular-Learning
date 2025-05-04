import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
  userName: string = 'Miguel';
  number: number = 0;

  addOne(){
    this.number++
  }


  condition: boolean = true;
  condition2: string = ""

  movies: string[] = ["Dune", "Kung Fu Panda", "John Wick"];
  animals: any = [

    {
      id:1,
      name: "Dog",
      img: "https://i.pinimg.com/736x/4c/76/c1/4c76c1d7811d6dfd80759012b041e0dc.jpg"
    },
    {
      id: 2,
      name: "Cat",
      img: "https://i.pinimg.com/736x/4c/76/c1/4c76c1d7811d6dfd80759012b041e0dc.jpg"
    },
    {
      id: 3,
      name: "Bird",
      img: "https://i.pinimg.com/736x/4c/76/c1/4c76c1d7811d6dfd80759012b041e0dc.jpg"
    }
  ]


  text: string = "Variable desde el Padre"
  person: any = {
    sex: "Hombre",
    age: 21
  }

}
