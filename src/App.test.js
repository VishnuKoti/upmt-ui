describe('Examining the syntax of Jest tests', ()=>{

  it('sums numbers', ()=>{
    expect(1+2).toEqual(3);
    expect(5+2).toEqual(7);
  });
});