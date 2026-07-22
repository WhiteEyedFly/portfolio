// Shapes of the JSON data files loaded via loadJson(). Kept in one place so
// every page's script agrees on what the data looks like.

export interface Page {
    text: string;
    link: string;
}

export interface Project {
    title: string;
    info: string;
    skills: string[];
    image: string;
    contributions: string;
    link: string;
}

export interface Experience {
    dates: string;
    title: string;
    skills: string[];
    description: string;
}

export interface Education {
    years: string;
    course: string;
    place: string;
    description: string;
}

export interface BlogPost {
    date: string;
    title: string;
    text: string;
}

export interface Contributor {
    name: string;
    git: string;
}

export interface Commit {
    sha: string;
    message: string;
    date: string;
    author: string;
    parents: string[];
    children: string[];
    branches: string[];
    position: number;
}

export interface BranchCommitRef {
    sha: string;
    url: string;
}

export interface Branch {
    name: string;
    commit: BranchCommitRef;
    protected: boolean;
}
