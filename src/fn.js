export function identity(d) {
    return d;
}
export function noop(d) {}

export function functor(v) {
    return typeof v === 'function' ? v : () => v;
}
