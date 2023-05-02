export var globalReferenceCount = {
  count: 0,
  increment: () => globalReferenceCount.count += 1,
  decrement: () => globalReferenceCount.count -= 1
};
