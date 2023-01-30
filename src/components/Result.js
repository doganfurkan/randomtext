import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchText } from "../redux/random/randomSlice";

export default function Result() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.random.text);
  const paras = useSelector((state) => state.random.paras);
  const tip = useSelector((state) => state.random.type);
  const loading = useSelector((state) => state.random.loading);
  useEffect(() => {
    dispatch(fetchText(paras, tip));
  }, [dispatch, paras, tip]);
  return (
    <div id="result">
      {loading
        ? "Loading ..."
        : result.map((item, key) => {
            return (
              <p key={key}>{tip === "html" ? `<p> ${item} </p>` : item}</p>
            );
          })}
    </div>
  );
}
