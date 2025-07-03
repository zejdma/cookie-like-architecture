import { z } from "zod";

export const HobbyFormSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be less than 100 characters"),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must be less than 1000 characters"),
  locations: z
    .string({ required_error: "Locations is required" })
    .min(3, "Locations must be at least 3 characters")
    .max(100, "Locations must be less than 100 characters"),
  img: z
    .string({ required_error: "Image URL is required" })
    .url("Must be a valid image URL")
    .max(2048, "Image URL must be shorter than 2048 characters"),
  // img: z
  //   .instanceof(File)
  //   .refine(Boolean, { message: "Image is required" })
  //   .refine((file) => file.type.startsWith("image/"), {
  //     message: "Must be an image",
  //   })
  //   .refine((file) => file.size <= 10_000_000, {
  //     message: "Max size 10MB",
  //   }),
});

export type IHobbyForm = z.infer<typeof HobbyFormSchema>;

export function getEmptyHobbyForm(): IHobbyForm {
  return {
    name: "",
    description: "",
    locations: "",
    img: "",
    // img: new File([], ""),
  };
}

export type IHobby = IHobbyForm & { id: string };
