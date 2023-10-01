import { ChatGPTMessage } from "@/types";
import { Message } from "ai";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function scrollToBottom(containerRef: React.RefObject<HTMLElement>) {
    if (containerRef.current) {
        const lastMessage = containerRef.current.lastElementChild;
        if (lastMessage) {
            const scrollOptions: ScrollIntoViewOptions = {
                behavior: "smooth",
                block: "end",
            };
            lastMessage.scrollIntoView(scrollOptions);
        }
    }
}

export const formatChatHistory = (chatHistory: [string, string][]) => {
    const formattedDialogueTurns = chatHistory.map(
        (dialogueTurn) =>
            `Human: ${dialogueTurn[0]}\nAssistant: ${dialogueTurn[1]}`
    );

    return formattedDialogueTurns.join("\n");
};

export function formattedText(inputText: string) {
    return inputText;
}

export const initialMessages: Message[] = [
    {
        role: "assistant",
        id: "0",
        content: "Ask me questions about Rooftop Gardening.",
    },
];

interface Data {
    sources: string[];
}

export const getSources = (data: Data[], role: string, index: number) => {
    if (role === "assistant" && index >= 2 && (index - 2) % 2 === 0) {
        const sourcesIndex = (index - 2) / 2;
        if (data[sourcesIndex] && data[sourcesIndex].sources) {
            return data[sourcesIndex].sources;
        }
    }
    return [];
};
