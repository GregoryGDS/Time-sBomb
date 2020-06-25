import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarteComponent } from './page-carte.component';

describe('PageCarteComponent', () => {
  let component: PageCarteComponent;
  let fixture: ComponentFixture<PageCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
