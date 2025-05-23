export async function copyToClipboard(targetRef) {
  try {
    const permission = await navigator.permissions.query({
      name: "clipboard-write",
    });

    if (permission.state === "granted" || permission.state === "prompt") {
      await navigator.clipboard.writeText(targetRef.current.innerHTML);
      return true;
    } else {
      throw new Error(
        "Can't access the clipboard. Check your browser permissions."
      );
    }
  } catch (err) {
    console.log("Error. Copy failed:", err);
    return false;
  }
}
