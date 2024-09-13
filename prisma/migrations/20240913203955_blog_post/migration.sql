-- CreateTable
CREATE TABLE "Blogs" (
    "id" SERIAL NOT NULL,
    "Blog_Title" TEXT NOT NULL,
    "Blog_Post" TEXT NOT NULL,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
