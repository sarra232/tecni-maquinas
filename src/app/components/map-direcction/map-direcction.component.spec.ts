import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDirecctionComponent } from './map-direcction.component';

describe('MapDirecctionComponent', () => {
  let component: MapDirecctionComponent;
  let fixture: ComponentFixture<MapDirecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDirecctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDirecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
