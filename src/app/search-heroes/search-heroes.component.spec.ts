import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeroesComponent } from './search-heroes.component';

describe('SearchHeroesComponent', () => {
  let component: SearchHeroesComponent;
  let fixture: ComponentFixture<SearchHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
