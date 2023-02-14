// types svg files
declare module '*.svg' {
  const content: string;
  export default content;
}

// types mdx files
declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}

// types arg pattern
interface ArgStory {
  story: {
    parameters: {
      docs: {
        page: (props: any) => JSX.Element;
      };
    };
  };
}
