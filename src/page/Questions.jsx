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
      question: "Are the documents accepted?",
      answer: "of course the documents are accepted in every country",
    },
    {
      id: 2,
      question: "Are You Okay?",
      answer: "I'm Okayy",
    },
  ];
  return (
    <>
      {/* bg-gray-D0D3D9 */}
      <div className="bg-gray-100 min-h-screen bg-cover bg-center items-center text-left pb-24 px-6 md:px-16">
        <h1 className="pt-24 pb-10 text-4xl font-bold text-blue-001541 text-center">
          Q&A
        </h1>
        <div className="flex flex-col items-center justify-center">
          {items.map((item) => (
            <div key={item.id} className="max-w-6xl w-full my-2 rounded-xl">
              {/* function dipanggil ketika button diberi aksi "klik" */}
              <button
                onClick={() => handleClick(item.id)}
                className="w-full py-2 px-4 bg-gray-D0D3D9 rounded-xl text-left flex justify-between items-center"
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
