import { createClient, LiveMap } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
});

declare global {
  interface Liveblocks {
    // Trạng thái real-time của mỗi user (ví dụ: con trỏ chuột)
    Presence: {
      cursor?: { x: number; y: number } | null;
      message: string | null;
    };

    // Dữ liệu lưu trữ trên Liveblocks (bản đồ, danh sách, object)
    Storage: {
      canvasObjects: LiveMap<string, any>;
    };

    // Metadata của user (id, thông tin bổ sung)
    UserMeta: {
      id: string;
      info?: {
        name?: string;
        avatar?: string;
      };
    };

    // Sự kiện phòng (broadcasting events)
    RoomEvent: { type: string; payload?: any };

    // Metadata của luồng bình luận (dành cho comments)
    ThreadMetadata: {
      resolved: boolean;
      zIndex: number;
      time?: number;
      x: number;
      y: number;
    };

    // Thông tin chung của phòng
    RoomInfo: {
      title?: string;
      url?: string;
    };
  }
}

// Xuất ra các hooks từ Liveblocks
export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useUser,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
  },
} = createRoomContext(client);
