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
            title: "Name",
            type: "string",
            description: "Name of user",
            readOnly: true,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "url",
        }),
        defineField({
            name: "password",
            type: "string",
            hidden: true,
        }),
        defineField({
            name: "email",
            type: "string",
            title: "Email",
        }),
        defineField({
            name: "emailVarified",
            type: "datetime",
            hidden: true,
        }),
        defineField({
            name: "about",
            title: "About",
            type: "text",
            description: "A brief description about user",
        }),
    ],
};

export default user;
