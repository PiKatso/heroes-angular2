import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  // Define a heroes array property.
  heroes: Hero[] = [];

  // Inject the HeroService in the constructor and hold it in a private heroService field
  constructor(private heroService: HeroService) { }

  // Call the service to get heroes inside the Angular ngOnInit() lifecycle hook
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
