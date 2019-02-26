import * as Sequelize from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";

export interface PostAttributes {
    id?: string;
    title?: string;
    content?: string;
    photo?: string;
    author?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface PostInstance extends Sequelize.Instance<PostAttributes> { }

export interface PostModel extends BaseModelInterface, Sequelize.Model<PostInstance, PostAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): PostModel => {

    const Post: PostModel =
        sequelize.define('Post', {

        })

}