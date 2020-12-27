import React, { useContext } from 'react';
import BluePostsContext from '../Context/context';
import UserPost from './UserPost/UserPost';

import style from './UserPosts.module.css';

export interface UserPostModel {
    id: number;
    username: string;
    color: string;
}

function UserPosts() {
    const [showBluePosts] = useContext(BluePostsContext);
    const userPosts = getUserPosts().filter(post => showBluePosts || post.color !== "Blue");

    return (
        <div className={style.Posts}>
            {userPosts.map(post => <UserPost key={post.id} post={post} />)}
        </div>
    );
}

// Some function that fetches user posts
function getUserPosts(): UserPostModel[] {
    return [
        { id: 0, username: "Michael Scott", color: "Blue" },
        { id: 1, username: "John Snow", color: "Green" },
        { id: 2, username: "Homer Simpson", color: "Red" },
        { id: 3, username: "Walter White", color: "Blue" }
    ];
}

export default UserPosts;