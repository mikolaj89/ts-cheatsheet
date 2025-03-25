class Wrapper {
    private fn: (a: (message: string) => void) => void;
  
    private logSomething = (message: string) => {
      console.log(message);
    };
  
    constructor(cb: (a: (message: string) => void) => void) {
      this.fn = cb;
    }
  
    public wrapperMethod() {
      this.fn(this.logSomething);
    }
  }
  
  const wrapper = new Wrapper((logResult) => {
    const y = "123";
    logResult(y);
  });
  
  wrapper.wrapperMethod();
  