function calcHeader(): { width: number, height: number } | null {
  const header = document.getElementById("header")

  if (!header) {
    return null
  }


  const inner = header.querySelector("div")

  if (!inner) {
    return null
  }

  const { offsetWidth: width, offsetHeight: height } = inner
  return { width, height }
}

export default calcHeader
