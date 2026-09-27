export function getExportedDataUrl(filename) {
  return new URL('../../data/' + filename, window.location.href);
}
