function assertUnreachable(x: never): never {
  x;
  throw new Error('Unreachable error');
}

export default assertUnreachable;
