import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";

const cx = classNames.bind(styles);

const CSSModule = () => {
  console.log(styles.wrapper);
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS module</span>
    </div>
  );
};

export default CSSModule;
