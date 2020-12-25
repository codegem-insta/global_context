import React from 'react';
import UserPost from './UserPost/UserPost';

export interface UserPostModel {
    id: number;
    username: string;
    color: string;
}

function UserPosts() {
    const userPosts = getUserPosts();

    return (
        <div>
            {userPosts.map(post => <UserPost key={post.id} post={post} />)}
        </div>
    );
}

// Some function that fetches user posts
function getUserPosts(): UserPostModel[] {
    return [
        { id: 0, username: "Michael Scott", color: "Blue" },
        { id: 1, username: "John Snow", color: "Green" },
        { id: 2, username: "Hank", color: "Red" },
        { id: 3, username: "Walter White", color: "Blue" }
    ];
}

export default UserPosts;