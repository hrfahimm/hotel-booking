import { authOption } from "@/libs/auth";
import nextAuth from "next-auth";

const handle = nextAuth(authOption);

export { handle as GET, handle as POST, handle as PUT, handle as DELETE };
