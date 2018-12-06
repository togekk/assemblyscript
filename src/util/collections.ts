export function makeArray<V>(original: Array<V> | null = null): Array<V> {
  if (original) {
    let cloned = new Array<V>(original.length);
    for (let i = 0, k = original.length; i < k; ++i) cloned[i] = original[i];
    return cloned;
  }
  return new Array<V>();
}

export function makeSet<V>(original: Set<V> | null = null): Set<V> {
  if (original) {
    let cloned = new Set<V>();
    for (let v of original) cloned.add(v);
    return cloned;
  }
  return new Set<V>();
}

export function makeMap<K,V>(original: Map<K,V> | null = null): Map<K,V> {
  if (original) {
    let cloned = new Map<K,V>();
    for (let [k, v] of original) cloned.set(k, v);
    return cloned;
  }
  return new Map<K,V>();
}