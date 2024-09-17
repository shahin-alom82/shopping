
export const fetchData = async (endPoind) => {
  const res = await fetch(endPoind, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await res.json()
  return data;

}
