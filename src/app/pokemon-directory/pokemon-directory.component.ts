import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokemon-directory',
  templateUrl: './pokemon-directory.component.html',
  styleUrls: ['./pokemon-directory.component.scss'],
})
export class PokemonDirectoryComponent implements OnInit {
  pages: any;
  pokemon: any;
  page: any;
  pagesArray: any;
  nextPage() {
    throw new Error('Method not implemented.');
  }
  changePage(_t14: any) {
    throw new Error('Method not implemented.');
  }
  previousPage() {
    throw new Error('Method not implemented.');
  }
  pokemonList: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 50;
  totalItems: number = 0;
  totalPages: number = 0;

  queryParamsSubject: Subject<any> = new Subject<any>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.queryParamsSubject.next(queryParams);
    });

    this.queryParamsSubject.subscribe((queryParams) => {
      this.currentPage = queryParams.page || 1;
      this.fetchPokemonList();
    });
  }

  fetchPokemonList() {
    const offset = (this.currentPage - 1) * this.itemsPerPage;
    const limit = this.itemsPerPage;

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("Do I know what I'm doing yet?");
        this.pokemonList = data.results;
        this.totalItems = data.count;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.pagesArray = Array.from(
          { length: this.totalPages },
          (_, i) => i + 1
        );
      });
  }
}
