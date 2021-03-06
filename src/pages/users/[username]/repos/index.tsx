import RepoListPage from "modules/repo_list/RepoListPage";
import { useRouter } from "next/dist/client/router";

export default function repos() {
	const router = useRouter();
	const { username } = router.query;
	if (typeof username !== "string") {
		return <></>;
	}
	return <RepoListPage username={username} />;
}
