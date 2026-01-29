import { use } from "react";
import { type MessageProps } from "./MessageProps";
import { fetchMessage } from "./fetchMessage";

export const Message = ({shouldFail}: MessageProps) => {
    const message = use(fetchMessage(shouldFail));

    return (
        <>
          {message}
        </>
    )
}