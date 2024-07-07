import BlogCard from "components";

const App = () => {
  return (
    <BlogCard>
      poster={poster}
      tag={tag}
      title={title}
      description={description}
      userName={name}
      avatar={avatar}
      postedAt={postedAt}
    </BlogCard>
  );
};

export default App;
