function getDeviceType() {
  const userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
    return "Android";
  } else if (/iphone|ipad|ipod/i.test(userAgent)) {
    return "iPhone";
  } else if (/macintosh|mac os x/i.test(userAgent)) {
    return "Mac";
  } else if (/windows|win32/i.test(userAgent)) {
    return "Windows";
  } else if (/linux/i.test(userAgent)) {
    return "Linux";
  } else {
    return "Unknown";
  }
}

export const deviceType = getDeviceType();
