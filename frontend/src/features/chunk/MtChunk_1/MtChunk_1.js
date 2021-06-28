import { useDispatch } from "react-redux";
import { Input } from "antd";

import { updateChunk } from "../../resume/resumeSlice";
import "./MtChunk_1.css";
const { TextArea } = Input;

export default ({ chunk, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="chunk" id={id}>
      <div className="textarea">
        <TextArea autoSize bordered={false} className="maintitle" value={chunk.value.text} onChange={(e) => dispatch(updateChunk(id, e.target.value))} />
      </div>
    </div>
  );
};
