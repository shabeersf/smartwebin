import LoadingUi from "@/components/LoadingUi"
import ResetForm from "@/components/forms/ResetForm"
import { Suspense } from "react"


const ResetPage = () => {
    return (
        <Suspense fallback={<LoadingUi />}>

            <div className="px-2 lg:px-4">

                <ResetForm />
            </div>
        </Suspense>
    )
}

export default ResetPage