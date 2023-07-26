export const digest = async (message: string): Promise<string> => {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);

  const hashHex = Array.from(new Uint8Array(hashBuffer), (b) => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
};
