import React from 'react';

import { UserPostModel } from '../UserPosts';

function UserPost({ post }: { post: UserPostModel }) {
    return (
        <div>
            <div>
                <div>Avatar</div>
                <div>{post.username}</div>
            </div>

            <div>
            </div>
        </div>
    );
}

export default UserPost;