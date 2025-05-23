export async function copyToClipboard(targetRef) {
  try {
    await navigator.clipboard.writeText(targetRef.current.innerHTML);
    return true;
  } catch (err) {
    console.log("Error. Copy failed:", err);
    return false;
  }
}
