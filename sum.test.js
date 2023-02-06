const myTesting =  require("./sum");


test("return the sum",()=>{
    expect(myTesting(50,50)).toBe(100);
})
