import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <input type="text" id="title" [(ngModel)]="appTitle" />

        <label for="body">Post Body</label>
        <textarea id="body" [(ngModel)]="appBody" ></textarea>
      </section>
      <section>
        <p>{{appTitle}}</p>
        <p>{{appBody}}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  // two-way binding with the template
  appTitle = '';
  appBody = ''
}
