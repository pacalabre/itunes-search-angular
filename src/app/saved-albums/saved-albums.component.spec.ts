import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAlbumsComponent } from './saved-albums.component';

describe('SavedAlbumsComponent', () => {
  let component: SavedAlbumsComponent;
  let fixture: ComponentFixture<SavedAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
