export function fileToBase64(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1]);
    };
    reader.onerror = (error) => reject(error);
  });
}

export function base64ToFile(base64: string, filename: string): File {
  const arr = base64.split(",");
  const mime = arr?.[0]?.match(/:(.*?);/)?.[1];
  const bstr = window.atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export function blobToBase64(blob: Blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

export function _encode(str: string, inCaseVal = "") {
  try {
    return Buffer.from(str).toString("base64");
  } catch (e) {
    return inCaseVal;
  }
}

export function _decode(str: string, inCaseVal = "") {
  try {
    return Buffer.from(str, "base64").toString();
  } catch (e) {
    return inCaseVal;
  }
}

export function encodeToBase64(str: string): string {
  const base64 = window.btoa(window.unescape(encodeURIComponent(str)));
  return base64;
}

export function decodeFromBase64(base64: string): string {
  const str = decodeURIComponent(window.escape(window.atob(base64)));
  return str;
}

export function encodeUTF8(str: string): string {
  return window.unescape(encodeURIComponent(str));
}

export function decodeUTF8(str: string): string {
  return decodeURIComponent(window.escape(str));
}
