function englishList(arr) {
  let result = ""

  if (!arr.length) {
    console.error("Array arr cannot be empty: " + arr)
    return
  }

  if (arr.length === 1) {
    return arr[0] + "."
  }

  if (arr.length === 2) {
    return arr[0] + " and " + arr[1] + "."
  }

  if (arr.length > 2) {
    for (let i = 0; i < arr.length - 1; i++) {
      result += arr[i] + ", "
    }
    return result + "and " + arr[arr.length - 1] + "."
  }
}

export { englishList }