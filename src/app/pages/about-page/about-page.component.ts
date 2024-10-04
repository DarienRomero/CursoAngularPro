import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export default class AboutPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta)

  ngOnInit(): void {
    this.title.setTitle('About Page')
    this.meta.updateTag({name: 'description', content: 'Este es mi About Page'})
    this.meta.updateTag({name: 'og:title', content: 'Este es mi About Page'})
    this.meta.updateTag({name: 'keywords', content: 'Hola,Mundo,Darien,Romero,Angular,PRO'})
  }
}
