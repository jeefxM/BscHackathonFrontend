export default async function handler(req, res) {
  const { name, profiles } = req.body;

  try {
    const response = await fetch(`https://livepeer.studio/api/stream`, {
      method: "POST",
      headers: {
        Authorization: `Bearer deab6d40-4494-4b17-880d-777e3e348db2`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        profiles,
      }),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}
