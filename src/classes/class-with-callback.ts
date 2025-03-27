// example for passed callback function, that receives some private param (method in this case)
// and returns a function that is called with the private param

class Wrapper {
  private logSomething = (message: string | string[]) => {
    console.log(`This is message logged by Wrapper class instance: ${message}`);
  };
  private fn: () => void;

  constructor(cb: (a: typeof this.logSomething) => void) {
    this.fn = () =>  cb(this.logSomething);
  }

  public wrapperMethod() {
    this.fn();
  }
}

const wrapper = new Wrapper((logResult) => {
  //logResult is a private logSomething passed as parameter to the callback
  const y = "123";
  logResult(y);
});

wrapper.wrapperMethod(); 
