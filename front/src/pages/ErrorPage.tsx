import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as Error;

    return (
        <div
            id="error-page"
            className="flex flex-col items-center justify-center gap-12 h-screen "
        >
            <h1 className=" font-extrabold text-2xl">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.message}</i>
            </p>
        </div>
    );
}
