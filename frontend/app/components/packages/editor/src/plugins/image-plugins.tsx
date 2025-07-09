import { Editor } from "@tiptap/core";
import { Node } from "@tiptap/pm/model";
export function ImageNodeView() {
  return ({
    node,
    editor,
    getPos,
  }: {
    node: Node;
    editor: Editor;
    getPos?: Function;
  }) => {
    const {
      view,
      options: { editable },
    } = editor;
    const { style } = node.attrs;
    const $wrapper = document.createElement("div");
    const $container = document.createElement("div");
    const $img = document.createElement("img");
    const iconStyle =
      "width: 24px; height: 24px; cursor: pointer; padding: 4px;";

    const dispatchNodeView = () => {
      if (typeof getPos === "function") {
        const newAttrs = {
          ...node.attrs,
          style: `${$img.style.cssText}`,
        };
        view.dispatch(view.state.tr.setNodeMarkup(getPos(), null, newAttrs));
      }
    };
    const paintPositionContoller = () => {
      const $postionController = document.createElement("div");

      const $leftControllerLight = document.createElement("img");
      const $leftControllerDark = document.createElement("img");
      const $centerControllerLight = document.createElement("img");
      const $centerControllerDark = document.createElement("img");
      const $rightControllerLight = document.createElement("img");
      const $rightControllerDark = document.createElement("img");

      const controllerMouseOver = e => {
        e.target.style.opacity = 0.3;
      };

      const controllerMouseOut = e => {
        e.target.style.opacity = 1;
      };

      $postionController.setAttribute(
        "style",
        "position: absolute; top: 0%; left: 50%; width: 125px; height: 40px; z-index: 999; border-radius: 4px; cursor: pointer; transform: translate(-50%, -50%); display: flex; justify-content: space-between; align-items: center; padding: 0px 15px;"
      );
      $postionController.setAttribute(
        "class",
        `dark:bg-gray-800 dark:border-gray-700 bg-gray-100 border border-gray-300 `
      );

      $leftControllerLight.setAttribute(
        "src",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFsaWduLWxlZnQtaWNvbiBsdWNpZGUtYWxpZ24tbGVmdCI+PHBhdGggZD0iTTE1IDEySDMiLz48cGF0aCBkPSJNMTcgMThIMyIvPjxwYXRoIGQ9Ik0yMSA2SDMiLz48L3N2Zz4="
      );

      $leftControllerLight.setAttribute("style", iconStyle);
      $leftControllerLight.setAttribute(
        "class",
        `block dark:hidden ${$img.style.cssText.includes("margin: 0px auto 0px 0px;") ? "bg-gray-300 rounded-md dark:bg-gray-700 p-1" : ""}`
      );
      $leftControllerLight.addEventListener("mouseover", controllerMouseOver);
      $leftControllerLight.addEventListener("mouseout", controllerMouseOut);

      $leftControllerDark.setAttribute(
        "src",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hbGlnbi1sZWZ0LWljb24gbHVjaWRlLWFsaWduLWxlZnQiPjxwYXRoIGQ9Ik0xNSAxMkgzIi8+PHBhdGggZD0iTTE3IDE4SDMiLz48cGF0aCBkPSJNMjEgNkgzIi8+PC9zdmc+"
      );

      $leftControllerDark.setAttribute("style", iconStyle);
      $leftControllerDark.setAttribute(
        "class",
        `hidden dark:block ${$img.style.cssText.includes("margin: 0px auto 0px 0px;") ? "bg-gray-300 rounded-md dark:bg-gray-700 p-1" : ""}`
      );
      $leftControllerDark.addEventListener("mouseover", controllerMouseOver);
      $leftControllerDark.addEventListener("mouseout", controllerMouseOut);

      $centerControllerLight.setAttribute(
        "src",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFsaWduLWNlbnRlci1pY29uIGx1Y2lkZS1hbGlnbi1jZW50ZXIiPjxwYXRoIGQ9Ik0xNyAxMkg3Ii8+PHBhdGggZD0iTTE5IDE4SDUiLz48cGF0aCBkPSJNMjEgNkgzIi8+PC9zdmc+"
      );
      $centerControllerLight.setAttribute("style", iconStyle);
      $centerControllerLight.setAttribute(
        "class",
        `block dark:hidden ${$img.style.cssText.includes("margin: 0px auto;") ? "bg-gray-300 rounded-md dark:bg-gray-700 p-1" : ""}`
      );
      $centerControllerLight.addEventListener("mouseover", controllerMouseOver);
      $centerControllerLight.addEventListener("mouseout", controllerMouseOut);

      $centerControllerDark.setAttribute(
        "src",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hbGlnbi1jZW50ZXItaWNvbiBsdWNpZGUtYWxpZ24tY2VudGVyIj48cGF0aCBkPSJNMTcgMTJINyIvPjxwYXRoIGQ9Ik0xOSAxOEg1Ii8+PHBhdGggZD0iTTIxIDZIMyIvPjwvc3ZnPg=="
      );
      $centerControllerDark.setAttribute("style", iconStyle);
      $centerControllerDark.setAttribute(
        "class",
        `hidden dark:block ${$img.style.cssText.includes("margin: 0px auto;") ? "bg-gray-300 rounded-md dark:bg-gray-700 p-1" : ""}`
      );
      $centerControllerDark.addEventListener("mouseover", controllerMouseOver);
      $centerControllerDark.addEventListener("mouseout", controllerMouseOut);

      $rightControllerLight.setAttribute(
        "src",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFsaWduLXJpZ2h0LWljb24gbHVjaWRlLWFsaWduLXJpZ2h0Ij48cGF0aCBkPSJNMjEgMTJIOSIvPjxwYXRoIGQ9Ik0yMSAxOEg3Ii8+PHBhdGggZD0iTTIxIDZIMyIvPjwvc3ZnPg=="
      );
      $rightControllerLight.setAttribute("style", iconStyle);
      $rightControllerLight.setAttribute(
        "class",
        `block dark:hidden ${$img.style.cssText.includes("margin: 0px 0px 0px auto;") ? "bg-gray-300 rounded-md dark:bg-gray-700 p-1" : ""}`
      );
      $rightControllerLight.addEventListener("mouseover", controllerMouseOver);
      $rightControllerLight.addEventListener("mouseout", controllerMouseOut);

      $rightControllerDark.setAttribute(
        "src",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hbGlnbi1yaWdodC1pY29uIGx1Y2lkZS1hbGlnbi1yaWdodCI+PHBhdGggZD0iTTIxIDEySDkiLz48cGF0aCBkPSJNMjEgMThINyIvPjxwYXRoIGQ9Ik0yMSA2SDMiLz48L3N2Zz4="
      );
      $rightControllerDark.setAttribute("style", iconStyle);
      $rightControllerDark.setAttribute(
        "class",
        `hidden dark:block ${$img.style.cssText.includes("margin: 0px 0px 0px auto;") ? "bg-gray-300 rounded-md dark:bg-gray-700 p-1" : ""}`
      );
      $rightControllerDark.addEventListener("mouseover", controllerMouseOver);
      $rightControllerDark.addEventListener("mouseout", controllerMouseOut);

      $leftControllerLight.addEventListener("click", () => {
        $img.setAttribute("style", `${$img.style.cssText} margin: 0 auto 0 0;`);
        dispatchNodeView();
      });
      $leftControllerDark.addEventListener("click", () => {
        $img.setAttribute("style", `${$img.style.cssText} margin: 0 auto 0 0;`);
        dispatchNodeView();
      });
      $centerControllerLight.addEventListener("click", () => {
        $img.setAttribute("style", `${$img.style.cssText} margin: 0 auto;`);
        dispatchNodeView();
      });
      $centerControllerDark.addEventListener("click", () => {
        $img.setAttribute("style", `${$img.style.cssText} margin: 0 auto;`);
        dispatchNodeView();
      });
      $rightControllerLight.addEventListener("click", () => {
        $img.setAttribute("style", `${$img.style.cssText} margin: 0 0 0 auto;`);
        dispatchNodeView();
      });
      $rightControllerDark.addEventListener("click", () => {
        $img.setAttribute("style", `${$img.style.cssText} margin: 0 0 0 auto;`);
        dispatchNodeView();
      });

      $postionController.appendChild($leftControllerLight);
      $postionController.appendChild($leftControllerDark);
      $postionController.appendChild($centerControllerDark);
      $postionController.appendChild($centerControllerLight);
      $postionController.appendChild($rightControllerDark);
      $postionController.appendChild($rightControllerLight);

      $container.appendChild($postionController);
    };

    $wrapper.setAttribute("style", `display: flex;`);
    $wrapper.appendChild($container);

    $container.setAttribute("style", `${style}`);
    $container.appendChild($img);

    Object.entries(node.attrs).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      $img.setAttribute(key, value);
    });

    if (!editable) return { dom: $container };
    const isMobile = document.documentElement.clientWidth < 768;
    const dotPosition = isMobile ? "-8px" : "-4px";
    const dotsPosition = [
      `top: ${dotPosition}; left: ${dotPosition}; cursor: nwse-resize;`,
      `top: ${dotPosition}; right: ${dotPosition}; cursor: nesw-resize;`,
      `bottom: ${dotPosition}; left: ${dotPosition}; cursor: nesw-resize;`,
      `bottom: ${dotPosition}; right: ${dotPosition}; cursor: nwse-resize;`,
    ];

    let isResizing = false;
    let startX: number, startWidth: number;

    $container.addEventListener("click", e => {
      //remove remaining dots and position controller
      const isMobile = document.documentElement.clientWidth < 768;
      isMobile &&
        (document.querySelector(".ProseMirror-focused") as HTMLElement)?.blur();

      if ($container.childElementCount > 3) {
        for (let i = 0; i < 5; i++) {
          // @ts-ignore
          $container.removeChild($container.lastChild as Node);
        }
      }

      paintPositionContoller();

      $container.setAttribute(
        "style",
        `position: relative; border: 1px dashed #6C6C6C; ${style} cursor: pointer;`
      );

      Array.from({ length: 4 }, (_, index) => {
        const $dot = document.createElement("div");
        $dot.setAttribute(
          "style",
          `position: absolute; width: ${isMobile ? 16 : 9}px; height: ${isMobile ? 16 : 9}px; border: 1.5px solid #6C6C6C; border-radius: 50%; ${dotsPosition[index]}`
        );

        $dot.addEventListener("mousedown", e => {
          e.preventDefault();
          isResizing = true;
          startX = e.clientX;
          startWidth = $container.offsetWidth;

          const onMouseMove = (e: MouseEvent) => {
            if (!isResizing) return;
            const deltaX =
              index % 2 === 0 ? -(e.clientX - startX) : e.clientX - startX;

            const newWidth = startWidth + deltaX;

            $container.style.width = newWidth + "px";

            $img.style.width = newWidth + "px";
          };

          const onMouseUp = () => {
            if (isResizing) {
              isResizing = false;
            }
            dispatchNodeView();

            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
          };

          document.addEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseup", onMouseUp);
        });

        $dot.addEventListener(
          "touchstart",
          e => {
            e.cancelable && e.preventDefault();
            isResizing = true;
            startX = e.touches[0].clientX;
            startWidth = $container.offsetWidth;

            const onTouchMove = (e: TouchEvent) => {
              if (!isResizing) return;
              const deltaX =
                index % 2 === 0
                  ? -(e.touches[0].clientX - startX)
                  : e.touches[0].clientX - startX;

              const newWidth = startWidth + deltaX;

              $container.style.width = newWidth + "px";

              $img.style.width = newWidth + "px";
            };

            const onTouchEnd = () => {
              if (isResizing) {
                isResizing = false;
              }
              dispatchNodeView();

              document.removeEventListener("touchmove", onTouchMove);
              document.removeEventListener("touchend", onTouchEnd);
            };

            document.addEventListener("touchmove", onTouchMove);
            document.addEventListener("touchend", onTouchEnd);
          },
          { passive: false }
        );
        $container.appendChild($dot);
      });
    });

    document.addEventListener("click", (e: MouseEvent) => {
      const $target = e.target as HTMLElement;
      const isClickInside =
        $container.contains($target) || $target.style.cssText === iconStyle;

      if (!isClickInside) {
        const containerStyle = $container.getAttribute("style");
        const newStyle = containerStyle?.replace(
          "border: 1px dashed #6C6C6C;",
          ""
        );
        $container.setAttribute("style", newStyle as string);

        if ($container.childElementCount > 3) {
          for (let i = 0; i < 5; i++) {
            // @ts-ignore
            $container.removeChild($container.lastChild as Node);
          }
        }
      }
    });

    return {
      dom: $wrapper,
    };
  };
}
