import { useRouter } from "next/router";
import Link from "next/link";
import { TeamsPageLayout } from "../index";
import nestLayout from "../../../utils/nestLayout";
import { useEffect } from "react";

const TeamPage = () => {
  const router = useRouter();
  const { team } = router.query;
  return (
    <section>
      <h3>{team}</h3>
    </section>
  );
};

const NestedLayout = ({ children }) => {
  useEffect(() => {
    console.log("TeamPageLayout mounted");
    return () => console.log("TeamPageLayout unmounted");
  }, []);

  const router = useRouter();
  const { team } = router.query;

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href={`/teams/${team}`}>About</Link>
            </li>
            <li>
              <Link href={`/teams/${team}/players`}>Players</Link>
            </li>
            <li>
              <Link href={`/teams/${team}/fixtures`}>Fixtures</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>{children}</section>
    </div>
  );
};

const getLayout = (page) => <NestedLayout>{page}</NestedLayout>;

export const TeamPageLayout = nestLayout(TeamsPageLayout, getLayout);

TeamPage.getLayout = TeamPageLayout;

export default TeamPage;
