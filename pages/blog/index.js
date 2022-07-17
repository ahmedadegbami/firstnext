import Link from "next/link";

const BlogPage = () => {
  return (
    <div>
      <p>The nexted page</p>
      <Link href="/blog/about" replace>
        <a>About</a>
      </Link>
    </div>
  );
};

export default BlogPage;
