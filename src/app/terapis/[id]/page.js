import { createSupabaseClient } from "@/lib/supabaseClient";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import Image from 'next/image';

// Function to get data from one therapist depends on its ID
async function getCounselorById(id) {
    const supabase = createSupabaseClient();
    const {data, error} = await supabase
        .from('counselors')
        .select('*')
        .eq('id', id) // Searching a row where the column 'id' similar with the given ID
        .single(); // Set only one result

    if (error) {
        console.error('Error fetching counselor:', error);
        return null;
    }
    return data;
}

// Attention 'params' in here, Next.js automatically give it
export default async function CounselorDetailPage({params}) {
    const counselor = await getCounselorById(params.id);

    // If there was an error affect therapis page not find
    if (!counselor) {
        return <p>Terapis tidak ditemukan</p>
    }

    return (
        <div className="bg-white-50 min-h-screen">
            <div className="max-w-4xl mx-auto py-12 px-4">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-start">
                        <Image
                            src={counselor.photo_url}
                            alt={`Foto ${counselor.name}`}
                            width={150}
                            height={150}
                            className="rounded-full mr-8"
                        />
                        <div className="flex-grow">
                            <h1 className="text-4xl font-bold text-gray-800">{counselor.name}</h1>
                            <p className="text-xl text-gray-600 mt-2">{counselor.specialization}</p>
                            <p className="mt-6 font-semibold text-2xl text-indigo-600">Rp {counselor.price_per_session.toLocaleString('id-ID')} / sesi</p>
                            <button className="mt-6 w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200">Ajukan Jadwal Sesi</button>
                        </div>
                    </div>
                    <div>
                        <h2 className="mt-10 pt-6 border-t">Tentang Terapis</h2>
                        <p className="text-gray-700 leading-relaxed">{counselor.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}