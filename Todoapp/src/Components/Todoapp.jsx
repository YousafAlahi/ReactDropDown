import { useState } from "react";

const Todoapp = () => {
  const [text, setText] = useState();
  const [list, setList] = useState([]);

  //const AddText =(e)=>( setText(e.target.value))

  // const AddText = (e) => {
  //     return(
  //         setText(e.target.value)

  //     )
  // }
  // console.log(text)

  const AddText = (e) => {
    setText(e.target.value);
  };

  // console.log(text);

  // const AddBtn = () => {
  //     return(
  //         setList([...list, text])
  //          )

  // }
  // //console.log(list)

  const AddBtn = () => {
    setList([...list, text]);
    setText("");
  };
  console.log(list);

  // const RemoveItems = (index) =>{
  //     const update = list.filter((val,id)=>{
  //             return(
  //                 id != index
  //             )
  //     })
  //     setList(update)
  // }

  const RemoveItems = (index) => {
    const update = list.filter((val, id) => {
      return id != index;
    });
    setList(update);
  };

  return (
    <>
      <div className="w-[400px] h-[600px] bg-slate-400 mx-auto">
        <h1 className="text-2xl lg:text-4xl text-center pt-11">TodoApp</h1>
        <div>
          <input
            type="text"
            placeholder="text"
            className="w-[250px] px-4 rounded-md ml-2 mt-10 py-2"
            value={text}
            onChange={AddText}
          />
          <button
            className="text-white bg-black boder-none rounded-md py-2 hover:bg-red-700 w-[100px]"
            onClick={AddBtn}
          >
            Add More
          </button>

          {list.map((item, index) => {
            return (
              <div key={index} className="m-2 ml-4">
                <p>
                  {item}
                  <button
                    onClick={() => RemoveItems(index)}
                    className="bg-black text-white border-none px-2 py-1 rounded-lg hover:bg-red-700"
                  >
                    Remove
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todoapp;
