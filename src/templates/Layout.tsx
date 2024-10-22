import type { FC } from "hono/jsx";

const Layout: FC = (props) => {
  return (
    <html>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.3.3/lumen/bootstrap.min.css"
        integrity="sha512-N6Wwrw2+w72hDf55YI/j+y3JUXpO7qTuo+kilvcpFJqEabBFA3nurVZineUcg4+op0dJLrzQXcNNif9Gf/ECPA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <body>{props.children}</body>
    </html>
  );
};

export default Layout;
