// import { useLoaderData, useNavigate } from "react-router";
// import type { Hobby } from "~/lib/models/hobby";

// type LoaderData = {
//   hobbies: Hobby[];
//   total: number;
//   page: number;
//   limit: number;
// };

// export function hobbyListViewModel() {
//   const navigate = useNavigate();
//   const loaderData = useLoaderData<LoaderData | null>();
//   console.log(loaderData);
//   const hobbies = loaderData?.hobbies ?? [];
//   const total = loaderData?.total ?? 0;
//   const page = loaderData?.page ?? 1;
//   const limit = loaderData?.limit ?? 10;
  
//   const totalPages = Math.max(1, Math.ceil(total / limit));

//   const goToPage = (newPage: number) => {
//     const params = new URLSearchParams(window.location.search);
//     params.set("page", newPage.toString());
//     if (!params.get("limit")) params.set("limit", limit.toString());
//     navigate(`?${params.toString()}`);
//   };

//   const changeLimit = (newLimit: number) => {
//     const params = new URLSearchParams(window.location.search);
//     params.set("limit", newLimit.toString());
//     params.set("page", "1");
//     navigate(`?${params.toString()}`);
//   };

//   return {
//     hobbies,
//     total,
//     page,
//     limit,
//     totalPages,
//     goToPage,
//     changeLimit,
//   };
// }

