export default async function revalidate(tag: string) {
  const res = await fetch('/api/revalidate?tag=' + tag, {
    method: 'POST',
  })

  return res.json()
}
