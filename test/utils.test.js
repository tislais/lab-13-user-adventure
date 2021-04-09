import { findById } from '../utils.js';

const test = QUnit.test;

test('This will take in an id and an array and return the object from the array that matches the ID', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 'two',
        type: 'second'
    };

    const stubArray = [
        { 
            id: 'one',
            type: 'first'
        },
        {
            id: 'two',
            type: 'second'
        },
        {
            id: 'three',
            type: 'third'
        }
    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(stubArray, 'two');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});