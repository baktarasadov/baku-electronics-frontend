"use server";

export async function fetchData(route) {
  const response = await fetch("https://api.b-e.az/task" + route);
  return response.json();
}
