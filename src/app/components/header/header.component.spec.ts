// import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display title image', () => {
    fixture.detectChanges();
    const logo = fixture.nativeElement.querySelector('.logo img')
    expect(logo).toBeTruthy();
    expect(logo.getAttribute('src')).toContain('/assets/moviemania.png')
  });

  it('Should display quote and author', () => {
    const componentQuote = '"A film should have a beginning, a middle and an end, but not necessarily in that order."';
    const componentAuthor = 'Jean-Luc Godard';

    fixture.detectChanges();

    const quoteElement = fixture.nativeElement.querySelector('.cita-header .frase');
    const authorElement = fixture.nativeElement.querySelector('.cita-header .autor');

    expect(quoteElement.textContent).toContain(componentQuote);
    expect(authorElement.textContent).toContain(componentAuthor);
  })
});
