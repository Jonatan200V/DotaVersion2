'use client';

import { useState } from 'react';

export default function useBoolean() {
  const [view, setView] = useState<boolean>(false);
  function open() {
    setView(true);
  }
  function close() {
    setView(false);
  }
  function revert() {
    setView(!view);
  }
  return {
    view,
    open,
    close,
    revert,
  };
}
