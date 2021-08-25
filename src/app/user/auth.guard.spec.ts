

// 08/25/2021 02:48 pm - SSN
// https://stackoverflow.com/questions/41019109/error-no-provider-for-router-while-writing-karma-jasmine-unit-test-cases

import { RouterTestingModule } from '@angular/router/testing';

import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe( 'AuthGuard', () => {

  // 08/25/2021 02:48 pm - SSN
  // beforeEach( () => {
  //   TestBed.configureTestingModule( {
  //     providers: [ AuthGuard ]
  //   } );
  // } );
  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      providers: [ AuthGuard ],
      imports: [ RouterTestingModule ]
    } )
      .compileComponents();
  } ) );




  it( 'should ...', inject( [ AuthGuard ], ( guard: AuthGuard ) => {
    expect( guard ).toBeTruthy();
  } ) );
} );
