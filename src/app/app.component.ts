import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Toda variable debe ser pública para poder ser usada en app.component.html.
  name: string = 'Juan Loaiza';
  age: number = 18;
  img: string = "https://images.unsplash.com/photo-1650223457799-93853451d7cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTQ0MjMxMA&ixlib=rb-1.2.1&q=80&w=1080"
  bntDisabled = true;
  person = {
    name: "Juan Loaiza",
    age: 18,
    avatar: "https://images.unsplash.com/photo-1650223457799-93853451d7cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTQ0MjMxMA&ixlib=rb-1.2.1&q=80&w=1080",
  }

  names: string[] = ['Juan', 'David','Loaiza', 'Reyes', 'Depresion'];

  newName: string = ''

  //Metodo

  toggleButton(){
    if (!this.bntDisabled) {
      this.bntDisabled = true;
    } else {
      this.bntDisabled = false;
    }
  }

  ageIncreaser(){
    this.person.age += 1;
  }

  namesAdder(): void{
    this.names.push(this.newName);
    this.newName = ''
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  changeName(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  indexDelete(index: number):void {
    this.names.splice(index,1)
  }
}
