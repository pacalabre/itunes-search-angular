import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSuggestionsComponentComponent } from './album-suggestions-component.component';

describe('AlbumSuggestionsComponentComponent', () => {
  let component: AlbumSuggestionsComponentComponent;
  let fixture: ComponentFixture<AlbumSuggestionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumSuggestionsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSuggestionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
