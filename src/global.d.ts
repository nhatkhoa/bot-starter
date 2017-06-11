import * as Bluebird from 'bluebird'

interface Promise<T> extends Bluebird<T> {}

interface PromiseConstructor {
  delay: typeof Bluebird.prototype.delay;
}

export as namespace Promise