import {
  Badge,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@bistudio-feedback/ui";
import { NodeViewProps } from "@tiptap/core";
import { NodeViewWrapper } from "@tiptap/react";
import { CalendarDays } from "lucide-react";
import React from "react";

export const MentionTag: React.FC<NodeViewProps> = node => {
  return (
    <NodeViewWrapper as={"span"}>
      <HoverCard
        data-label={node.node.attrs.user.username}
        data-id={node.node.attrs.id}
      >
        <HoverCardTrigger className="cursor-pointer">
          <a href={`/members/${node.node.attrs.user.username}`}>
            <Badge variant={"green"}>@{node.node.attrs.user.username}</Badge>
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="not-prose w-80 bg-slate-50 dark:bg-slate-900">
          <div className="flex justify-center space-x-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white ring-8 ring-white">
              <img
                src={`https://api.dicebear.com/9.x/notionists/svg?seed=${node.node.attrs.id}`}
                className="w-8"
                alt="avatar"
              />
            </div>

            <div className="">
              <a
                className="hover:underline"
                href={`/members/${node.node.attrs.user.username}`}
              >
                <h4 className="text-sm font-semibold">
                  @{node.node.attrs.user.username}
                </h4>
              </a>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-muted-foreground text-xs">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </NodeViewWrapper>
  );
};
