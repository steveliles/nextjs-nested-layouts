import { useRouter } from "next/router";
import { TeamPageLayout } from "./";

const TeamPlayersPage = () => {
  const router = useRouter();
  const { team } = router.query;
  return (
    <section>
      <h3>{team} players</h3>
    </section>
  );
};

TeamPlayersPage.getLayout = TeamPageLayout;

export default TeamPlayersPage;
