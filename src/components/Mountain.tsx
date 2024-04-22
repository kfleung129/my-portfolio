'use client';
import styles from "@/styles/home.module.css";

type Props = {
    width?: number,
    height?: number,
    zIndex?: number,
    left: number,
    top: number,
    color?: string,
}

export default function Mountain(props: Props) {
  const { width, height, zIndex, left, top, color } = props;
  return (
    <div
        className={styles.mountain}
        style={{
            borderLeftWidth: width,
            borderRightWidth: width,
            borderBottomWidth: height,
            zIndex: zIndex,
            borderBottomColor: color,
            left: left,
            top: top
        }}
    >
        
    </div>
  );
}