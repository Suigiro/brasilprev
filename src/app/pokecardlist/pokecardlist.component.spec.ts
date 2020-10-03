import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecardlistComponent } from './pokecardlist.component';

describe('PokecardlistComponent', () => {
  let component: PokecardlistComponent;
  let fixture: ComponentFixture<PokecardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokecardlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokecardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
