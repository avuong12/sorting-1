describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]])
  });

  it('returns original array if array length is less than or equal to 1', function() {
    expect(split([1])).toEqual([1])
  });

  
});



describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
  });
});


describe('Merge Sort function', function(){
  it('is able to merge sort a given array', function(){
    // test the merging algorithm
  });
});