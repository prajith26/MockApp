import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguserComponent } from './dialoguser.component';

describe('DialoguserComponent', () => {
  let component: DialoguserComponent;
  let fixture: ComponentFixture<DialoguserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoguserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
