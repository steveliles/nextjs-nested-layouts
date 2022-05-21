import { useRouter } from "next/router";
import { TeamPageLayout } from "./";

const TeamFixturesPage = () => {
  const router = useRouter();
  const { team } = router.query;
  return (
    <section>
      <h3>{team} fixtures</h3>
    </section>
  );
};

TeamFixturesPage.getLayout = TeamPageLayout;

export default TeamFixturesPage;
