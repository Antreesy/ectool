export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function isMatched(value1, value2) {
  return (
    value1.toLowerCase().includes(value2.toLowerCase()) ||
    value2.toLowerCase().includes(value1.toLowerCase())
  );
}
