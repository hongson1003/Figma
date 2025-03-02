import { COLORS } from "@/constants";
import { LiveCursorProps } from "@/types/type";
import Cursor from "./Cursor";

const LiveCursor = ({ others }: LiveCursorProps) => {
  return others.map(({ connectionId, presence }) => {
    if (!presence.cursor) return;

    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.cursor.message}
      />
    );
  });
};

export default LiveCursor;
