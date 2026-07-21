// Replace this temporary response with validation + a MongoDB Contact model later.
export function submitContact(req, res) {
  res.status(501).json({ message: 'Contact storage has not been connected yet.' })
}
