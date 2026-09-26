import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import mongodbFinddata from "@/app/api/auth/loginUser";
import mongodbConnect from "./dbconnect";




export const authOptions = {

    providers: [

        CredentialsProvider({

            name: "Credentials",

            credentials: {
                email: { label: "email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
                console.log('credintail', credentials)

                const user =await mongodbFinddata(credentials)
                if (!user) {
                    return null

                }
                return user;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })

    ],
     pages: {
        signIn: '/login'
    },
    
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if(account){
                const { provider, providerAccountId}=account;
                const {email, image,name }=user;

                const info = {
                    provider, providerAccountId,email,image,name
                }

                const mongodb = await mongodbConnect();
                const collaction = mongodb.collection('user')

                const currentUser = await collaction.findOne({providerAccountId})

                if(!currentUser){
                    const res = await collaction.insertOne(info)
                }

            }
            return true
        },

    }
   

}