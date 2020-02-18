




describe('Bubble Sort', function(){
  beforeAll(function(){
    spyOn(window, 'swap').and.callThrough();
  });
  it('handles an empty array', function(){
  expect(bubbleSort([]) ).toEqual( [] );
  });
  it('sorts an array of 1 element', function(){
    expect(bubbleSort([5])).toEqual([5]);
  });
  it('sorts a longer array', function(){
    expect(bubbleSort([4,1,7,3,9])).toEqual([1,3,4,7,9]);
  });
  it('calls swap', function () {
    // spyOn(window, 'swap').and.callThrough();
    // window.swap();
    expect(window.swap.calls.count()).toEqual(3);
  });
});






