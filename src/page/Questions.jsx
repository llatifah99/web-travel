import { useState } from "react";
import { ChevronDown } from "lucide-react";
const Questions = () => {
  // simpan id dalam bentuk array
  const [openIds, setOpenIds] = useState([]);
  // jika id sudah ada di array, hapus id -> "tutup", jika tidak ada simpan di array "buka"
  const handleClick = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((openIds) => openIds !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };
  const items = [
    {
      id: 1,
      question:
        "Are the documents accepted by European embassies and visa processing offices?",
      answer:
        "Yes, our documents are fully accepted by all embassies and visa processing offices, adhering to the required standards by organizations like: VFS - BLS-TLS",
    },
    {
      id: 2,
      question: "How long does it take for my documents to be delivered?",
      answer: "Up to 12 hours",
    },
    {
      id: 3,
      question: "How will I receive the requested documents?",
      answer:
        "You will receive your documents in the email you provided during the order process",
    },
    {
      id: 4,
      question:
        "Is it necessary to obtain paid flight tickets and a paid hotel reservation to apply for the visa?",
      answer:
        "No, it’s sufficient to have confirmed but unpaid flight and hotel reservations for the visa application. Once the visa is granted, you can proceed with actual bookings.",
    },
    {
      id: 5,
      question:
        "Can you provide flight and hotel reservations for visa applications to any country worldwide?",
      answer:
        "Yes, we offer flight and hotel reservations for visa applications to any country. Embassies and consulates worldwide require these reservations, and our services are not limited to the Schengen Area.",
    },
  ];
  return (
    <>
      {/* bg-gray-D0D3D9 */}
      <div className="bg-gray-100 min-h-screen bg-cover bg-center items-center text-left pb-24 px-6 md:px-16">
        <h1 className="pt-24 pb-10 text-4xl font-bold text-blue-001541 text-center">
          Q&A
        </h1>
        <div className="flex flex-col items-center justify-center text-blue-001541">
          {items.map((item) => (
            <div key={item.id} className="max-w-6xl w-full my-2 rounded-xl">
              {/* function dipanggil ketika button diberi aksi "klik" */}
              <button
                onClick={() => handleClick(item.id)}
                className="w-full py-2 px-4 bg-yellow-FFB729 rounded-xl  font-bold text-left flex justify-between items-center"
              >
                {item.question}
                <ChevronDown />
              </button>
              {/* conditional rendering and */}
              {openIds.includes(item.id) && (
                <p className="px-4 py-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Questions;
