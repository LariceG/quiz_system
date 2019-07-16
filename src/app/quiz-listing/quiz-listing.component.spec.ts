import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListingComponent } from './quiz-listing.component';

describe('QuizListingComponent', () => {
  let component: QuizListingComponent;
  let fixture: ComponentFixture<QuizListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
