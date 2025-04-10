interface Events {
  userCreated: { id: number; name: string };
  orderPlaced: { orderId: string; amount: number };
}

class EventEmitter<T> {
    private events: Map<keyof T, (data: T[keyof T]) => void> = new Map();
  constructor() {
    this.events = new Map();
  }
  public on<K extends keyof T>(eventName: K, fn: (data: T[K]) => void) {
    this.events.set(eventName, fn as (data: T[keyof T]) => void);
  }

  public emit <K extends keyof T>(eventName: K, data: T[K]) {
    const event = this.events?.get(eventName);
    if(event){
        event(data);
    }
    

  };
}

const emitter = new EventEmitter<Events>();

// Registering listeners
emitter.on("userCreated", (data) => {
  console.log(`User created: ${data.name}`); // Type-safe access
});

emitter.on("orderPlaced", (data) => {
  console.log(`Order placed: ${data.orderId}, Amount: ${data.amount}`);
});

//   // Emitting events
emitter.emit("userCreated", { id: 1, name: "Alice" });
emitter.emit("orderPlaced", { orderId: "123", amount: 200 });
