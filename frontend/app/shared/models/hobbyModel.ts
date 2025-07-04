import { z } from "zod";
const fileClass = typeof File !== "undefined" ? File : class {};
export const HobbyFormSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be less than 100 characters"),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must be less than 1000 characters"),
  locations: z.string().nonempty("Výběr lokace je povinný"),
  img: z
    .string({ required_error: "Image URL is required" })
    .url("Must be a valid image URL")
    .max(2048, "Image URL must be shorter than 2048 characters"),
  // img2: z
  //   .custom<File>(
  //     (file) => {
  //       return file instanceof File;
  //     },
  //     {
  //       message: "Obrázek je povinný",
  //     }
  //   )
  //   .refine((file) => file?.type?.startsWith("image/"), {
  //     message: "Soubor musí být obrázek",
  //   })
  //   .refine((file) => file?.size !== undefined && file.size > 0, {
  //     message: "Soubor nesmí být prázdný",
  //   })
  //   .refine((file) => file?.size !== undefined && file.size <= 1_000_000, {
  //     message: "Obrázek musí být menší než 1MB",
  //   }),
});

export type IHobbyForm = z.infer<typeof HobbyFormSchema>;

export function getEmptyHobbyForm(): IHobbyForm {
  return {
    name: "",
    description: "",
    locations: "",
    img: "",
    // img2: undefined as unknown as File,
  };
}

export type IHobby = IHobbyForm & { id: string };
