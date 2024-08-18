import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.backdrop}>
      <div className={css.loaderCircle}></div>
    </div>
  );
}
