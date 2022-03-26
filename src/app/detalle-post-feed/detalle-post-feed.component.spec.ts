import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePostFeedComponent } from './detalle-post-feed.component';

describe('DetallePostFeedComponent', () => {
  let component: DetallePostFeedComponent;
  let fixture: ComponentFixture<DetallePostFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePostFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePostFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
