"use client";

import { useCallback, useState } from "react";

const transformValue = (text) => {
  // To manually replace all &nbsp to avoid getting different unicode chars
  return text.replace(/[\u00A0]/g, " ");
};

export function useCopyToClipboard(timeout = 1500) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const [copyTimeout, setCopyTimeout] = useState(null);

  const clearExistingTimeout = useCallback(() => {
    if (copyTimeout) clearTimeout(copyTimeout);
  }, [copyTimeout]);

  const handleCopy = useCallback(
    (valueToCopy) => {
      if ("clipboard" in navigator) {
        const transformedVal =
          typeof valueToCopy === "string"
            ? transformValue(valueToCopy)
            : valueToCopy;

        navigator.clipboard
          .writeText(transformedVal)
          .then(() => {
            clearExistingTimeout();
            setCopied(true);
            setCopyTimeout(setTimeout(() => setCopied(false), timeout));
          })
          .catch((err) => setError(err));
      } else {
        setError(
          new Error("useClipboard: navigator.clipboard API not supported")
        );
      }
    },
    [clearExistingTimeout, timeout]
  );

  const reset = useCallback(() => {
    setCopied(false);
    setError(null);
    clearExistingTimeout();
  }, [clearExistingTimeout]);

  return {
    handleCopy,
    copied,
    reset,
    error,
  };
}
