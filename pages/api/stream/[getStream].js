export default async function handler(req, res) {
  try {
    // ${req.query.getStream} is getting from /stream/[getStream].js
    const response = await fetch(
      `https://livepeer.studio/api/stream/${req.query.getStream}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    res.status(400).send("Error");
  }
}