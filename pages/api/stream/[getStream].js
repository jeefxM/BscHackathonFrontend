export default async function handler(req, res) {
  try {
    // ${req.query.getStream} is getting from /stream/[getStream].js
    const response = await fetch(
      `https://livepeer.studio/api/stream/${req.query.getStream}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer deab6d40-4494-4b17-880d-777e3e348db2`,
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
