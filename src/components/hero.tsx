/** @jsx jsx */
import { jsx } from "theme-ui";
const Hero = () => {
    return (
        <div
            sx={{
                boxSizing: `border-box`,
                display: `flex`,
                flexDirection: "column",
                justifyContent: `center`,
                alignItems: `center`,
                my: [4, 5],
                color: `secondary`,
                borderBottom: `none`,
            }}
        >
            <div sx={{ mb: [3, 4] }}>
                개발자로서 배운 것들을 기록해나가는 공간
            </div>
            <img
                src={"/hero-image.png"}
                alt="Logo"
                style={{ width: "50%" }}
                sx={{ mb: [3, 4] }}
            />
        </div>
    );
};

export default Hero;
