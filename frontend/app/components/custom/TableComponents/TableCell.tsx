import { Link } from "react-router";
import { cn } from "~/lib/utils";

type TableCellProps = {
  variant: "header" | "text" | "link" | "image" | "status";
  visibleOn?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  width?: string;
  text?: string;
  imgSrc?: string;
  imgAlt?: string;
  link?: string;
  status?: "published" | "drafted" | "archived";
};

export const TableCell = ({
  variant,
  visibleOn,
  width,
  text,
  link,
  imgSrc,
  imgAlt,
  status
}: TableCellProps) => {
    const baseStyle = cn(
        "px-4 text-left",
        width? `w-[${width}px]` : "flex-1", 
        visibleOn === "sm" ? "hidden sm:table-cell" :
        visibleOn === "md" ? "hidden md:table-cell" :
        visibleOn === "lg" ? "hidden lg:table-cell" :
        visibleOn === "xl" ? "hidden xl:table-cell" :
        visibleOn === "2xl" ? "hidden 2xl:table-cell" :
        visibleOn === "3xl" ? "hidden 3xl:table-cell" :
        ""
    );

    if (variant === "header" && text) {
        return (
            <th className={baseStyle}>
                <div className="font-medium line-clamp-2">{text}</div>
            </th> 
        )       
    }

    if (variant === "image" && imgSrc) {
        return (
            <td className={cn(baseStyle, "w-20")}>
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-12 h-12 rounded-md object-cover"
                />
            </td>
        )
    }

    if (variant === "text" && text) {
        return (
            <td className={cn(baseStyle)}>
                <div className="line-clamp-2">
                    {text}
                </div>
            </td>
        )
    }

    if (variant === "link" && link) {
        return (
            <td className={cn(baseStyle)}>
                <Link to={link}>{text}</Link> 
            </td>
        )
    }

    if (variant === "status" && status) {
        return (
            <td className={cn(baseStyle)}>
                {status === "published" ? "Published" : status === "drafted" ? "Drafted" : status === "archived" ? "Archived" : ""}
            </td>
        )
    }

    return <td>Bad parameters</td>
}
