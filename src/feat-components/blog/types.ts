export interface PostType {
  _id: string;
  _raw: {
    flattenedPath: string;
  };
  title: string;
  date: string;
  description: string;
  body: {
    code: string;
  };
  tags?: string[];
  author?: string;
  slug: string;
  url: string;
}
