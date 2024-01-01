// import { Rule } from "postcss";
import { defineField } from "sanity";

const user = {
    name: "user",
    title: "user",
    type: "document",
    fields: [
        defineField({
            name: "isAdmin",
            title: "Is Admin",
            type: "boolean",
            description: " Chake If is Admin",
            initialValue: false,
            validation: (Rule) => Rule.required(),
            // readOnly: true,
            // hidden: true,
        }),
        defineField({
            name: "name",
            title: "name",
            type: "string",
            description: "Name of user",
            readOnly: true,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "image",
            type: "url",
        }),
        defineField({
            name: "password",
            type: "string",
            hidden: true,
        }),
        defineField({
            name: "about",
            title: "about",
            type: "text",
            description: "A brief description about user",
        }),
    ],
};

export default user;
