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
  content: string
  name:string;
  company: string
  role: string
  image: string

}
export interface Post {
  image: string;
  title: string;
  content: string;
}