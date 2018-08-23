import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGridComponent } from './newgrid.component';
import { IgxGridModule } from 'igniteui-angular';

describe('NewGridComponent', () => {
  let component: NewGridComponent;
  let fixture: ComponentFixture<NewGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGridComponent ],
      imports: [ IgxGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
