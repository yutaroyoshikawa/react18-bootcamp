import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Suspense, useMemo } from "react";
import { Repo } from "../../features/repos/components/Repo";

const RepoPage: NextPage = () => {
  const router = useRouter();
  const repoName = useMemo(() => {
    const { name } = router.query;

    return Array.isArray(name) ? name[0] : name ?? "";
  }, [router.query]);

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Repo org="mixigroup" repo={repoName} />
    </Suspense>
  );
};

export default RepoPage;
