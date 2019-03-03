import { commentMutations } from "./resources/comment/comment.schema";
import { postMutations } from "./resources/post/post.schema";
import { userMutations } from "./resources/user/user.schema";

const Mutation = `
    type Mutation{
        ${postMutations}
        ${userMutations}
        ${commentMutations}
    }
`;

export {
    Mutation
}