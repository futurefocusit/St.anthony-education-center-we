export interface Blog {
  _id: string
  title: string
  content: string
  image: string
}


export interface Project {
  _id: string;
  title: string;
  content: string;
  image: string;
}

export interface Team {
  _id: string;
  name: string;
  role: string;
  image: string;
  linkedInProfile: string;
  instagramProfile: string;
  twiterProfile: string;
}

export interface Testimony {
  _id: string;
  content: { type: string; required: true };
  authorName: { type: string; required: true };
  authorCompany: { type: string; required: true };
  authorRole: { type: string; required: true };
}
export interface Post {
  image: string;
  title: string;
  content: string;
}