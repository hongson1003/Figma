import CursorSVG from "@/public/assets/CursorSVG";
import { CursorChatProps, CursorMode } from "@/types/type";

const CursorChat = ({
  cursor,
  cursorState,
  setCursorState,
  updateMyPresence,
}: CursorChatProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMyPresence({ message: e.target.value });
    setCursorState({
      mode: CursorMode.Chat,
      previousMessage: null,
      message: e.target.value,
    });
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCursorState({
        mode: CursorMode.Chat,
        // @ts-ignore
        previousMessage: cursorState.message,
        message: "",
      });
    } else if (e.key === "Escape") {
      setCursorState({
        mode: CursorMode.Hidden,
      });
    }
  };

  return (
    <div
      className="absolute top-0 left-0"
      style={{
        transform: `translate(${cursor.x}px, ${cursor.y}px)`,
      }}
    >
      {true && (
        <>
          <CursorSVG color="#000000" />

          <div
            className="absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]"
            onKeyUp={(e) => e.stopPropagation()}
            style={{
              borderRadius: 20,
            }}
          >
            {cursorState.previousMessage && (
              <div>{cursorState.previousMessage}</div>
            )}

            <input
              className="z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none"
              autoFocus
              onChange={handleOnChange}
              onKeyDown={handleOnKeyDown}
              placeholder={cursorState.previousMessage ? "" : "Say something…"}
              value={cursorState.message}
              maxLength={50}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CursorChat;
