const CryptoJS = require('crypto-js');

const publicKey = CryptoJS.enc.Utf8.parse('4874923827822389');

export function encodeAES(input) {
  const content = typeof input === 'string' ? input : JSON.stringify(input);
  const text = CryptoJS.AES.encrypt(content, publicKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
  return text;
}

export function decodeAES(input) {
  if (typeof input !== 'string') {
    return input;
  }
  const bytes = CryptoJS.AES.decrypt(input.replace(/\s/g, ''), publicKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  const text = bytes.toString(CryptoJS.enc.Utf8);

  try {
    return JSON.parse(text);
  } catch (err) {
    return text;
  }
}