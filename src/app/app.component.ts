import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-wasm-rust';

  constructor() {
    this.load();
  }

  async load() {
    const wasm = await import('../wasm/wasm_game_of_life');
    wasm.greet();
  }



}


