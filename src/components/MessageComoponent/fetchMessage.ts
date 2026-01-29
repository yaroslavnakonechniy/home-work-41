const cache = new Map<boolean, Promise<string>>();

export const fetchMessage = (shouldFail: boolean): Promise<string> => {
  if (!cache.has(shouldFail)) {
    const promise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error('Failed to fetch message'));
        } else {
          resolve('Hello, world and "use hook"! (resolve)');
        }
      }, 1000);
    });

    cache.set(shouldFail, promise);
  }

  return cache.get(shouldFail)!;
};