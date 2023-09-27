import Balancer from "react-wrap-balancer";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";
import { formattedText } from "@/lib/utils";

const convertNewLines = (text: string) =>
    text.split("\n").map((line, i) => (
        <span key={i}>
            {line}
            <br />
        </span>
    ));

interface ChatLineProps extends Partial<Message> {
    sources: string[];
}

export function ChatLine({
    role = "assistant",
    content,
    sources,
}: ChatLineProps) {
    if (!content) {
        return null;
    }
    const formattedMessage = convertNewLines(content);

    return (
        <div>
            <Card className="mb-2">
                <CardHeader>
                    <CardTitle
                        className={
                            role != "assistant"
                                ? "text-amber-500 dark:text-amber-200"
                                : "text-blue-500 dark:text-blue-200"
                        }
                    >
                        {role == "assistant" ? "AI" : "You"}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                    <Balancer>{formattedMessage}</Balancer>
                </CardContent>
            </Card>
        </div>
    );
}
