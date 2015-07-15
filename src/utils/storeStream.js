import {Observable} from 'rx-lite';

export default function storeStream (store) {
  return Observable.create(observer =>
    store.subscribe(() => observer.onNext(store.getState()))
  );
}
