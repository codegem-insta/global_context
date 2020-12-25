import React from 'react';

import { UserPostModel } from '../UserPosts';

import style from './UserPost.module.css'

function UserPost({ post }: { post: UserPostModel }) {
    return (
        <div>
            <div className={style.PostHeader}>
                <div className={style.Avatar}></div>
                <div>{post.username}</div>
            </div>

            <div className={style.Post} style={{ backgroundColor: postColorToCssColor(post.color) }}>
            </div>
        </div>
    );
}

// Utility function that converts the post color to 
// a softer CSS color choice 
function postColorToCssColor(postColor: string) {
    switch (postColor) {
        case 'Blue': return 'lightskyblue';
        case 'Green': return 'lightgreen';
        case 'Red': return 'salmon';
        default: return 'lightslategray';
    }
}

export default UserPost;