# start project
- npx create-next-app@latest saas-shiftoria

# libraries
- npm install next-themes
- npm i react-icons

# shadcn
- npx shadcn@latest init
- npx shadcn@latest add sonner
- npx shadcn@latest add card
- npx shadcn@latest add sheet button

# clerk
- npm install @clerk/nextjs

# prisma
- npm install prisma tsx @types/pg --save-dev
- npm install @prisma/client @prisma/adapter-pg dotenv pg
- npx prisma init --output ../app/generated/prisma
// create neon database and change connection string in the to .env
- npx prisma generate
- npx prisma migrate dev --name init