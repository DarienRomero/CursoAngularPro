import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export default class ContactPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta)

  ngOnInit(): void {
    this.title.setTitle('Contact Page')
    this.meta.updateTag({name: 'description', content: 'Este es mi Contact Page'})
    this.meta.updateTag({name: 'og:title', content: 'Este es mi About Page'})
    this.meta.updateTag({name: 'keywords', content: 'Hola,Mundo,Darien,Romero,Angular,PRO'})
  }
}