import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDirectoryComponent } from './pokemon-directory.component';

describe('PokemonDirectoryComponent', () => {
  let component: PokemonDirectoryComponent;
  let fixture: ComponentFixture<PokemonDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
