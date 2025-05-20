import { useState } from "react";
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
      <div>
        <h1>Q&A</h1>
        {items.map((item) => (
          <div key={item.id}>
            {/* function dipanggil ketika button diberi aksi "klik" */}
            <button onClick={() => handleClick(item.id)}>
              {item.question}
            </button>
            {/* conditional rendering and */}
            {openIds.includes(item.id) && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Questions;
