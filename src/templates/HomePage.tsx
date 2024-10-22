import type { FC } from "hono/jsx";
import Layout from "./Layout.js";

const HomePage: FC = (props) => {
  return (
    <Layout>
      <div
        class="d-flex justify-content-center align-items-center flex-column"
        style={{
          height: "100vh",
        }}
      >
        <h1>Asif Ekbal</h1>
      </div>
    </Layout>
  );
};

export default HomePage;
