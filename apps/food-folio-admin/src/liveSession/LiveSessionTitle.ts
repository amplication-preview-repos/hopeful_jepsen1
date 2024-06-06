import { LiveSession as TLiveSession } from "../api/liveSession/LiveSession";

export const LIVESESSION_TITLE_FIELD = "title";

export const LiveSessionTitle = (record: TLiveSession): string => {
  return record.title?.toString() || String(record.id);
};
