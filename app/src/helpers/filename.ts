export function getFileNameNoExt(path: string): string {
  const pathSegments = path.replace(/\\/, '/').split("/")

  const lastSegment = pathSegments[pathSegments.length - 1]

  return lastSegment.replace(/\..*$/, '')
}
