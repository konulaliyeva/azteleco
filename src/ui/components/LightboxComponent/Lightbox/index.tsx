import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Inline } from "yet-another-react-lightbox/plugins";
import ImageGallery from "../ImageGallery";
import type { LightboxType } from "./lightbox.type";
import "../style.css";

const LightBoxComponent = ({
    index,
    setIndex,
    updateIndex,
    toggleOpen,
    open,
    setOpen,
    data,
}:LightboxType) => {
    return (
        <>
            <Lightbox
                index={index}
                slides={data}
                plugins={[Inline]}
                on={{
                    view: updateIndex,
                    click: toggleOpen(true),
                }}
                carousel={{
                    padding: 0,
                    spacing: 0,
                    imageFit: "cover",
                }}
                inline={{
                    className: `
                      w-full 
                      h-[300px] 
                      sm:h-[350px] 
                      md:h-[400px] 
                      lg:h-[450px] 
                      aspect-[3/2]
                                        `,
                  }}
                thumbnails={{
                    position: "bottom",
                    width: 96,
                    height: 80,
                    gap: 10,
                    imageFit: "cover",
                    border: 0,
                }}
                styles={{
                    container: {
                        borderRadius: "16px",
                    },
                    thumbnail: {
                        backgroundColor: "transparent",
                        padding: "0",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                        borderRadius: "8px",
                    },
                    thumbnailsContainer: {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        outline: "none",
                        border: "none",
                        padding: 0,
                        margin: 0,
                        marginTop: "20px",
                    },
                    thumbnailsTrack: {
                        boxShadow: "none",
                    },
                    button: {
                        transition: "transform 0.3s ease, background-color 0.3s ease",
                        background: "#121926A3",
                        borderRadius: "33px",
                        height: "48px",
                        width: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "20px",
                        marginLeft: "20px",
                    },
                }}
            />
            <Lightbox
                open={open}
                close={toggleOpen(false)}
                index={index}
                slides={data}
                on={{ view: updateIndex }}
                animation={{ fade: 0 }}
                controller={{
                    closeOnPullDown: true,
                    closeOnBackdropClick: true,
                }}
            />
            <ImageGallery
                onOpenFull={(currentIndex) => {
                    setIndex(currentIndex);
                    setOpen(true);
                }}
                data={data}
                onClick={(currentIndex) => setIndex(currentIndex)}
            />
        </>
    );
};

export default LightBoxComponent;
