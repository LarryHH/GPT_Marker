import Prompt from "@/components/Prompts";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Response from "@/components/Response";

const Home: React.FC = (props: any) => {
  const { title } = props;
  return (
    <>
      <Header title={title} />
      <div className={styles.container}>
        <Prompt name="system" width={100} />
        <div className={styles.rightContainer}>
          <Prompt name="user" width={100} showButton={true} />
          <Response />
          {/* <Prompt name="response" width={100} /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
