export interface Post {
    image?: string;
    legend: string;
    likes: string[]
    comments: Comments[];
}


export interface Comments {
    user: string;
    comment: string;
}
