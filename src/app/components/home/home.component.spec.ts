import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render header, sidebar, cards container and footer', () => {
    fixture.detectChanges();

    const headerElement = fixture.nativeElement.querySelector('app-header');
    const sidebarElement = fixture.nativeElement.querySelector('app-sidebar');
    const footerElement = fixture.nativeElement.querySelector('app-footer');
    const cardsElement = fixture.nativeElement.querySelector('app-cards-container');

    expect(headerElement).toBeTruthy();
    expect(sidebarElement).toBeTruthy();
    expect(footerElement).toBeTruthy();
    expect(cardsElement).toBeTruthy();
  });
});
