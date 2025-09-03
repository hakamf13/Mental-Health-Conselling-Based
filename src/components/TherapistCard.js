// // Using "Image" component from Next.JS to optimizing image
// import Image from 'next/image';

// // 1. Import link component (Linking component, Navigation)
// import Link from 'next/link';

// export default function TherapistCard({ counselor }) {
//     return (
//         <div className='flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200'>
//             <Image 
//                 src={counselor.photo_url}
//                 alt={`Foto ${counselor.name}`}
//                 width={80}
//                 height={80}
//                 className="rounded-full mr-4"
//             />
//             <div className='flex-grow'>
//                 <h2 className='text-xl font-bold'>{counselor.name}</h2>
//                 <p className='text-gray-600'>{counselor.specialization}</p>
//                 <p className='mt-4 font-semibold text-indigo-600 text-lg'>Rp {counselor.price_per_session.toLocaleString('id-ID')} / sesi</p>
//             </div>
//             {/* 2. Wrap button with link */}
//             <Link
//                 href={`/terapis/${counselor.id}`}
//                 className='rounded-full mr-4'
//             >
//                 <button className='ml-4 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 tra sition-colors duration-200'>
//                     Lihat Profil
//                 </button>
//             </Link>
//         </div>
//     );
// }

// 

// src/components/TherapistCard.js

import Image from 'next/image';
// 1. Impor komponen Link
import Link from 'next/link';

export default function TherapistCard({ counselor }) {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      <Image
        src={counselor.photo_url}
        alt={`Foto ${counselor.name}`}
        width={80}
        height={80}
        className="rounded-full mr-4"
      />
      <div className="flex-grow">
        <h2 className="text-xl font-bold">{counselor.name}</h2>
        <p className="text-gray-600">{counselor.specialization}</p>
        <p className="mt-4 font-semibold text-indigo-600 text-lg">
          Rp {counselor.price_per_session.toLocaleString('id-ID')} / sesi
        </p>
      </div>
      {/* 2. Bungkus tombol dengan Link */}
      <Link href={`/terapis/${counselor.id}`} className="ml-4">
        <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
          Lihat Profil
        </button>
      </Link>
    </div>
  );
}