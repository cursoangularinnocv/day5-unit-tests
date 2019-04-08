import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDisplayerComponent } from './products-displayer.component';

describe('ProductsDisplayerComponent', () => {
  let component: ProductsDisplayerComponent;
  let fixture: ComponentFixture<ProductsDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDisplayerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(component.books.length).toBe(3)
  });

  describe('switchBooksDisplay', () => {
    it('when the component is initalized, by default we must show the book list', () => {
      expect(component.showBooks).toBe(true);
    });

    it('when clicking the switch button we expect to hide the book list', () => {
      expect(component.showBooks).toBe(true);

      component.switchBooksDisplay();

      expect(component.showBooks).toBe(false);
    });

    it('when clicking the switch button we expect to switched times counter to be 1', () => {
      component.switchBooksDisplay();

      expect(component.switchedTimes).toBe(1)

      for (let i = 0 ; i < 10 ; i++){
        component.switchBooksDisplay();
      }

      expect(component.switchedTimes).toBe(11)
    });

    describe('testing spies', () => {
      it ('when calling move with negative values', () => {
        spyOn(component, 'moveLeft').and.callThrough()

        component.move(-100)

        expect(component.moveLeft['calls'].count()).toBe(1)
      })

      it ('when calling move with positive values', () => {
        spyOn(component, 'moveRight').and.callThrough()

        component.move(100)
        component.move(100)
        component.move(100)

        expect(component.moveRight['calls'].count()).toBe(3)
      })
    })
  });
});
