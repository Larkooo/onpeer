import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LapTimerIcon } from "@radix-ui/react-icons";

const Dashboard = () => {
    return <div className="p-4">
        <Alert>
            <LapTimerIcon className="h-8 w-8" />
            <div className="ml-4">
            <AlertTitle className="text-2xl">Important</AlertTitle>
            <AlertDescription className="text-lg">You have 2 videos that are going to be automatically purged soon.</AlertDescription>
            </div>
        </Alert>
        <h1 className="text-4xl font-semibold">Your videos</h1>
    </div>;
}

export default Dashboard;