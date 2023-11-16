import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show author', () => {
    const webAuthor = 'Powered with ♥ by Grecia Fragoso';
    const year = 'Laboratoria, 2023';

    fixture.detectChanges();

    const webAuthorElement = fixture.nativeElement.querySelectorAll('p')[0];
    const yearElement = fixture.nativeElement.querySelectorAll('p')[1];

    expect(webAuthorElement.textContent).toContain(webAuthor);
    expect(yearElement.textContent).toContain(year);
  });
});
