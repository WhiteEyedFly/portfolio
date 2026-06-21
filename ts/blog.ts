type Post = {
    date: string;
    title: string;
    text: string;
};

import { otherPages, makeLink } from "./shared.ts";

const posts: Post[] = [
    {
        date: "21/06/2026",
        title: "Learning Polish",
        text: "Wow it is hard to spend a whole day only speaking a language you don't know. Massive props to anyone who's ever learnt a language, it's such hard work. <br>It's been fun though; thankfully I have my wonderful partner to help me along."
    },
    {
        date: "31/05/2026",
        title: "Kilordle Solver finished",
        text: "The Kilordle project has been a fantastic motivation boost. I've been beating my head against it for a week now and finally found a solution that works. <br>More importantly though, I've gained experience with so many types of programming and so many programming ideas I've never experimented with before. I feel like I've gained a much better understanding of how problems are solved with code in the working world."
    },
    {
        date: "24/05/2026",
        title: "Portfolio launched",
        text: "Today I launched the portfolio. It's been rather a long time coming, I've really enjoyed getting to grips with HTML, CSS and JS over the course of the past couple weeks working on this."
    }
]

async function mainBlog(){
    for(let i = 0; i < posts.length; i++){
        addPost(posts[i])
    }
    for(let i = 0; i < otherPages.length; i++){
        makeLink(otherPages[i])
    }
}

async function addPost(post: Post){
    const posts = document.querySelector(".blogPosts");
    if (!posts) return

    posts.innerHTML += `<div class="post"><div><p>${post.date}</p><p class="title">${post.title}</p><p>${post.text}</p></div></div>`
}

mainBlog()