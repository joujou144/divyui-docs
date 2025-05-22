export default async function copyToClipboard(elRef, setCopySuccess) {
  setCopySuccess(false);

  try {
    await navigator.clipboard.writeText(elRef.current.outerHTML);
    setCopySuccess(true);
  } catch (err) {
    setCopySuccess(false);
  }

  // Reset copy success after 1 seconds
  setTimeout(() => {
    setCopySuccess(false);
  }, 1000);
}
