class TaskQueue<T = unknown> {
  private interval: number;
  private taskQueue: (() => Promise<T>)[] = [];
  private isRunning = false;
  private results: T[] = [];
  private timeout: NodeJS.Timeout | null = null;

  constructor(interval: number) {
    this.interval = interval;
  }

  public addToQueue(cb: () => Promise<T> | T) {
    // const item = () => Promise.resolve(cb());  // Efficient handling of both sync & async tasks
    const item = async () => {
      return await cb();
    };
    this.taskQueue.push(item);
  }

  private executeTask() {
    if (this.timeout) clearTimeout(this.timeout); // Clear previous timeout if any

    this.timeout = setTimeout(async () => {
      if (this.isRunning) {
        const task = this.taskQueue.shift();

        if (task) {
          try {
            const result = await task(); // Automatically adopts any promise
            if (result !== undefined) {
              this.results.push(result);
            }
          } catch (error) {
            console.error("Task failed with error:", error);
          }
        }

        if (this.taskQueue.length > 0) {
          this.executeTask();
        } else {
          this.stop(); // Automatically stop if no tasks are left
        }
      }
    }, this.interval);
  }

  public start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.executeTask();
    }
  }

  public stop() {
    this.isRunning = false;
    if (this.timeout) clearTimeout(this.timeout);
  }

  public getResults() {
    return this.results;
  }
}

// Example Usage
const queue = new TaskQueue(1000);

queue.addToQueue(() => {
  console.log("Fetching data...");
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ data: "Fetched Data", status: 200 });
    }, 1000)
  );
});

queue.addToQueue(() => {
  console.log("Simple task");
  return "Simple Task Result";
});

queue.start();

setTimeout(() => {
  console.log("Results:", queue.getResults());
}, 5000);

const promise1 = Promise.resolve("dupa");
const promise2 = new Promise<string>((resolve) => {
  resolve("123");
});
