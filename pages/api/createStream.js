export default async function handler(req, res) {
  const { name, profiles } = req.body;

  try {
    const response = await fetch(`https://livepeer.studio/api/stream`, {
      method: "POST",
      headers: {
        Authorization: `Bearer 244ee2e7-3e32-422a-893c-d105086ad534`,
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
