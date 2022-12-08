export default async function handler(req, res) {
  const body = req.body.checkbox;

  if (!body) {
    res.status(500).json({ error: "Revisar Informações" });
  } else {
    res.status(200).json(req.body);
  }
}
