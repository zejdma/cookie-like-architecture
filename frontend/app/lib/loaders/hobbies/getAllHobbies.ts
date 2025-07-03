// import type { Hobby } from "../../models/hobby";

// export async function getAllHobbies({ page = 1, limit = 10 } = {}): Promise<{
//   hobbies: Hobby[],
//   total: number,
//   page: number,
//   limit: number
// }> {
//   const res = await fetch(`http://localhost:3000/hobbies?page=${page}&limit=${limit}`);
//   if (!res.ok) throw new Error("Error with Hobbies fetch");
//   return await res.json();
// }

// export const getAllHobbiesHandler = async ({ request }: { request: Request }) => {
//   const url = new URL(request.url);
//   const page = parseInt(url.searchParams.get("page") || "1", 10);
//   const limit = parseInt(url.searchParams.get("limit") || "10", 10);
//   return await getAllHobbies({ page, limit });
// };

