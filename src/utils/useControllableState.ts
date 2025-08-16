import * as React from 'react';

export function useControllableState<T>({
  value,
  defaultValue,
  onChange
}: {
  value?: T;
  defaultValue: T;
  onChange?: (v: T) => void;
}) {
  const [internal, setInternal] = React.useState<T>(defaultValue);
  const isControlled = value !== undefined;
  const state = isControlled ? (value as T) : internal;

  const set = React.useCallback(
    (next: T) => {
      if (!isControlled) setInternal(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  return [state, set] as const;
}
