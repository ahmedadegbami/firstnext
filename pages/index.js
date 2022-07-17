import Link from "next/link";
import BlogPage from "./blog";
import Profile from "./blog/profile";

const HomePage = () => {
  return (
    <>
      <div>
        <BlogPage />
        <Profile />
        <p>HomePage</p>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
