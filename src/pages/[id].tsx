import { useRouter } from "next/router";

const Video = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
        <h1>Video: {id}</h1>
        </div>
    );
}

export default Video;