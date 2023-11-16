import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardsContainerComponent } from './cards-container.component';

describe('CardsContainerComponent', () => {
  let component: CardsContainerComponent;
  let fixture: ComponentFixture<CardsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsContainerComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(CardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
