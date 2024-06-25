import { FeedItem } from "./feed.interface";

class FeedService {
  public static sortByMostResent(combinedFeed: FeedItem[]): FeedItem[] {
    combinedFeed.sort((a, b) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
    return combinedFeed;
  }
}
export default FeedService;
