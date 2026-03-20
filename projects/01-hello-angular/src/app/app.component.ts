import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// inline template and styles
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>Star Wars</li>
      <li>Interstellar</li>
      <li>Dune</li>
    </ol>
  `,
  styles: `
    h1 { 
      color: red; 
    }
    ol { 
      list-style-type: upper-roman; 
    }
  `,
})
export class AppComponent {}
