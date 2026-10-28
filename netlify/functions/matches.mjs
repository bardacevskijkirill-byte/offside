
export default async () => {
  const token = process.env.FOOTBALL_API_TOKEN;

  if (!token) {
    return Response.json(
      { error: "API token is not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      "https://api.football-data.org/v4/matches",
      {
        headers: { "X-Auth-Token": token }
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: "Football API request failed" },
        { status: response.status }
      );
    }

    return Response.json(data);
  } catch {
    return Response.json(
      { error: "Could not fetch matches" },
      { status: 502 }
    );
  }
};
