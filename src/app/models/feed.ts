export class Feed {
  current_page: number;
  total_page: number;
  feeds: FeedItem[];
}

export class FeedItem {
  id: number;
  username: string;
  item_id: string;
  service: string;
  title: string;
  url: string;
  thumbnail: string;
  created_time: number;
  data: Data;
  status: number;
  created: number;
  changed: number;
}

export class Data {
  display_url: string;
}
