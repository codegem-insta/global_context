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

            <div className={style.Post}>
            </div>
        </div>
    );
}

export default UserPost;