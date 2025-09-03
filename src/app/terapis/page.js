import { createSupabaseClient } from "@/lib/supabaseClient";

// Import component
import TherapistCard from "@/components/TherapistCard";

export default async function TerapisPage() {
    const supabase = createSupabaseClient();

    const {data: counselors, error} = await supabase
        .from('counselors')
        .select('*');

    if (error) {
        return <p>Gagal memuat data terapis. Coba lagi nanti.</p>;
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
                    Temukan Terapis Anda
                </h1>
                <div className="space-y-6">
                    {/* Loop and call the TherapistCard component */}
                    {counselors.map((counselor) => (
                        <TherapistCard key={counselor.id} counselor={counselor} />
                    ))}
                </div>
            </div>
        </div>
    )
}