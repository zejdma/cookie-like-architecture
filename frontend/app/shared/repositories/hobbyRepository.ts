import type { IHobby, IHobbyForm } from "../models/hobbyModel";
import type { HobbyRepositoryInterface } from "./repositoryInterfaces";

export function hobbyRepository(): HobbyRepositoryInterface {
  return {
    getAll: async (page, limit) => {
      const res = await fetch(
        `http://localhost:3000/hobbies?page=${page}&limit=${limit}`
      );
      if (!res.ok) throw new Error("Fetch failed");
      return await res.json();
    },
    getById: async (id: string) => {
      if (!id) {
        throw new Error(
          `Chybějící ID hobby v parametrech routy v loaderu. id: ${id}`
        );
      }

      const res = await fetch(`http://localhost:3000/hobbies/${id}`);

      if (!res.ok) {
        throw new Error("Hobby nenalezeno");
      }

      const hobby = await res.json();
      if (!hobby) throw new Response("Not Found", { status: 404 });

      return hobby;
    },
    create: async (hobby: IHobbyForm) => {
      try {
        const response = await fetch("http://localhost:3000/hobbies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hobby),
        });
        const responseData = await response.json();

        return {
          data: responseData.data ?? {},
          errors: responseData.errors ?? {},
        };
      } catch (error) {
        return {
          data: null,
          errors: { general: error },
        };
      }
    },
  };
}