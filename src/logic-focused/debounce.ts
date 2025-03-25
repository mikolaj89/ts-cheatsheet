const debounce = (cb: () => void, interval: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function debouncedFn(message: string) {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      console.log("message: ", message);
      cb();
    }, interval);
  };
};

const debouncedLog = debounce(console.log, 1000);

debouncedLog("Call 1"); // ❌ Ignored
debouncedLog("Call 2"); // ❌ Ignored
// setTimeout(() => debouncedLog("Call 3"), 500); // ❌ Ignored
// setTimeout(() => debouncedLog("Call 4"), 1000); // ✅ Executed after 1200ms


