import { commentQuerys } from "./resources/comment/comment.schema";
import { postQuerys } from "./resources/post/post.schema";
import { userQuerys } from "./resources/user/user.schema";

const Query = `
    type Query{
        ${postQuerys}
        ${userQuerys}
        ${commentQuerys}
    }
`;

export {
    Query
}