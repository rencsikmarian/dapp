import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const valuesUrl = 'http://localhost:5000/api/values';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    TestBed.inject(HttpTestingController).expectOne(valuesUrl).flush([]);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it(`should have as title 'DatingAppSPA'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    TestBed.inject(HttpTestingController).expectOne(valuesUrl).flush([]);
    expect(fixture.componentInstance.title).toEqual('DatingAppSPA');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    TestBed.inject(HttpTestingController).expectOne(valuesUrl).flush([]);
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Dating App');
  });
});
