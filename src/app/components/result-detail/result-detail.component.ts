import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.scss'],
})
export class ResultDetailComponent implements OnInit {
  pokemonName: string | null = null;
  pokemon: Object;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("STATE:", history.state)
    this.pokemonName = this.route.snapshot.paramMap.get('name');
    this.pokemon = history.state.data;
    console.log("STATE:", this.pokemon)
  }
}
