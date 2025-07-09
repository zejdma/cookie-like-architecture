import { cn } from "@bistudio-feedback/ui";
import type { SuggestionOptions, SuggestionProps } from "@tiptap/suggestion";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import type { MentionSuggestion } from "../lib/members";

export type SuggestionListRef = {
  // For convenience using this SuggestionList from within the
  // mentionSuggestionOptions, we'll match the signature of SuggestionOptions's
  // `onKeyDown` returned in its `render` function
  onKeyDown: NonNullable<
    ReturnType<
      NonNullable<SuggestionOptions<MentionSuggestion>["render"]>
    >["onKeyDown"]
  >;
};

// This type is based on
// https://github.com/ueberdosis/tiptap/blob/a27c35ac8f1afc9d51f235271814702bc72f1e01/packages/extension-mention/src/mention.ts#L73-L103.
// TODO(Steven DeMartini): Use the Tiptap exported MentionNodeAttrs interface
// once https://github.com/ueberdosis/tiptap/pull/4136 is merged.
interface MentionNodeAttrs {
  id: string | null;
  reputation?: number | null;
  user: {
    username: string;
    id: string;
    roleName: string;
    roleDisplayName: string;
  };
}

export type SuggestionListProps = SuggestionProps<MentionSuggestion>;

const SuggestionList = forwardRef<SuggestionListRef, SuggestionListProps>(
  (props, ref) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const selectItem = (index: number) => {
      if (index >= props.items.length) {
        // Make sure we actually have enough items to select the given index. For
        // instance, if a user presses "Enter" when there are no options, the index will
        // be 0 but there won't be any items, so just ignore the callback here
        return;
      }

      const suggestion = props.items[index];

      // Set all of the attributes of our Mention node based on the suggestion
      // data. The fields of `suggestion` will depend on whatever data you
      // return from your `items` function in your "suggestion" options handler.
      // Our suggestion handler returns `MentionSuggestion`s (which we've
      // indicated via SuggestionProps<MentionSuggestion>). We are passing an
      // object of the `MentionNodeAttrs` shape when calling `command` (utilized
      // by the Mention extension to create a Mention Node).
      const mentionItem: MentionNodeAttrs = {
        id: suggestion.id,
        reputation: suggestion.reputation,
        user: {
          username: suggestion.user.username,
          id: suggestion.id,
        },
      };
      // @ts-expect-error there is currently a bug in the Tiptap SuggestionProps
      // type where if you specify the suggestion type (like
      // `SuggestionProps<MentionSuggestion>`), it will incorrectly require that
      // type variable for `command`'s argument as well (whereas instead the
      // type of that argument should be the Mention Node attributes). This
      // should be fixed once https://github.com/ueberdosis/tiptap/pull/4136 is
      // merged and we can add a separate type arg to `SuggestionProps` to
      // specify the type of the commanded selected item.
      props.command(mentionItem);
    };

    const upHandler = () => {
      setSelectedIndex(
        (selectedIndex + props.items.length - 1) % props.items.length
      );
    };

    const downHandler = () => {
      setSelectedIndex((selectedIndex + 1) % props.items.length);
    };

    const enterHandler = () => {
      selectItem(selectedIndex);
    };

    useEffect(() => setSelectedIndex(0), [props.items]);

    useImperativeHandle(ref, () => ({
      onKeyDown: ({ event }) => {
        if (event.key === "ArrowUp") {
          upHandler();
          return true;
        }

        if (event.key === "ArrowDown") {
          downHandler();
          return true;
        }

        if (event.key === "Enter") {
          enterHandler();
          return true;
        }

        return false;
      },
    }));

    return (
      <div>
        {props.items.length ? (
          <div className="scrollbar-thin bg-popover dark:bg-popover max-h-36 overflow-y-auto rounded-lg p-1 shadow-lg">
            {props.items.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "text-muted-foreground hover:bg-menu-background-selected hover:text-text-primary dark:hover:bg-menu-background-selected dark:hover:text-text-primary flex cursor-pointer items-center gap-x-2 rounded-md px-4 py-2 transition-colors",
                  index === selectedIndex &&
                    "bg-accent-primary/20 text-text-primary dark:bg-accent-primary/30 dark:text-text-primary font-semibold"
                )}
                onClick={() => selectItem(index)}
              >
                <img
                  src={`https://api.dicebear.com/9.x/notionists/svg?seed=${item.id}`}
                  alt=""
                  className="mr-2 h-6 w-6 rounded-full"
                />
                <div className="flex-1 truncate">{item.user.username}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-popover dark:bg-popover rounded-lg p-1 shadow-lg">
            <p className="text-muted-foreground">
              Enter at least one character
            </p>
          </div>
        )}
      </div>
    );
  }
);

SuggestionList.displayName = "SuggestionList";

export default SuggestionList;
