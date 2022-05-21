import Link from "next/link";
import { useEffect } from "react";
import styles from "../../styles/Teams.module.css";

const TeamsPage = () => {
  return <div>This is the Teams landing page</div>;
};

export const NestedLayout = ({ children }) => {
  useEffect(() => {
    console.log("TeamsPageLayout mounted");
    return () => console.log("TeamsPageLayout unmounted");
  }, []);
  return (
    <div className={styles.teams}>
      <div className={styles.sidebar}>
        <h2>Teams</h2>
        <nav>
          <ol>
            <li>
              <Link href="/teams/team1">Team1</Link>
            </li>
            <li>
              <Link href="/teams/team2">Team2</Link>
            </li>
            <li>
              <Link href="/teams/team3">Team3</Link>
            </li>
          </ol>
        </nav>
      </div>
      {children}
    </div>
  );
};

export const TeamsPageLayout = (page) => <NestedLayout>{page}</NestedLayout>;

TeamsPage.getLayout = TeamsPageLayout;

export default TeamsPage;
