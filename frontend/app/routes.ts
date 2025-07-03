import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("positions", "routes/positions.tsx"),
    route("hobbies", "routes/hobbies/list/hobbyList.tsx"),
    route("hobbies/new", "routes/hobbies/new/newHobby.tsx"),
    route("hobbies/:hobbyId",  "routes/hobbies/detail/hobbyDetail.tsx"),
    route("disciplines", "routes/disciplines.tsx"),
    route("vegetables", "routes/vegetables/vegetableList.tsx"),
    route("vegetables/:vegetableId",  "routes/vegetables/vegetableDetail.tsx"),
    route("vegetables/new", "routes/vegetables/newVegetable.tsx")
] satisfies RouteConfig;

