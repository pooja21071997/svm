import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { GoToTopComponent } from "./shared/go-to-top/go-to-top";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, GoToTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('svm');
}
